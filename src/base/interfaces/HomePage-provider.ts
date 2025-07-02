import type { Section, PagedResults, MangaEntry } from "../../generated";


interface HomepageProvider {
  getHomepage(): Promise<Section[]>;
  getViewMoreItems?(sectionId: string, metadata: any): Promise<PagedResults<MangaEntry>>;
}

export type { HomepageProvider };
