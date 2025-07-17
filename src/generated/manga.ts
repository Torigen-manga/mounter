import type { LocaleKey } from "./locale";
import type { Tag } from "./tag";

/**
 * Represents a manga with detailed information.
 * This interface contains all relevant data about a specific manga title.
 * @property image - The URL or path to the manga's cover image.
 * @property title - The title of the manga.
 * @property description - A brief description or synopsis of the manga.
 * @property artists - An array of artists associated with the manga.
 * @property authors - An array of authors associated with the manga.
 * @property tags - An array of tags categorizing the manga (e.g., genre, themes).
 * @property status - The current publication status of the manga (e.g., Completed, Ongoing).
 * @property locale - The locale key indicating the language or region of the manga (optional).
 */
interface Manga {
  image: string;
  title: string;
  description: string;
  artists: string[];
  authors: string[];
  tags: Tag[];
  status: Status;
  locale?: LocaleKey;
}

/**
 * Represents a brief entry of a manga, typically used in search results or manga listings.
 * This interface contains minimal information such as the ID, title, and image of the manga.
 * @property id - Unique identifier for the manga.
 * @property title - The title of the manga.
 * @property image - The URL or path to the manga's cover image.
 * @property locale - The locale key indicating the language or region of the manga (optional).
 */
interface MangaEntry {
  id: string;
  title: string;
  image: string;
  locale?: LocaleKey;
}

/**
 * Represents the publication status of a manga.
 * - `Completed`: Finished publishing
 * - `Ongoing`: Currently publishing
 * - `Hiatus`: Temporarily paused
 * - `Cancelled`: Discontinued
 * - `Unknown`: Status not provided or not identified
 */
type Status = "Completed" | "Ongoing" | "Hiatus" | "Cancelled" | "Unknown";

export type { Manga, MangaEntry, Status };
