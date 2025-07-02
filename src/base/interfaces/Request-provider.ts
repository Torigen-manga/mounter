import type { AppRequest } from "../../generated";

interface RequestManager {
  fetch(req: AppRequest): Promise<Response>;
}

export type { RequestManager };