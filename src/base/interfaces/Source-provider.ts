import type {
  MangaProvider,
  SearchResultsProvider,
  HomepageProvider,
  MetadataProvider,
} from ".";
import type { LocaleKey } from "../../generated/locale";

type Dependency = {
  readonly name: string;
  readonly version?: string;
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
  locale: LocaleKey | "multi";
}

interface SourceProvider
  extends MangaProvider,
    HomepageProvider,
    SearchResultsProvider {
  readonly info: SourceInfo;
  readonly capabilities: SourceCapabilities;
  readonly metadata: MetadataProvider;
}

export type { SourceProvider, SourceCapabilities, SourceInfo, Dependency };
