interface Owner {
  login: string;
}

export interface GitHubInterface {
  full_name: string;
  owner: Owner;
  stargazers_count: number;
  created_at: Date;
}
