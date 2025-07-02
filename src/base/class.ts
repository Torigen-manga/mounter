import type {
  Chapter,
  ChapterEntry,
  Manga,
  MangaEntry,
  Section,
  Tag,
  PagedResults,
} from "../";

import type {
  RequestManager,
  SearchRequest,
  SourceCapabilities,
  SourceFieldsMetadata,
  SourceInfo,
  SourceProvider,
} from "./interfaces";

/**
 * Abstract class that serves as the base for implementing sources for manga readers.
 * Provides the necessary structure and functionality for extensions to interact with
 * the host application, defining capabilities and metadata related to the source.
 *
 * @template T - A specific type that extends `SourceCapabilities`, describing the
 * supported capabilities for the source.
 */
abstract class AbstractSource<T extends SourceCapabilities>
  implements SourceProvider
{
  /**
   * A network request manager provided by the host application. This is the only tool
   * the extension has for making network requests.
   */
  protected readonly requestManager: RequestManager;

  // --- SELF-DESCRIBING METADATA ---
  // The following properties must be implemented by the subclass to define specific details
  // about the source.

  /**
   * Information about the source, including its name, author, version, and dependencies.
   * This is defined by the subclass.
   */
  abstract readonly info: SourceInfo;

  /**
   * A declaration of the capabilities supported by this source. This defines which features
   * the source can provide, such as search, homepage retrieval, etc.
   * The specific capabilities depend on the `T` type, which extends `SourceCapabilities`.
   */
  abstract readonly capabilities: T;

  /**
   * Metadata for the source's fields, typically related to search parameters and "view more" sections.
   * This defines how fields are structured for searching or viewing more content.
   */
  abstract readonly fieldsMetadata: SourceFieldsMetadata;

  /**
   * The constructor, which takes a `RequestManager` as an argument. This manager is used
   * to make network requests on behalf of the source.
   *
   * @param requestManager - The network request manager provided by the host application.
   */
  constructor(requestManager: RequestManager) {
    this.requestManager = requestManager;
  }

  // --- REQUIRED METHODS ---
  // These methods must be implemented by the subclass based on the source capabilities.
  // Each method is conditional based on the source's capabilities, which are determined by `T`.

  /**
   * Fetches the homepage data for the source. This method is only available if the source supports
   * the `supportsHomepage` capability.
   *
   * @returns A promise that resolves with an array of sections representing the homepage.
   */
  abstract getHomepage(): T["supportsHomepage"] extends true
    ? Promise<Section[]>
    : never;

  /**
   * Retrieves search results based on the provided query. This method is only available if the source
   * supports the `supportsSearch` capability.
   *
   * @param query - The search query to execute.
   * @returns A promise that resolves with a `PagedResults` object containing the search results.
   */
  abstract getSearchResults(
    query: SearchRequest
  ): T["supportsSearch"] extends true
    ? Promise<PagedResults<MangaEntry>>
    : never;

  /**
   * Fetches details for a specific manga. This method is required for all sources.
   *
   * @param mangaId - The ID of the manga to fetch details for.
   * @returns A promise that resolves with the manga details.
   */
  abstract getMangaDetails(mangaId: string): Promise<Manga>;

  /**
   * Retrieves the list of chapters for a specific manga. This method is required for all sources.
   *
   * @param mangaId - The ID of the manga to retrieve chapters for.
   * @returns A promise that resolves with an array of chapter entries.
   */
  abstract getChapters(mangaId: string): Promise<ChapterEntry[]>;

  /**
   * Fetches details for a specific chapter of a manga. This method is required for all sources.
   *
   * @param mangaId - The ID of the manga to fetch chapter details for.
   * @param chapterId - The ID of the chapter to fetch details for.
   * @returns A promise that resolves with the chapter details.
   */
  abstract getChapterDetails(
    mangaId: string,
    chapterId: string
  ): Promise<Chapter>;

  /**
   * Fetches additional items for a specific section. This method is only available if the source
   * supports the `supportsViewMore` capability.
   *
   * @param sectionId - The ID of the section to fetch additional items for.
   * @param metadata - Metadata used to fetch additional items (e.g., pagination info).
   * @returns A promise that resolves with a `PagedResults` object containing the additional items.
   */
  abstract getViewMoreItems(
    sectionId: string,
    metadata: any
  ): T["supportsViewMore"] extends true
    ? Promise<PagedResults<MangaEntry>>
    : never;

  /**
   * Fetches a list of tags that can be included or excluded in search filters. This method is only
   * available if the source supports `supportIncludeTags` or `supportExcludeTags`.
   *
   * @returns A promise that resolves with an array of `Tag` objects.
   */
  abstract getSearchTags(): T[
    | "supportIncludeTags"
    | "supportExcludeTags"] extends true
    ? Promise<Tag[]>
    : never;
}

export { AbstractSource };
