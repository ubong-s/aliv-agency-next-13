"use client";

import { LinkButton } from "@/components";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import { useRef } from "react";

interface HeroProps {
  heroHighlight: { start: string; end: string };
  heroDescription: string;
}

export const Hero = ({
  data: { heroHighlight, heroDescription },
}: {
  data: HeroProps;
}) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            opacity: 0,
          },
          delay: 0.5,
        })
        .from(container.current, {
          opacity: 0,
        })
        .from(".h1-top", {
          opacity: 0,
          yPercent: 50,
        })
        .from(
          ".h1-btm",
          {
            opacity: 0,
            yPercent: -50,
          },
          "<"
        )
        .from(
          "p",
          {
            opacity: 0,
          },
          "<"
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 lg:py-28" ref={container}>
      <div className="secondary__container">
        <h1 className="text-[52px] !leading-[60px] mb-8 lg:text-7xl lg:!leading-[95px] 2xl:text-8xl 2xl:!leading-[125px]">
          <span className="h1-top h-full block overflow-hidden">
            <span className="block">{heroHighlight.start}</span>
          </span>
          <span className="h1-btm h-full block overflow-hidden">
            <span className="block">{heroHighlight.end}</span>
          </span>
        </h1>
        <p className="max-w-2xl mb-8 text-lg lg:text-2xl lg:!leading-relaxed lg:mb-12">
          {heroDescription}
        </p>
        <LinkButton
          link="#services"
          linkText="Our Services"
          variant="primary"
        />
      </div>
    </section>
  );
};
