interface SourceError {
  code: "NETWORK_ERROR" | "PARSE_ERROR" | "NOT_FOUND" | "RATE_LIMITED";
  message: string;
  retryable: boolean;
}

export type { SourceError };
