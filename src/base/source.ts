import type {
  MangaProvider,
  SearchResultsProvider,
  HomepageProvider,
  SourceFieldsMetadata,
  SourceCapabilities,
} from ".";

interface SourceProvider
  extends MangaProvider,
    HomepageProvider,
    SearchResultsProvider,
    SourceCapabilities {
  readonly id: string;
  readonly name: string;
  readonly iconUrl: string;
  readonly capabilities: SourceCapabilities;
  readonly fieldsMetadata: SourceFieldsMetadata;
}

export type { SourceProvider };
