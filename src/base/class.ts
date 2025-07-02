import type { Chapter, ChapterEntry, Manga, Section, Tag } from "../generated";

import type {
  PagedResults,
  RequestManager,
  SearchRequest,
  SourceCapabilities,
  SourceFieldsMetadata,
  SourceInfo,
  SourceProvider,
} from "./interfaces";

abstract class AbstractSource<T extends SourceCapabilities>
  implements SourceProvider
{
  /**
   * The RequestManager is a dependency injected by the host application.
   * It's the only tool the extension has for making network requests.
   */
  protected readonly requestManager: RequestManager;

  // --- SELF-DESCRIBING METADATA ---
  // These properties MUST be defined by the subclass.

  /**
   * Static information about the source, like its name, author, and version.
   */
  abstract readonly info: SourceInfo;
  /**
   * A declaration of what this source can and cannot do.
   */
  abstract readonly capabilities: T;
  /**
   * A schema describing the parameters for search and "view more" sections.
   */
  abstract readonly fieldsMetadata: SourceFieldsMetadata;

  /**
   * The constructor now only takes the network dependency.
   * @param requestManager An object for making network requests, provided by the host app.
   */
  constructor(requestManager: RequestManager) {
    this.requestManager = requestManager;
  }

  // --- METHODS ---
  // These methods must be implemented by the source.
  abstract getHomepage(): T["supportsHomepage"] extends true
    ? Promise<Section[]>
    : never;

  abstract getSearchResults(
    query: SearchRequest
  ): T["supportsSearch"] extends true ? Promise<PagedResults> : never;

  abstract getMangaDetails(mangaId: string): Promise<Manga>;
  abstract getChapters(mangaId: string): Promise<ChapterEntry[]>;

  abstract getChapterDetails(
    mangaId: string,
    chapterId: string
  ): Promise<Chapter>;

  abstract getViewMoreItems(
    sectionId: string,
    metadata: any
  ): T["supportsViewMore"] extends true ? Promise<PagedResults> : never;

  abstract getSearchTags(): T[
    | "supportIncludeTags"
    | "supportExcludeTags"] extends true
    ? Promise<Tag[]>
    : never;
}

export { AbstractSource };
