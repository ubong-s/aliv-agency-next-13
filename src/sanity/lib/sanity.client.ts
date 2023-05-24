import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";
import {
  aboutPageQuery,
  jobsQuery,
  projectsQuery,
  servicesQuery,
} from "./sanity.queries";
import { createClient } from "next-sanity";
import type {
  ServicePayload,
  AboutPagePayload,
  JobPayload,
  ProjectsPayload,
  SingleProjectPayload,
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
  return await sanityClient().fetch(projectsQuery);
}

export async function getJobs(): Promise<JobPayload[] | undefined> {
  return await sanityClient().fetch(jobsQuery);
}

export async function getAboutPage(): Promise<AboutPagePayload | undefined> {
  return await sanityClient().fetch(aboutPageQuery);
}
