import type { Cookie } from "./cookie";

interface Request {
  url: string;
  method: string;
  headers?: Record<string, string>;
  data?: any;
  param?: string;
  cookis: Cookie[];
}

export type { Request };
