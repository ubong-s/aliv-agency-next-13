"use client";

import { useRef } from "react";
import { LinkButton } from "./LinkButton";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";

interface Props {
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
    mobile?: boolean;
  };
}

export const SectionHeading = ({ title, subtitle, cta }: Props) => {
  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { opacity: 0 },
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
          },
        })
        .from(container.current, {})
        .from("h2", { yPercent: 100 })
        .from(".sub-sect", { yPercent: -100 });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <h2 className="uppercase pb-2 border-b border-b-concrete">{title}</h2>

      {subtitle && (
        <div className="sub-sect flex justify-between items-center my-8 lg:my-12">
          <p className="text-4xl lg:text-48px">{subtitle}</p>
          <span className={`${cta && !cta.mobile && "hidden"} lg:inline-block`}>
            {cta && cta.link && cta.text && (
              <LinkButton
                variant="outline"
                link={cta.link}
                linkText={cta.text}
              />
            )}
          </span>
        </div>
      )}
    </div>
  );
};
