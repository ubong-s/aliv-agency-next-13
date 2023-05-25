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

  if (project) {
    return {
      title: `${project?.name} - Aliv Agency`,
    };
  }

  return {
    title: "Project - Aliv Agency",
  };
}

export default async function SingleProjectPage({ params }: Props) {
  const project = await getSingleProject(params.slug);

  if (!project) {
    return null;
  }

  return (
    <>
      <ProjectIntro services={project.services} client={project.name} />
      <ProjectDetails
        details={{
          client: project.name,
          timeline: project.timeline,
          services: project.services,
          website: project.website,
          logo: project.client.logo,
          highlight: project.client.highlight,
          fullQuote: project.client.fullQuote,
        }}
      />
      <ProjectOtherInfo />
      <ProjectGallery />
    </>
  );
}
