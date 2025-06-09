interface Chapter {
  id: string;
  title: string;
  volume?: string;
  number: number;
  scanlator?: string;
  pages: number;
  groups?: string[];
  language?: string;
  releaseDate?: string;
  readState?: {
    read: boolean;
    timestamp: string;
  };
}

interface ChapterEntry {
  id: string;
  title: string;
  timestamp?: string;
}

export type { Chapter, ChapterEntry };