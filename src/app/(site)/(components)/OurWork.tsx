import { Project, SectionHeading } from "@/components";
import { projectsList } from "@/constants/projectsList";

export const OurWork = () => {
  return (
    <section className="main__container py-10 lg:py-28">
      <SectionHeading
        title="Our Work"
        subtitle="Selected Work"
        cta={{ link: "/projects", text: "All Work", mobile: true }}
      />
      <ul className="grid gap-8 md:grid-cols-2 md:gap-y-12">
        {projectsList.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
};
