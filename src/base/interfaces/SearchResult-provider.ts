import type { Tag, MangaEntry } from "../..";

type TagOperator = "AND" | "OR";
type SearchParameterValue = string | number | boolean | string[] | number[];

interface SearchRequest {
  readonly title?: string;
  readonly includedTags: Tag[];
  readonly excludedTags: Tag[];
  readonly includeOperator?: TagOperator;
  readonly excludeOperator?: TagOperator;

  readonly page?: number;
  readonly limit?: number;
  readonly offset?: number;

  readonly parameters: Record<string, SearchParameterValue>;
}

interface PagedResults {
  readonly results: MangaEntry[];

  readonly totalCount: number;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;

  readonly currentPage?: number;
  readonly totalPages?: number;

  readonly limit: number;
  readonly offset?: number;

  readonly metadata?: Record<string, any> & {
    loadingPattern?: "continuous" | "paged" | "infinite";
    nextOffset?: number;
    nextPage?: number;
  };
}

interface SearchResultsProvider {
  getSearchResults(query: SearchRequest): Promise<PagedResults>;
  supportPagination?(): boolean;
  supportTagInclusion?(): boolean;
  supportTagExclusion?(): boolean;
}

export type {
  SearchRequest,
  PagedResults,
  SearchResultsProvider,
  TagOperator,
  SearchParameterValue,
};
