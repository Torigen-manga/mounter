/**
 * Represents a tag associated with manga content.
 * Tags can represent genres, themes, or other relevant identifiers.
 * @property id - Unique identifier for the tag.
 * @property label - The name or label of the tag.
 */
interface Tag {
  readonly id: string;
  readonly label: string;
}

export type { Tag };
