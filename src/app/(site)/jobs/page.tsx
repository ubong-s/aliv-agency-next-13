import { CallToAction } from "@/components";
import { JobsHero, JobsList } from "./(components)";
import { getJobs } from "@/sanity/lib/sanity.client";

export const metadata = {
  title: "Jobs - Aliv Agency",
};

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
