import type { Section, PagedResults, MangaEntry } from "../../generated";

interface HomepageProvider {
  getHomepage(): Promise<Section[]>;
  getViewMoreItems?(
    sectionId: string,
    page: number
  ): Promise<PagedResults<MangaEntry>>;
}

export type { HomepageProvider };
