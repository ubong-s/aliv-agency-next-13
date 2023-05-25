import { groq } from "next-sanity";

export const servicesQuery = groq`*[_type == "service"]  |  order(order) {
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
  headline,
  features,
  cta
}`;

export const jobsQuery = groq`*[_type == "job"] {
  _id,
  position,
  type,
  location,
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

export const projectsQuery = groq`
  *[_type == "project"]  |  order(_createdAt asc)  {
    _id,
    "image": gallery[0].asset->url,
    name, 
    "slug": slug.current,
    services,
  }
`;

export const singleProjectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    name, 
    "slug": slug.current,
    timeline, 
    website,
    services,
    client {
      "logo": logo.asset->url,
      highlight, 
      fullQuote
    },
    info,
    "gallery": gallery[].asset->url
  }
`;
