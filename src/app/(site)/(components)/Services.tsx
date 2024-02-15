"use client";

import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";

export const Services = ({
  services,
}: {
  services: {
    _id: string;
    name: string;
    slug: string;
    text: string;
  }[];
}) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards: HTMLElement[] = gsap.utils.toArray("li");

      cards.forEach((card, index) => {
        gsap.set(card.children, { opacity: 0, y: "-50px" });

        gsap.from(card, {
          transformOrigin: "50% 50%",
          scaleX: 0,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          onComplete: () => {
            gsap.to(card.children, {
              autoAlpha: 1,
              y: "0",
              stagger: { amount: 0.5 },
            });
          },
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="pb-20" ref={container}>
      <div className="main__container">
        <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ _id, name, text, slug }) => (
            <li
              key={_id}
              className="grid gap-4 items-start justify-items-start bg-alabaster p-10 xl:p-12"
            >
              <h3 className="capitalize text-2xl">{name}</h3>
              <p className="text-muted pb-4">{text}</p>
              <Link
                href={`/services/#${slug}`}
                className="inline-block capitalize pb-1 border-b border-b-ablack self-end"
              >
                About {name.split(" ")[1]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
