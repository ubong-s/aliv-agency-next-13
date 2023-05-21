export type LinkProps = {
  id: number;
  link: string;
  text: string;
};

export type ServiceProps = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export type BlogPostProps = {
  id: number;
  title: string;
  slug: string;
};

export type TeamMemberProps = {
  id: number;
  name: string;
  position: string;
  socials?: {
    network: string;
    profileLink: string;
  }[];
};

export type ProjectProps = {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
};

export interface ServicePayload {
  _id: string;
  name: string;
  slug: string;
  coverImage: string;
  headline: string;
  features: {
    description: string;
    _key: string;
    title: string;
  }[];
  cta: {
    text: string;
    headline: string;
    background: string;
  };
}
