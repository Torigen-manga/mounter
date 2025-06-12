interface Section {
  id: string;
  title: string;
  items: SectionItem[];
  type: SectionItemType;
  containsMoreItems: boolean;
}

type SectionItemType =
  | "SingleRowNormal"
  | "SingleRowLarge"
  | "DoubleRow"
  | "Featured";

interface SectionItem {
  id: string;
  title: string;
  image: string;
}

export type { Section, SectionItem, SectionItemType };
