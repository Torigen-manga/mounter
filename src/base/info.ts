type Dependency = {
  name: string;
  version?: string;
};

interface SourceInfo {
  id: string;
  name: string;
  iconUrl: string;
  baseUrl: string;
  version?: string;
  dependencies?: Dependency[];
}

export type { SourceInfo, Dependency };
