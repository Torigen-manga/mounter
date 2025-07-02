/**
 * Represents a tag associated with manga content.
 * Tags can represent genres, themes, or other relevant identifiers.
 */
interface Tag {
  /**
   * The unique identifier for the tag.
   */
  readonly id: string;

  /**
   * The label or name of the tag.
   * This is the display name that will be shown in the UI, such as "Action", "Romance", etc.
   */
  readonly label: string;
}

export type { Tag };
