import { Metadata, ResolvingMetadata } from "next";
import { getSingleProject } from "../../../../sanity/lib/sanity.client";
import {
  ProjectDetails,
  ProjectGallery,
  ProjectIntro,
  ProjectOtherInfo,
} from "./(components)";
import { CallToAction } from "@/components";

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

  const { client, name, timeline, website, gallery, image, info, services } =
    project;

  return (
    <>
      <ProjectIntro services={services} client={name} />
      <ProjectDetails
        details={{
          client: name,
          timeline: timeline,
          services: services,
          website: website,
          logo: client.logo,
          highlight: client.highlight,
          fullQuote: client.fullQuote,
        }}
      />
      <ProjectOtherInfo info={info} />
      <ProjectGallery gallery={gallery} name={name} />
      <CallToAction />
    </>
  );
}
