"use client";

import { SectionHeading, TeamCTA, TeamMember } from "@/components";
import { testimonialList } from "@/constants/testimonialList";
import { MemberProps } from "@/types";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export const Team = ({ team }: { team: MemberProps[] }) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards: HTMLElement[] = gsap.utils.toArray("li");
      const testimonials: HTMLElement[] = gsap.utils.toArray(".testimonial");

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

      testimonials.forEach((testimonial, index) => {
        gsap
          .timeline({
            defaults: { opacity: 0 },
            scrollTrigger: {
              trigger: testimonial,
              start: "top 80%",
            },
          })
          .from(testimonial, {
            transformOrigin: "50% 50%",
            scaleX: 0,
          })
          .from(`#testimonial__${index + 1} .img`, {})
          .from(`#testimonial__${index + 1} .highlight`, { yPercent: 100 }, "<")
          .from(`#testimonial__${index + 1} .text`, { yPercent: 100 }, "");
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="main__container pt-10 pb-20 lg:py-36" ref={container}>
      <SectionHeading
        title="Team"
        subtitle="Our Team of Experts"
        cta={{ link: "/about", text: "About us" }}
      />
      <ul className="grid grid-cols-2 gap-y-20 gap-x-8 mb-28 xl:gap-8 xl:grid-cols-4">
        <TeamCTA />
        {team.map((member, index) => {
          return <TeamMember key={member._id} index={index} member={member} />;
        })}
      </ul>

      <div className="grid gap-12 lg:gap-16">
        {testimonialList.map(({ id, logo, client, highlight, full }, index) => (
          <div
            key={id}
            id={`testimonial__${index + 1}`}
            className="testimonial grid gap-4 md:grid-cols-3 lg:grid-cols-4"
          >
            <div className="hidden lg:block"></div>
            <Image
              src={logo}
              alt={client}
              width={140}
              height={30}
              className="img"
            />
            <div className="md:col-span-2">
              <p className="highlight text-2xl mb-8 lg:text-3xl ">{`"${highlight}"`}</p>
              <div
                className="text flex flex-col gap-8"
                dangerouslySetInnerHTML={{ __html: full }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
