interface MetadataSchema {
  readonly [key: string]: {
    readonly tile: string;
    readonly type: "number" | "string" | "boolean" | "select";
    readonly required?: boolean;
    readonly default?: any;
    readonly options?: string[];
    readonly description?: string;
    readonly min?: number;
    readonly max?: number;
    readonly pattern?: string;
  };
}

interface SearchMetadata {
  readonly params: MetadataSchema;
}

export type { SearchMetadata, MetadataSchema };
