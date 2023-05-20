import Image from "next/image";
import Link from "next/link";
import placeholderImage from "../../../public/assets/project-image.png";
import { ProjectProps } from "@/types";

export const Project = ({ project }: { project: ProjectProps }) => {
  const { id, slug, image, title, category } = project;

  return (
    <li className="grid gap-4 items-start justify-items-start">
      <Link href={`/project/${slug}`}>
        <Image src={placeholderImage} alt={title} width={784} height={560} />
      </Link>
      <div className="flex items-center justify-between w-full ">
        <Link href={`/project/${slug}`}>
          <h4 className="capitalize text-xl md:text-2xl">{title}</h4>
        </Link>
        <Link
          href={`/project-category/${category.replace(" ", "-")}`}
          className="capitalize text-xs py-1.5 p-2 border border-ablack rounded-full md:py-1.5 md:px-3 hover:bg-ablack hover:text-white"
        >
          {category}
        </Link>
      </div>
    </li>
  );
};
