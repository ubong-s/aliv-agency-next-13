import { JobPayload } from "@/types";
import { Job } from "./Job";

export const JobsList = ({ jobs = [] }: { jobs: JobPayload[] }) => {
  return (
    <section className="secondary__container pb-20 lg:pb-36 ">
      {jobs.map((job) => {
        return <Job key={job._id} job={job} />;
      })}
    </section>
  );
};
