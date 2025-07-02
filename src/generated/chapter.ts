/**
 * Represents a chapter of a manga.
 * This includes detailed information such as the chapter's title, number, pages, and optional metadata.
 */
interface Chapter {
  /**
   * The unique identifier for the chapter.
   * This ID is used to reference and manage the chapter in the system.
   */
  id: string;

  /**
   * The title of the chapter.
   * This is typically a brief description or name of the chapter.
   */
  title: string;

  /**
   * The volume to which this chapter belongs.
   * This is optional, as some chapters may not be part of a volume.
   */
  volume?: string;

  /**
   * The chapter number.
   * This represents the numerical order of the chapter in the series.
   */
  number: number;

  /**
   * The scanlator responsible for translating or releasing the chapter.
   * This is optional and can be omitted if the scanlator information is not available.
   */
  scanlator?: string;

  /**
   * A list of URLs for the pages of the chapter.
   * Each URL represents an image for the page of the chapter.
   */
  pages: string[];

  /**
   * A list of groups that contributed to the chapter's release.
   * This is optional and can include groups like scanlation teams or publishers.
   */
  groups?: string[];

  /**
   * The language of the chapter.
   * This is optional and can be used to specify the language of the release.
   */
  language?: string;

  /**
   * The release date of the chapter.
   * This is optional and can be used to track when the chapter was released.
   */
  releaseDate?: string;

  /**
   * Information about whether the chapter has been read.
   * This includes a boolean flag indicating whether it's been read, and a timestamp of when it was read.
   */
  readState?: {
    /**
     * Indicates if the chapter has been read.
     */
    read: boolean;

    /**
     * The timestamp when the chapter was read.
     * This can be used for tracking reading progress.
     */
    timestamp: string;
  };
}

/**
 * Represents a brief entry for a chapter, typically used in listings or search results.
 * This contains minimal information such as the chapter ID, title, and an optional timestamp.
 */
interface ChapterEntry {
  /**
   * The unique identifier for the chapter.
   * This ID is used to retrieve detailed information about the chapter.
   */
  id: string;

  /**
   * The title of the chapter.
   */
  title: string;

  /**
   * An optional timestamp for when the chapter was last updated or added.
   */
  timestamp?: string;
}

export type { Chapter, ChapterEntry };
