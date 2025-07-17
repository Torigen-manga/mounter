/**
 * Represents a section of content, such as a category or a list of manga.
 * A section can contain multiple items and may indicate if there are more items to load.
 * @property id - Unique identifier for the section.
 * @property title - The title of the section.
 * @property items - An array of items within the section.
 * @property type - The layout type of the section items (e.g., single row, double row).
 * @property containsMoreItems - A boolean indicating if there are more items available beyond those currently loaded.
 */
interface Section {
  id: string;
  title: string;
  items: SectionItem[];
  type: SectionItemType;
  containsMoreItems: boolean;
}

/**
 * Defines the layout types for items within a section.
 * These types help dictate how items are displayed (e.g., single row, double row).
 * - `SingleRowNormal` - A single row item with normal size.
 * - `SingleRowLarge` - A single row item with larger size.
 * - `DoubleRow` - A double row item that takes up more vertical space.
 * - `Featured` - A featured item that may have special styling or prominence.
 */
type SectionItemType =
  | "SingleRowNormal" 
  | "SingleRowLarge" 
  | "DoubleRow" 
  | "Featured";

/**
 * Represents an individual item within a section.
 * Each item contains information like its ID, title, and image.
 * @property id - Unique identifier for the item.
 * @property title - The title of the item.
 * @property image - The URL or path to the image representing the item.
 */
interface SectionItem {
  id: string;
  title: string;
  image: string;
}

export type { Section, SectionItem, SectionItemType };
