import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type =="service"]  |  order(order) {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
  headline,
  features,
  cta
}`;

export const jobsQuery = groq`*[_type =="job"] {
  _id,
  position,
  type,
  location
  description 
}`;

export const aboutPageQuery = groq`
  {
    "about": *[_type =="about"][0] {
    heroHighlight,
    heroDescription,
    "aboutImage": aboutImage.asset->url,
    stats,
    ourValues,
    awards[] {
      _key,
      awardName,
      year, 
      "logo": logo.asset->url
      }
    },
    "team": *[_type=="teamMember"] |  order(order) {
      _id,
      name,
      "image": image.asset->url,
      expertise,
      Socials
    }
  }
`;
