import type { ExtendedParams } from "./base";

interface StringParams extends ExtendedParams {
  readonly type: "string";
  readonly default?: string;
  readonly placeholder?: string;
  readonly pattern?: string;
}

interface NumberParams extends ExtendedParams {
  readonly type: "number";
  readonly default?: number;
  readonly min?: number;
  readonly max?: number;
}

interface BooleanParams extends ExtendedParams {
  readonly type: "boolean";
  readonly default?: boolean;
}

interface SelectParams extends ExtendedParams {
  readonly type: "select";
  readonly default?: string;
  readonly options: string[];
}

export type ConfigurationParams =
  | StringParams
  | NumberParams
  | BooleanParams
  | SelectParams;
