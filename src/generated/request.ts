import type { Cookie } from "./cookie";

interface AppRequest {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: Record<string, any> | string;
  cookies?: Cookie[];
}

export type { AppRequest };
