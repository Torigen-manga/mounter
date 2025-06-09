import type { Byte } from "./byte";

interface RawData {
  readonly length: number;
  [index: number]: Byte;
  toString(): string | undefined;
}

export type { RawData };
