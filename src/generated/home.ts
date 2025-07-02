/**
 * Represents a section of content, such as a category or a list of manga.
 * A section can contain multiple items and may indicate if there are more items to load.
 */
interface Section {
  /**
   * The unique identifier for the section.
   */
  id: string;

  /**
   * The title or name of the section.
   * This could represent categories like "Top Manga", "New Releases", etc.
   */
  title: string;

  /**
   * A list of items contained in this section.
   * Each item represents a piece of content like a manga or article.
   */
  items: SectionItem[];

  /**
   * The type of the section, which determines its layout and presentation.
   * Possible values include `SingleRowNormal`, `SingleRowLarge`, `DoubleRow`, `Featured`.
   */
  type: SectionItemType;

  /**
   * A boolean indicating whether the section has additional items to load.
   * This can be used for pagination or dynamic loading.
   */
  containsMoreItems: boolean;
}

/**
 * Defines the layout types for items within a section.
 * These types help dictate how items are displayed (e.g., single row, double row).
 */
type SectionItemType =
  | "SingleRowNormal" // Items are displayed in a single row with normal size.
  | "SingleRowLarge" // Items are displayed in a single row with larger size.
  | "DoubleRow" // Items are displayed in two rows.
  | "Featured"; // Items are displayed as featured, typically with a special layout.

/**
 * Represents an individual item within a section.
 * Each item contains information like its ID, title, and image.
 */
interface SectionItem {
  /**
   * The unique identifier for the item.
   * This is used to reference and manage the item within the section.
   */
  id: string;

  /**
   * The title of the item.
   * This is typically the name or label of the content, such as the title of a manga.
   */
  title: string;

  /**
   * The URL or path to an image representing the item.
   * This is usually a thumbnail or preview image of the content.
   */
  image: string;
}

export type { Section, SectionItem, SectionItemType };
