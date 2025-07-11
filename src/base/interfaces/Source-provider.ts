import type {
  MangaProvider,
  SearchResultsProvider,
  HomepageProvider,
  SearchMetadata,
} from ".";

type Dependency = {
  name: string;
  version?: string;
};

interface SourceCapabilities {
  readonly supportsHomepage: boolean;
  readonly supportsSearch: boolean;
  readonly supportsViewMore: boolean;
  readonly maxConcurrentRequests?: number;
  readonly supportIncludeTags: boolean;
  readonly supportExcludeTags: boolean;
  readonly supportPagination: boolean;
}

interface SourceInfo {
  id: string;
  name: string;
  iconUrl: string;
  baseUrl: string;
  version?: string;
  dependencies?: Dependency[];
}

interface SourceProvider
  extends MangaProvider,
    HomepageProvider,
    SearchResultsProvider {
  readonly info: SourceInfo;
  readonly capabilities: SourceCapabilities;
  readonly searchMetadata: SearchMetadata;
}

export type { SourceProvider, SourceCapabilities, SourceInfo, Dependency };
