import { Project, SectionHeading } from "@/components";
import { ProjectsPayload } from "@/types";

export const OurWork = ({ projects }: { projects: ProjectsPayload[] }) => {
  return (
    <section className="main__container py-10 lg:py-28">
      <SectionHeading
        title="Our Work"
        subtitle="Selected Work"
        cta={{ link: "/projects", text: "All Work", mobile: true }}
      />
      <ul className="grid gap-8 md:grid-cols-2 md:gap-y-12">
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </ul>
    </section>
  );
};
