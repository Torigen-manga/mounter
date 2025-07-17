import type { BaseParams } from "./base";

interface StringParams extends BaseParams {
  readonly type: "string";
}

interface NumberParams extends BaseParams {
  readonly type: "number";
  readonly min?: number;
  readonly max?: number;
}

interface BooleanParams extends BaseParams {
  readonly type: "boolean";
}

interface SelectParams extends BaseParams {
  readonly type: "select";
  readonly options: string[];
}

export type SearchParams =
  | StringParams
  | NumberParams
  | BooleanParams
  | SelectParams;
