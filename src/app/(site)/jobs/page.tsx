import { CallToAction } from "@/components";
import { JobsHero, JobsList } from "./(components)";
import { getJobs } from "@/sanity/lib/sanity.client";

export default async function JobsPage() {
  const jobs = (await getJobs()) || [];

  return (
    <>
      <JobsHero />
      <JobsList jobs={jobs} />
      <CallToAction />
    </>
  );
}
