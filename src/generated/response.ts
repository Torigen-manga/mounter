import type { AppRequest } from "./request";
import type { RawData } from "./raw-data";

export interface Reponse {
  readonly data?: string;
  rawData?: RawData;
  readonly status: number;
  readonly headers: Record<any, any>;
  readonly request: AppRequest;
}
