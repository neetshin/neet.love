import { FixedObject, FluidObject } from 'gatsby-image';

export interface SharpImage {
  childImageSharp: {
    fixed: FixedObject;
    fluid: FluidObject;
  };
}

export type SocialAccountType =
  | 'mastodon'
  | 'email'
  | 'discord'
  | 'telegram'
  | 'keybase'
  | 'twitter'
  | 'github'
  | 'gitlab'
  | 'medium'
  | 'slideshare'
  | 'npm'
  | 'docker'
  | 'bitcoin'
  | 'patreon'
  | 'line'
  | 'instagram';

export interface SocialAccount {
  type: SocialAccountType;
  name: string;
  label: string;
  url?: string;
  copyable?: string;
  suggested?: boolean;
  bgColor?: string;
  fgColor?: string;
}

export interface Fact {
  name: string;
  label: string;
  url?: string;
  image: SharpImage;
}

export interface BannerField {
  name: string;
  url: string;
  external?: boolean;
}

export interface GithubRepository {
  id: string;
  name: string;
  forkCount: number;
  url: string;
  stargazers: {
    totalCount: number;
  };
  primaryLanguage: {
    color: string;
    name: string;
  };
  description: string;
}

export interface Article {
  id: string;
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    date: string;
    thumbnail?: SharpImage;
  };
}

export interface SiteMetadata {
  title: string;
  description: string;
  siteUrl: string;
}

export interface Bio {
  name: string;
  email: string;
  avatar: SharpImage;
  note: string;
}

export interface Qualification {
  name: string;
  url: string;
  createdAt: string;
}
