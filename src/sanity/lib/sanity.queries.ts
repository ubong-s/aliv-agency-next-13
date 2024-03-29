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

export const homePageQuery = groq`
  {
    "home": *[_type == "home"][0] {
      heroHighlight,
      heroDescription,
      ourValues,
    },
    "team": *[_type=="teamMember"] |  order(order) [0...3] {
      _id,
      name,
      "image": image.asset->url,
      expertise,
      Socials
    },
    "projects": *[_type == "project"]  |  order(_createdAt asc) [0...4]  {
      _id,
      "image": gallery[0].asset->url,
      name, 
      "slug": slug.current,
      services,
    },
    "posts": *[_type == "post"]  |  order(publishedAt desc) [0...4] {
      _id,
      "featuredImage": featuredImage.asset->url,
      title,
      "slug": slug.current,
    },
    "services": *[_type == "service"]  |  order(order) {
      _id,
      name,
      "slug": slug.current,
      "text" : cta.text,
    }
  }
`;
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

export const postsQuery = groq`
  {
    "posts": *[_type == "post"]  |  order(publishedAt desc) [$start...$end] {
      _id,
      "featuredImage": featuredImage.asset->url,
      title,
      "slug": slug.current,
      excerpt,
      "categories": categories[]->title, 
    },
    "total": count(*[_type == "post"])
  }
`;

export const singlePostQuery = groq`
  *[_type == "post" && slug.current == $slug][0]  {
    "current": {
      _id,
    "featuredImage": featuredImage.asset->url,
    title,
    "slug": slug.current,
    excerpt,
    "categories": categories[]->title, 
    tags,
    body,
    "estimatedReadingTime":round(length(pt::text(body)) / 5 / 180 ),
    publishedAt,
    "author": {
        "name": author->name,
        "image": author->image.asset->url,
        "expertise": author->expertise,
    },
    conclusion,
    },
    "previous": *[_type == "post" && ^.publishedAt > publishedAt] | order(publishedAt desc)[0]{ 
      "slug": slug.current, title ,"featuredImage": featuredImage.asset->url
    },
    "next": *[_type == "post" && ^.publishedAt < publishedAt] | order(publishedAt asc)[0]{ 
      "slug": slug.current, title ,"featuredImage": featuredImage.asset->url
    },
    "relatedPosts": *[_type == "post" && !(slug.current match $slug) && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(publishedAt desc, _createdAt desc) [0..4] {
      title,
      "slug": slug.current,
      "featuredImage": featuredImage.asset->url
    }
  }
`;

export const productsQuery = groq`
  *[_type == "product"]   {
    _id,
    name, 
    "slug": slug.current,
    "image": image.asset->url,
    price
  }
`;

export const singleProductQuery = groq`
  {
    "product" :*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      description,
      "image":image.asset->url,
      content,
      "slug":slug.current,
      price,
    },
    "faq": *[_type == 'faq'] {
      _id, 
      question,
      answer
    }
  }
`;
