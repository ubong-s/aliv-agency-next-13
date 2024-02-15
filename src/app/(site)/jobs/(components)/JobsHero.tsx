"use client";

import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import { useRef } from "react";

export const JobsHero = () => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0 },
        })
        .from(container.current, {})
        .from("h1", {
          yPercent: 100,
        })
        .from("h2", {}, "")
        .from(
          "p",
          {
            yPercent: -100,
          },
          ""
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 lg:py-28" ref={container}>
      <div className="secondary__container">
        <h1 className="uppercase">Jobs</h1>
        <h2 className="text-52px my-8 lg:text-7xl lg:!leading-[85px] 2xl:text-8xl 2xl:!leading-[105px]">
          Shape the Future of Brands:
          <br />
          Career with Aliv
        </h2>
        <p className="max-w-2xl mb-8 text-lg lg:text-2xl lg:!leading-8 lg:mb-12">
          Discover opportunities to grow your career and make an impact in the
          branding industry.
        </p>
      </div>
    </section>
  );
};
