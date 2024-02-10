"use client";

import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import { ValueProps } from "@/types";
import gsap from "gsap";

export const AboutValues = ({ values }: { values: ValueProps[] }) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const values: HTMLElement[] = gsap.utils.toArray(".about__value");

      gsap.from("h2", {
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      values.forEach((value, index) => {
        gsap.from(value, {
          transformOrigin: "0% 50%",
          scaleY: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: value,
            start: "top 80%",
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 lg:py-32" ref={container}>
      <div className="main__container lg:grid lg:grid-cols-4  lg:gap-16 xl:gap-32">
        <h2 className="text-sm uppercase mb-8 lg:col-span-1">Our Values</h2>
        <div className="lg:col-span-3">
          {values.map(({ _key, title, description }) => (
            <div
              key={_key}
              className="about__value py-8 border-b border-b-concrete md:py-16 first-of-type:pt-0 last-of-type:border-b-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-16 xl:gap-32"
            >
              <h3 className="text-2xl mb-4 md:col-span-1">{title}</h3>
              <p className="md:col-span-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
