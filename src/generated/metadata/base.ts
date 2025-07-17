export interface BaseParams {
  readonly type: "string" | "number" | "boolean" | "select";
  readonly title: string;
  readonly description?: string;
}

export type Condition = {
  readonly key: string;
  readonly value: string | number | boolean;
};

export interface ExtendedParams extends BaseParams {
  readonly condition?: Condition;
  readonly required?: boolean;
}
