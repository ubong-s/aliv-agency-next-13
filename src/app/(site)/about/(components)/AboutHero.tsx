"use client";

import { ArrowDown } from "@/components";
import { useIsomorphicLayoutEffect } from "@/utils/useIsomorphicLayout";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface AboutHeroProps {
  data: { aboutImage: string; heroHighlight: string; heroDescription: string };
}

export const AboutHero = ({ data }: AboutHeroProps) => {
  const { aboutImage, heroHighlight, heroDescription } = data;

  const container = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);

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
        .from("img", {
          opacity: 0,
        })
        .from("h1", {
          opacity: 0,
        })
        .from(
          "h2",
          {
            opacity: 0,
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
    <section className="pt-8 mb-8 lg:pt-16" ref={container}>
      <div className="main__container grid gap-8 lg:grid-cols-2 lg:items-center ">
        <div className="col-span-1 h-full img">
          <Image
            src={aboutImage}
            alt={heroHighlight}
            width={780}
            height={695}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 lg:py-8 lg:ml-8">
          <h1 className="uppercase">About</h1>
          <h2 className="text-[45px] leading-[50px] my-6 lg:text-6xl lg:!leading-[70px] 2xl:text-7xl ">
            {heroHighlight}
          </h2>
          <p className="mb-12 text-lg lg:text-2xl lg:mb-20 lg:!leading-relaxed xl:mb-32">
            {heroDescription}
          </p>

          <Link
            href="/about/#stats"
            className="uppercase text-xs flex gap-4 items-center"
            onClick={() => {
              gsap.to(window, { scrollTo: "#stats" });
            }}
          >
            <ArrowDown /> Discover Aliv
          </Link>
        </div>
      </div>
    </section>
  );
};
