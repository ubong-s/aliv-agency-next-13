"use client";

import { SectionHeading, TeamCTA, TeamMember } from "@/components";
import { MemberProps } from "@/types";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import { useRef } from "react";

export const OurTeam = ({ team }: { team: MemberProps[] }) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards: HTMLElement[] = gsap.utils.toArray("li");

      cards.forEach((card, index) => {
        gsap.set(`#name-${index + 1}`, { opacity: 0, yPercent: -100 });

        gsap.from(card, {
          transformOrigin: "50% 50%",
          scaleX: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },

          onComplete: () => {
            gsap.to(`#name-${index + 1}`, {
              opacity: 1,
              yPercent: 0,
            });
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main__container pt-10 pb-20 " ref={container}>
      <SectionHeading title="Team" subtitle="Our Team of Experts" />
      <ul className="about__team grid grid-cols-2 gap-y-20 gap-x-8 mb-28 lg:grid-cols-3 xl:grid-cols-4">
        <TeamCTA />
        {team.map((member, index) => (
          <TeamMember key={member._id} index={index + 1} member={member} />
        ))}
      </ul>
    </section>
  );
};
