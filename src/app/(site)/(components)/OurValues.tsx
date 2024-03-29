"use client";

import { LinkButton, LinkIcon, SectionHeading } from "@/components";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import { useRef } from "react";

export const OurValues = ({
  values,
}: {
  values: {
    title: string;
    highlight: string;
  }[];
}) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards: HTMLElement[] = gsap.utils.toArray(".value__box");

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

      gsap
        .timeline({
          defaults: { opacity: 0 },
          scrollTrigger: { trigger: ".btm__sect" },
        })
        .from(".btm__sect", {
          opacity: 0,
        })
        .from(".btm__sect h3", {})
        .from(".btm__sect p", {});
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <section className="main__container pt-24 pb-12" ref={container}>
      <SectionHeading title="Our Values" />

      <div className=" grid gap-6 md:grid-cols-2 mt-8 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        <div className="value__box flex flex-col items-start justify-between h-[200px] p-6 md:h-[376px] xl:p-12 bg-alabaster">
          <div>
            <p className="uppercase mb-4">Services</p>
            <h3 className="text-2xl">Our Approach to Branding.</h3>
          </div>

          <LinkButton
            variant="primary"
            link="/about"
            linkText="About Aliv"
            icon={<LinkIcon />}
          />
        </div>

        {values.map((value, index) => (
          <div
            key={index}
            className="value__box flex flex-col items-start justify-between h-[200px] p-6 md:h-[376px] xl:p-12 "
          >
            <p className="uppercase md:w-[70%] xl:w-[80%]">{value.title}</p>
            <p className="text-2xl md:w-[85%] xl:w-[90%]">{value.highlight}</p>
          </div>
        ))}
      </div>

      <div className="btm__sect mt-24 lg:grid lg:grid-cols-3 xl:grid-cols-4">
        <h3 className="text-2xl lg:text-3xl xl:text-4xl mb-8 lg:col-start-2 lg:col-span-2">
          Crafting Exceptional Digital Experiences Across All Platforms: Our
          Goal at Øliv.
        </h3>

        <div className="flex flex-col gap-6 md:flex-row lg:col-start-2 lg:col-span-2 lg:row-start-2">
          <p className="flex flex-col gap-6">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat
              nam at lectus urna duis convallis.
            </span>{" "}
            <span>
              Sem fringilla ut morbi tincidunt. Velit egestas dui id ornare arcu
              odio ut sem. Neque sodales ut etiam sit amet nisl purus. Egestas
              erat imperdiet sed euismod nisi porta lorem. A diam maecenas sed
              enim ut sem viverra.
            </span>
          </p>
          <p className="flex flex-col gap-6">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat
              nam at lectus urna duis convallis.
            </span>{" "}
            <span>
              Sem fringilla ut morbi tincidunt. Velit egestas dui id ornare arcu
              odio ut sem. Neque sodales ut etiam sit amet nisl purus. Egestas
              erat imperdiet sed euismod nisi porta lorem. A diam maecenas sed
              enim ut sem viverra.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
