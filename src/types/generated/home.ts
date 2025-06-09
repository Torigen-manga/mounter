interface Sections {
  id: string;
  title: string;
  items: SectionItem[];
  type: SectionItemType;
  containsMoreItems: boolean;
}

enum SectionItemType {
  SinglowRowNormal = "SingleRowNormal",
  SingleRowLarge = "SingleRowLarge",
  DobleRow = "DoubleRow",
  Featured = "Featured",
}

interface SectionItem {
  id: string;
  title: string;
  image?: string;
  action?: () => void;
}

export type { Sections, SectionItem, SectionItemType };
