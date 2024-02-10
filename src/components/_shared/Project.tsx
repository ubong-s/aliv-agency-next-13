import Image from "next/image";
import Link from "next/link";
import { ProjectsPayload } from "@/types";
import { Badge } from "./Badge";

export const Project = ({ project }: { project: ProjectsPayload }) => {
  const { slug, image, name, services } = project;

  return (
    <li className="grid gap-4 items-start justify-items-start">
      <Link
        href={`/projects/${slug}`}
        className="lg:h-[400px] xl:h-[500px] w-full"
      >
        <Image
          src={image}
          alt={name}
          width={784}
          height={560}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="title flex items-center justify-between w-full ">
        <Link href={`/projects/${slug}`}>
          <h4 className="capitalize text-xl md:text-2xl">{name}</h4>
        </Link>
        <Badge text={services} />
      </div>
    </li>
  );
};
