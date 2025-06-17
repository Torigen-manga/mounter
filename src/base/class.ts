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

abstract class AbstractSource implements SourceProvider {
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
  abstract readonly capabilities: SourceCapabilities;
  /**
   * A schema describing the parameters for search and "view more" sections.
   */
  abstract readonly fieldsMetadata: SourceFieldsMetadata;

  /**

   * The constructor now only takes the true dependency.
   * @param requestManager An object for making network requests, provided by the host app.
   */
  constructor(requestManager: RequestManager) {
    this.requestManager = requestManager;
  }

  // --- REQUIRED METHODS ---
  // These methods must be implemented by the source.
  abstract getHomepage(): Promise<Section[]>;
  abstract getSearchResults(query: SearchRequest): Promise<PagedResults>;

  abstract getMangaDetails(mangaId: string): Promise<Manga>;
  abstract getChapters(mangaId: string): Promise<ChapterEntry[]>;
  abstract getChapterDetails(
    mangaId: string,
    chapterId: string
  ): Promise<Chapter>;

  // --- OPTIONAL METHODS ---
  // These have default implementations. The subclass can override them if needed.
  async getViewMoreItems(
    sectionId: string,
    metadata: any
  ): Promise<PagedResults> {
    console.warn(
      `Source "${this.info.id}" does not implement getViewMoreItems.`
    );
    return {
      results: [],
      hasNextPage: false,
      hasPreviousPage: false,
      limit: 0,
      totalCount: 0,
    };
  }

  async getSearchTags(): Promise<Tag[]> {
    return [];
  }
}

export { AbstractSource };
