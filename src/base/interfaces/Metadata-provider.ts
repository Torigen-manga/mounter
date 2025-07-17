import type { SearchParams, ConfigurationParams } from "../../generated";

interface ConfigParams {
  required?: boolean;
  description?: string;
  condition?: { key: string; value: string | number | boolean };
}

const search = {
  select: (title: string, options: string[]): SearchParams => ({
    type: "select" as const,
    title,
    options,
  }),
  string: (title: string): SearchParams => ({
    type: "string" as const,
    title,
  }),
  number: (title: string): SearchParams => ({
    type: "number" as const,
    title,
  }),
  boolean: (title: string): SearchParams => ({
    type: "boolean" as const,
    title,
  }),
};

const settings = {
  select: (
    title: string,
    options: string[],
    config: ConfigParams & {
      default?: string;
    }
  ): ConfigurationParams => ({
    type: "select" as const,
    title,
    options,
    default: config.default,
    required: config.required ?? false,
    description: config.description,
    condition: config.condition,
  }),

  string: (
    title: string,
    config: ConfigParams & {
      placeholder?: string;
      pattern?: string;
      default?: string;
    }
  ): ConfigurationParams => ({
    type: "string" as const,
    title,
    default: config.default,
    required: config.required ?? false,
    placeholder: config.placeholder,
    pattern: config.pattern,
    description: config.description,
    condition: config.condition,
  }),

  number: (
    title: string,
    config: ConfigParams & {
      default?: number;
      min?: number;
      max?: number;
    }
  ): ConfigurationParams => ({
    type: "number" as const,
    title,
    default: config.default,
    required: config.required ?? false,
    min: config.min,
    max: config.max,
    description: config.description,
    condition: config.condition,
  }),

  boolean: (
    title: string,
    config: ConfigParams & {
      default?: boolean;
    }
  ): ConfigurationParams => ({
    type: "boolean" as const,
    title,
    default: config.default,
    required: config.required ?? false,
    description: config.description,
    condition: config.condition,
  }),
};

interface MetadataProvider {
  readonly search?: {
    readonly [key: string]: SearchParams;
  };
  readonly settings?: {
    readonly [section: string]: {
      label: string;
      description?: string;
      fields: {
        readonly [key: string]: ConfigurationParams;
      };
    };
  };
}

export { type MetadataProvider, settings, search };
