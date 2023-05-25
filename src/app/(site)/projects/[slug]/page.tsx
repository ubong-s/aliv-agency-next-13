import { Metadata, ResolvingMetadata } from "next";
import { getSingleProject } from "../../../../sanity/lib/sanity.client";
import {
  ProjectDetails,
  ProjectGallery,
  ProjectIntro,
  ProjectOtherInfo,
} from "./(components)";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const project = await getSingleProject(slug);

  return {
    title: `${project?.name} - Aliv Agency` || "Project - Aliv Agency",
  };
}

export default async function SingleProjectPage({ params }: Props) {
  const project = await getSingleProject(params.slug);

  return (
    <>
      <ProjectIntro />
      <ProjectDetails />
      <ProjectOtherInfo />
      <ProjectGallery />
    </>
  );
}
