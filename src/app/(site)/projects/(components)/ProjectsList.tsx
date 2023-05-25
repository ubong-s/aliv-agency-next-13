import { Badge } from "@/components";
import { ProjectsPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const ProjectsList = ({
  projects = [],
}: {
  projects: ProjectsPayload[];
}) => {
  return (
    <section className="pb-20 lg:pb-36">
      <div className="secondary__container grid gap-12 md:gap-16 lg:gap-20">
        {projects.map((project) => {
          const { _id, slug, name, services, image } = project;

          return (
            <Link key={_id} href={`/projects/${slug}`}>
              <div className="flex items-center justify-between mb-4 lg:mb-8">
                <h3 className="uppercase">{name}</h3>
                <Badge text={services} />
              </div>
              <Image
                src={image}
                alt={name}
                width={1385}
                height={907}
                className="w-full"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
