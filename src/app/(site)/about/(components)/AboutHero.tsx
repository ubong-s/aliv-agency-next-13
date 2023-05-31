import { ArrowDown } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface AboutHeroProps {
  data: { aboutImage: string; heroHighlight: string; heroDescription: string };
}

export const AboutHero = ({ data }: AboutHeroProps) => {
  if (!data) return null;

  const { aboutImage, heroHighlight, heroDescription } = data;

  return (
    <section className=" pb-8 lg:pt-12">
      <div className="main__container grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="col-span-1 h-full">
          <Image
            src={aboutImage}
            alt={heroHighlight}
            width={780}
            height={695}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 lg:py-8">
          <h1 className="uppercase">About</h1>
          <h2 className="text-[52px] my-6 lg:text-7xl lg:!leading-[105px] 2xl:text-8xl ">
            {heroHighlight}
          </h2>
          <p className="mb-12 text-lg lg:text-2xl lg:mb-20 xl:mb-32">
            {heroDescription}
          </p>

          <Link
            href="/about/#stats"
            className="uppercase text-xs flex gap-4 items-center"
          >
            <ArrowDown /> Discover Aliv
          </Link>
        </div>
      </div>
    </section>
  );
};
