interface SourceCapabilities {
  readonly supportsHomepage: boolean;
  readonly supportsSearch: boolean;
  readonly supportsViewMore: boolean;
  readonly supportedImageFormats: string[];
  readonly maxConcurrentRequests?: number;
}

export type { SourceCapabilities };
