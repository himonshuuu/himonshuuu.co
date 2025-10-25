export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributions: {
    message: string;
    url: string;
  }[];
}

export interface Commit {
  date: Date;
  count: number;
  url: string;
}

export interface SpotifyPlayer {
  is_playing: boolean;
  item: {
    name: string;
    external_urls: {
      spotify: string;
    };
    artists: Array<{ name: string }>;
    album: {
      images: Array<{ url: string }>;
    };
    duration_ms: number;
  };
  progress_ms: number;
}

export interface CommitData {
  sha: string;
  html_url: string;
  message: string;
  commit: {
    committer: {
      name: string;
      email: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export interface Item {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

export interface GithubRepo {
  name: string;
  description: string;
  url: string;
  primaryLanguage: {
    name: string;
    color: string;
  };
  languages: { name: string; color: string }[];
  stargazerCount: number;
  forkCount: number;
}