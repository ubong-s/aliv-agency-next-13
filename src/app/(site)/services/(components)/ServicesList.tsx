"use client";

import { ServicePayload } from "@/types";
import { Service } from "./Service";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";

export const ServicesList = ({ services }: { services: ServicePayload[] }) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const services: HTMLElement[] = gsap.utils.toArray(".service");

      services.forEach((service, index) => {
        gsap
          .timeline({
            defaults: {
              opacity: 0,
            },
            scrollTrigger: {
              trigger: service,
              start: "top 80%",
            },
          })
          .from(service, {});
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="secondary__container py-20 grid gap-16 lg:gap-36 lg:py-36 "
      ref={container}
    >
      {services.map((service) => {
        return <Service key={service._id} service={service} />;
      })}
    </section>
  );
};
