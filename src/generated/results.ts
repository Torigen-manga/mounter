/**
 * Represents a paginated result set.
 * @template T - The type of the results (e.g., `MangaEntry`, `ChapterEntry`).
 */
interface PagedResults<T> {
  /**
   * Array of results for the current page.
   * @type {T[]} - The result items (e.g., manga entries, chapter entries).
   */
  readonly results: T[];

  /**
   * The total number of results available.
   * This is useful for pagination and calculating the total number of pages.
   */
  readonly totalCount: number;

  /**
   * Indicates whether there is a next page of results.
   */
  readonly hasNextPage: boolean;

  /**
   * Indicates whether there is a previous page of results.
   */
  readonly hasPreviousPage: boolean;

  /**
   * The current page number in the paginated set.
   * Optional because some result sets may not provide pagination details.
   */
  readonly currentPage?: number;

  /**
   * The total number of pages available in the paginated set.
   * Optional because some result sets may not provide pagination details.
   */
  readonly totalPages?: number;

  /**
   * The maximum number of items per page (i.e., page size).
   */
  readonly limit: number;

  /**
   * The offset, or the number of items skipped before this page.
   * This can be used for custom pagination or non-standard result sets.
   */
  readonly offset?: number;

  /**
   * Additional metadata about the result set.
   * This can include things like loading patterns or pagination details.
   */
  readonly metadata?: Record<string, any> & {
    /**
     * Defines the type of loading pattern.
     * - `continuous`: Results are continuously loaded (e.g., infinite scroll).
     * - `paged`: Results are loaded in discrete pages.
     * - `infinite`: Similar to continuous, but may have specific constraints.
     */
    loadingPattern?: "continuous" | "paged" | "infinite";

    /**
     * The next offset value, for use in continuous or paged loading.
     */
    nextOffset?: number;

    /**
     * The next page number, for paged results.
     */
    nextPage?: number;
  };
}

export type { PagedResults };
