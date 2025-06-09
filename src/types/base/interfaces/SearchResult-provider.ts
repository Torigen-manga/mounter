import type { Tag, MangaEntry } from "../..";

type TagOperator = "AND" | "OR";
type SearchParameterValue = string | number | boolean | string[] | number[];

interface SearchRequest {
  readonly title?: string;
  readonly includedTags: Tag[];
  readonly excludedTags: Tag[];
  readonly includeOperator?: TagOperator;
  readonly excludeOperator?: TagOperator;
  readonly parameters: Record<string, SearchParameterValue>;
}

interface PagedResults {
  readonly results: MangaEntry[];
  readonly totalCount: number;
}

interface SearchResultsProvider {
  getSearchResults(query: SearchRequest): Promise<PagedResults>;
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
