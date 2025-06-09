import type { Sections } from "../../generated/home";

interface HomepageProvider {
  getHomepage(): Promise<Sections[]>;
}

export type { HomepageProvider };
