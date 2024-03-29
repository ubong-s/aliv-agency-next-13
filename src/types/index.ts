import { PortableTextBlock } from "sanity";

export type LinkProps = {
  id: number;
  link: string;
  text: string;
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
  title: string;
  description: string;
}
export interface AwardProps {
  _key: string;
  awardName: string;
  year: string;
  logo: string;
}

export interface MemberProps {
  _id: string;
  name: string;
  image: string;
  expertise: string;
  Socials: { _type: string; _key: string; url: string; name: string }[];
}

export interface ProjectsPayload {
  _id: string;
  name: string;
  image: string;
  slug: string;
  services: string;
}

export interface SingleProjectPayload {
  _id: string;
  name: string;
  slug: string;
  image: string;
  timeline: string;
  website: string;
  services: string;
  client: {
    logo: string;
    highlight: string;
    fullQuote: string;
  };
  info: {
    challenge: string;
    solution: string;
    result: string;
  };
  gallery: string[];
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

export interface JobPayload {
  _id: string;
  position: string;
  type: string;
  location: string;
  description: string;
}

export interface PostPayload {
  _id: string;
  title: string;
  featuredImage: string;
  excerpt: string;
  slug: string;
  categories: string[];
}

export interface ProductPayload {
  _id: string;
  name: string;
  image: string;
  slug: string;
  price: number;
}
export interface CartItemProps extends Omit<ProductPayload, "slug"> {
  amount: number;
}

export interface FAQProps {
  _id: string;
  question: string;
  answer: string;
}

export interface ProductProps {
  _id: string;
  name: string;
  description: string;
  image: string;
  content: PortableTextBlock[];
  slug: string;
  price: number;
}

export interface SingleProductPayload {
  product: ProductProps;
  faq: FAQProps[];
}

export interface NextPrevProps {
  featuredImage: string;
  slug: string;
  name: string;
}

export interface AuthorProps {
  name: string;
  image: string;
  expertise: string;
}

export interface HomePagePayload {
  home: {
    heroHighlight: {
      start: string;
      end: string;
    };
    heroDescription: string;
    ourValues: {
      title: string;
      highlight: string;
    }[];
  };
  posts: Omit<PostPayload, "excerpt" | "categories">[];
  projects: ProjectsPayload[];
  team: MemberProps[];
  services: {
    _id: string;
    name: string;
    slug: string;
    text: string;
  }[];
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

export interface SinglePostPayload {
  current: {
    _id: string;
    publishedAt: Date;
    title: string;
    excerpt: string;
    featuredImage: string;
    body: PortableTextBlock[];
    estimatedReadingTime: number;
    categories: string[];
    tags: string[];
    author: AuthorProps;
    conclusion: string;
  };
  previous?: NextPrevProps;
  next?: NextPrevProps;
  relatedPosts: {
    _id: string;
    title: string;
    slug: string;
    featuredImage: string;
  }[];
}
