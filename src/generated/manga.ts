import type { Tag } from "./tag";

/**
 * Represents a manga with detailed information.
 * This interface contains all relevant data about a specific manga title.
 */
interface Manga {
  /**
   * The URL to an image representing the manga (e.g., cover art).
   */
  image: string;

  /**
   * The title of the manga.
   */
  title: string;

  /**
   * A description or summary of the manga's plot.
   */
  description: string;

  /**
   * A list of artists involved in the creation of the manga.
   * This array can contain one or more artist names.
   */
  artists: string[];

  /**
   * A list of authors who wrote the manga.
   * This array can contain one or more author names.
   */
  authors: string[];

  /**
   * A list of tags related to the manga.
   * These tags can represent genres, themes, or other relevant identifiers.
   */
  tags: Tag[];

  /**
   * The current status of the manga.
   * This indicates whether the manga is completed, ongoing, on hiatus, cancelled, or in an unknown state.
   */
  status: Status;
}

/**
 * Represents a brief entry of a manga, typically used in search results or manga listings.
 * This interface contains minimal information such as the ID, title, and image of the manga.
 */
interface MangaEntry {
  /**
   * The unique identifier for the manga.
   * This is typically used for retrieving more detailed information or interacting with a specific manga.
   */
  id: string;

  /**
   * The title of the manga.
   * This is a short version of the title used in lists or search results.
   */
  title: string;

  /**
   * The URL or path to an image representing the manga.
   * Usually a thumbnail image of the manga cover or a preview image.
   */
  image: string;
}

/**
 * Represents the possible statuses of a manga.
 * This status can be used to show whether the manga is ongoing, completed, etc.
 */
type Status = "Completed" | "Ongoing" | "Hiatus" | "Cancelled" | "Unknown";

export type { Manga, MangaEntry, Status };
