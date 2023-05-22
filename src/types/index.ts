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

export interface StatProps {
  _type: string;
  _key: string;
  count: string;
  title: string;
  text: string;
}
export interface ValueProps {
  _type: string;
  _key: string;
  count: string;
  title: string;
  description: string;
}
export interface AwardProps {
  _type: string;
  _key: string;
  awardName: string;
  year: string;
}

export interface MemberProps {
  _id: string;
  name: string;
  image: string;
  expertise: string;
  Socials: { _type: string; _key: string; url: string; name: string }[];
}

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

export interface AboutPagePayload {
  about: {
    stats: StatProps[];
    ourValues: ValueProps[];
    awards: AwardProps[];
    heroHighlight: string;
    heroDescription: string;
    aboutImage: string;
  };
  team: MemberProps[];
}
