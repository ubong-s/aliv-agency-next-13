import { CallToAction } from "@/components";
import { ProjectsHero, ProjectsList } from "./(components)";
import { getProjects } from "../../../sanity/lib/sanity.client";

export const metadata = {
  title: "Projects - Aliv Agency",
};

export default async function ProjectsPage() {
  const projects = (await getProjects()) || [];

  return (
    <>
      <ProjectsHero />
      <ProjectsList projects={projects} />
      <CallToAction />
    </>
  );
}
