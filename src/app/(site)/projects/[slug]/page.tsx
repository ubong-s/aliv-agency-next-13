export const revalidate = 1200; // not necessary, just for ISR demonstration

import { Metadata } from "next";
import { getSingleProject } from "../../../../sanity/lib/sanity.client";
import {
  ProjectDetails,
  ProjectGallery,
  ProjectIntro,
  ProjectOtherInfo,
} from "./(components)";
import { CallToAction } from "@/components";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const project = await getSingleProject(params.slug);

  return {
    title: `${project?.name} - Aliv Agency`,
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
