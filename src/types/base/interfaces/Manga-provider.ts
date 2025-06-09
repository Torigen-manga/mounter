import type { Chapter, ChapterEntry, Manga } from "../..";

interface MangaProvider {
  getMangaDetails(mangaId: string): Promise<Manga>;
  getChapters(mangaId: string): Promise<ChapterEntry[]>;
  getChapterDetails(mangaId: string, chapterId: string): Promise<Chapter>;
}

export type { MangaProvider };
