"use client";

import { StatProps } from "@/types";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import { gsap } from "gsap";
import { useRef } from "react";

export const AboutStats = ({ stats }: { stats: StatProps[] }) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards: HTMLElement[] = gsap.utils.toArray(".stat__box");

      cards.forEach((card, index) => {
        gsap.from(card, {
          transformOrigin: "50% 50%",
          scaleX: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="stats" ref={container}>
      <div className="main__container grid gap-6 md:grid-cols-2 lg:gap-8 lg:grid-cols-3 2xl:grid-cols-4">
        {stats.map(({ _key, count, title, text }, index) => (
          <div
            key={_key}
            className="stat__box flex flex-col items-start justify-between h-[200px] p-6 md:h-[300px] lg:h-[350px] xl:p-10 bg-concrete"
          >
            <h3 className="flex flex-col justify-start">
              <span className="text-3xl lg:text-6xl mb-2">{count}</span>
              <span className="text-xs uppercase">{title}</span>
            </h3>

            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
