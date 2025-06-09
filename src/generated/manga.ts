import type { Tag } from "./tag";

interface Manga {
  image: string;
  title: string;
  artists: string[];
  authors: string[];
  tags: Tag[];
  status: Status;
}

interface MangaEntry {
  id: string;
  title: string;
  image: string;
}

type Status = "Completed" | "Ongoing" | "Hiatus" | "Cancelled" | "Unknown";

export type { Manga, MangaEntry, Status };
