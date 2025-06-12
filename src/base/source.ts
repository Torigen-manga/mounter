import type {
  MangaProvider,
  SearchResultsProvider,
  HomepageProvider,
  SourceFieldsMetadata,
  SourceCapabilities,
  SourceInfo,
} from ".";

interface SourceProvider
  extends MangaProvider,
    HomepageProvider,
    SearchResultsProvider {
  readonly info: SourceInfo;
  readonly capabilities: SourceCapabilities;
  readonly fieldsMetadata: SourceFieldsMetadata;
}

export type { SourceProvider };
