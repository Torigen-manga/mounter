import type { Sections } from "../../generated/home";
import type { PagedResults } from "./SearchResult-provider";

interface HomepageProvider {
  getHomepage(): Promise<Sections[]>;
  getViewMoreItems?(sectionId: string, metadata: any): Promise<PagedResults>;
}

export type { HomepageProvider };
