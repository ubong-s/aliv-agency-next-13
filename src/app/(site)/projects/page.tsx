import { CallToAction } from "@/components";
import { ProjectsHero, ProjectsList } from "./(components)";
import { getProjects } from "../../../sanity/lib/sanity.client";

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
