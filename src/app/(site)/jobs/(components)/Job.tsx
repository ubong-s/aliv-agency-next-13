import { Badge, LinkButton, LinkIcon } from "@/components";
import { JobPayload } from "@/types";

export const Job = ({ job }: { job: JobPayload }) => {
  const { _id, position, type, location, description } = job;
  return (
    <div
      key={_id}
      className="grid gap-6 justify-items-start py-10 border-b border-b-concrete md:py-16 first-of-type:pt-0 last-of-type:border-b-0 md:grid-cols-2 lg:grid-cols-5 lg:gap-16 xl:gap-32"
    >
      <div className="grid gap-4 lg:col-span-2">
        <h3 className="text-3xl">{position}</h3>
        <div className="flex gap-4 items-center">
          <Badge text={type} />
          <Badge text={location} />
        </div>
      </div>

      <p className="text-base lg:col-span-2">{description}</p>

      <div className="lg:col-span-1">
        <LinkButton
          variant="primary"
          link="#"
          linkText="Apply"
          icon={<LinkIcon />}
        />
      </div>
    </div>
  );
};
