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

enum Status {
  Completed = "Completed",
  Ongoing = "Ongoing",
  Hiatus = "Hiatus",
  Cancelled = "Cancelled",
}

export type { Manga, MangaEntry, Status };
