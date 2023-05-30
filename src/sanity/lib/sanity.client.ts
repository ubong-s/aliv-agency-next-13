import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";
import {
  aboutPageQuery,
  homePageQuery,
  jobsQuery,
  postsQuery,
  productsQuery,
  projectsQuery,
  servicesQuery,
  singlePostQuery,
  singleProjectQuery,
} from "./sanity.queries";
import { createClient } from "next-sanity";
import type {
  ServicePayload,
  AboutPagePayload,
  JobPayload,
  ProjectsPayload,
  SingleProjectPayload,
  SinglePostPayload,
  PostPayload,
  HomePagePayload,
  ProductPayload,
} from "@/types";

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return createClient({ projectId, dataset, apiVersion, useCdn, token });
};

export async function getServices(): Promise<ServicePayload[] | undefined> {
  return await sanityClient().fetch(servicesQuery);
}

export async function getProjects(): Promise<ProjectsPayload[] | undefined> {
  return await sanityClient().fetch(projectsQuery);
}

export async function getSingleProject(
  slug: string
): Promise<SingleProjectPayload | undefined> {
  return await sanityClient().fetch(singleProjectQuery, { slug });
}

export async function getPosts(
  start = 0,
  end = 7
): Promise<{ posts: PostPayload[]; total: number }> {
  const { posts, total } = await sanityClient().fetch(postsQuery, {
    start,
    end,
  });

  return { posts, total };
}

export async function getSinglePost(
  slug: string
): Promise<SinglePostPayload | undefined> {
  return await sanityClient().fetch(singlePostQuery, { slug });
}

export async function getJobs(): Promise<JobPayload[] | undefined> {
  return await sanityClient().fetch(jobsQuery);
}

export async function getAboutPage(): Promise<AboutPagePayload | undefined> {
  return await sanityClient().fetch(aboutPageQuery);
}

export async function getHomePage(): Promise<HomePagePayload | undefined> {
  return await sanityClient().fetch(homePageQuery);
}

export async function getProducts(): Promise<ProductPayload[] | undefined> {
  return await sanityClient().fetch(productsQuery);
}
