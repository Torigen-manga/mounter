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
  readonly currentPage: number;
  readonly totalPages: number;
  readonly limit: number;
  readonly offset: number;

  readonly metadata?: Record<string, any>;
}

interface SearchResultsProvider {
  getSearchResults(query: SearchRequest): Promise<PagedResults>;

  supportTagInclusion?(): boolean;
  supportTagExclusion?(): boolean;
  getSupportedParameters?(): Record<string, SearchParameterInfo>;
  getDefaultLimit?(): number;
  getMaxLimit?(): number;
}

interface SearchParameterInfo {
  readonly type: "string" | "number" | "boolean" | "select" | "multiselect";
  readonly required?: boolean;
  readonly defaultValue?: SearchParameterValue;
  readonly options?: readonly string[] | readonly number[];
  readonly description?: string;
}

class PaginationHelper {
  static pageToOffset(page: number, limit: number): number {
    return Math.max(0, (page - 1) * limit);
  }

  static offsetToPage(offset: number, limit: number): number {
    return Math.floor(offset / limit) + 1;
  }

  static calculatePagination(
    currentOffset: number,
    limit: number,
    totalCount: number
  ): Pick<
    PagedResults,
    | "hasNextPage"
    | "hasPreviousPage"
    | "currentPage"
    | "totalPages"
    | "limit"
    | "offset"
  > {
    const currentPage = this.offsetToPage(currentOffset, limit);
    const totalPages = Math.ceil(totalCount / limit);

    return {
      hasNextPage: currentOffset + limit < totalCount,
      hasPreviousPage: currentOffset > 0,
      currentPage,
      totalPages,
      limit,
      offset: currentOffset,
    };
  }

  static normalizePagination(request: SearchRequest): {
    offset: number;
    limit: number;
  } {
    const limit = request.limit || 32;

    const offset =
      request.offset !== undefined
        ? request.offset
        : request.page !== undefined
        ? this.pageToOffset(request.page, limit)
        : 0;

    return { offset, limit };
  }
}

export type {
  SearchRequest,
  PagedResults,
  SearchResultsProvider,
  TagOperator,
  SearchParameterValue,
};

export { PaginationHelper };
