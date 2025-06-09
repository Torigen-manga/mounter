import type {
  MangaProvider,
  SearchResultsProvider,
  HomepageProvider,
} from "./interfaces";

interface SourceProvider
  extends MangaProvider,
    HomepageProvider,
    SearchResultsProvider {
  readonly id: string;
  readonly name: string;
  readonly iconUrl: string;
}

export type { SourceProvider };
