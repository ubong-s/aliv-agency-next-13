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
