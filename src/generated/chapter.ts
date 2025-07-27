import type { LocaleKey } from "./locale";

/**
 * Represents a chapter of a manga.
 * This includes detailed information such as the chapter's title, number, pages, and optional metadata.
 * @property id - Unique identifier for the chapter.
 * @property title - The title of the chapter.
 * @property volume - The volume number this chapter belongs to (optional).
 * @property number - The chapter number.
 * @property scanlator - The name of the scanlation group that released this chapter (optional).
 * @property pages - An array of URLs or paths to the pages of the chapter.
 * @property groups - An array of groups associated with the chapter (optional).
 * @property locale - The locale of the chapter (optional).
 * @property releaseDate - The release date of the chapter in ISO format (optional).
 */
interface Chapter {
  id: string;
  title: string;
  volume?: string;
  number: number;
  scanlator?: string;
  pages: string[];
  groups?: string[];
  locale?: LocaleKey;
  releaseDate?: string;
}

/**
 * Represents a brief entry for a chapter, typically used in listings or search results.
 * @property id - Unique identifier for the chapter.
 * @property title - The title of the chapter.
 * @property number - The chapter number.
 * @property volume - The volume number this chapter belongs to (optional, defaults to 1).
 * @property timestamp - An optional timestamp indicating when the chapter was released or last updated.
 */
interface ChapterEntry {
  id: string;
  title: string;
  number: number;
  volume?: string;
  timestamp?: string;
}

export type { Chapter, ChapterEntry };
