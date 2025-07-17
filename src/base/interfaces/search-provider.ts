import type { Tag, MangaEntry, PagedResults } from "../../generated";

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

interface SearchResultsProvider {
  getSearchResults(query: SearchRequest): Promise<PagedResults<MangaEntry>>;
  getSearchTags?(): Promise<Tag[]>;
}

export type {
  SearchRequest,
  SearchResultsProvider,
  TagOperator,
  SearchParameterValue,
};
