interface SourceCapabilities {
  readonly supportsHomepage: boolean;
  readonly supportsSearch: boolean;
  readonly supportsViewMore: boolean;
  readonly maxConcurrentRequests?: number;
  readonly supportIncludeTags: boolean;
  readonly supportExcludeTags: boolean;
  readonly supportPagination: boolean;
}

export type { SourceCapabilities };
