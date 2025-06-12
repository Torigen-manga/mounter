import type { Section } from "../../generated/home";
import type { PagedResults } from "./SearchResult-provider";

interface HomepageProvider {
  getHomepage(): Promise<Section[]>;
  getViewMoreItems?(sectionId: string, metadata: any): Promise<PagedResults>;
}

export type { HomepageProvider };
