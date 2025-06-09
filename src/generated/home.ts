interface Sections {
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
  image?: string;
  action?: () => void;
}

export type { Sections, SectionItem, SectionItemType };
