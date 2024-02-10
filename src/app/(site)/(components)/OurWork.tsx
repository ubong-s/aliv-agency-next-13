"use client";

import { Project, SectionHeading } from "@/components";
import { ProjectsPayload } from "@/types";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import { useRef } from "react";

export const OurWork = ({ projects }: { projects: ProjectsPayload[] }) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards: HTMLElement[] = gsap.utils.toArray("li");

      cards.forEach((card, index) => {
        gsap.set(card.lastChild, { opacity: 0, yPercent: -100 });

        gsap.from(card, {
          transformOrigin: "0% 50%",
          scaleY: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          onComplete: () => {
            gsap.to(card.lastChild, {
              autoAlpha: 1,
              yPercent: 0,
            });
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main__container py-10 lg:py-28" ref={container}>
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
