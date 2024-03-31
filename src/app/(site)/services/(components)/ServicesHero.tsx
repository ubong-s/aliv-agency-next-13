"use client";

import { LinkButton } from "@/components";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import { useRef } from "react";

export const ServicesHero = ({
  services,
}: {
  services: {
    name: string;
    slug: string;
  }[];
}) => {
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
            onComplete: () => {
              gsap.from(".btn", { opacity: 0, yPercent: -100 });
            },
          },
          ""
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 lg:py-28" ref={container}>
      <div className="secondary__container">
        <h1 className="uppercase">Services</h1>
        <h2 className="text-52px my-8 lg:text-7xl lg:!leading-85px 2xl:text-8xl 2xl:!leading-105px">
          Creating Strong Brands:
          <br />
          Our Expertise, Your Success
        </h2>
        <p className="max-w-2xl mb-8 text-lg lg:text-2xl lg:mb-12 lg:!leading-relaxed">
          From brand strategy to creative execution, discover how our services
          can elevate your brand
        </p>

        <div className="flex gap-4 item-center flex-wrap">
          {services.map((service) => {
            return (
              <div className="btn" key={service.slug}>
                <LinkButton
                  link={`/services/#${service.slug}`}
                  linkText={service.name}
                  variant="outline"
                  small={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
