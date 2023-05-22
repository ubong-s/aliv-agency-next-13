import { AwardProps } from "@/types";
import Image from "next/image";

export const OurAwards = ({ awards }: { awards: AwardProps[] }) => {
  return (
    <section className="pt-10 pb-20 lg:pt-18 lg:pb-36">
      <div className="main__container lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-32">
        <h2 className="text-sm uppercase mb-12 lg:col-span-1 lg:col-start-2 ">
          Awards
        </h2>
        <div className="lg:col-span-2">
          {awards.map(({ _key, awardName, year, logo }) => (
            <div
              key={_key}
              className="py-8 border-b border-b-concrete md:py-10 first-of-type:pt-0 last-of-type:border-b-0 grid grid-cols-6 items-center gap-4 lg:gap-8 "
            >
              <Image
                src={logo}
                alt={awardName}
                width={50}
                height={50}
                className="col-span-1"
              />
              <h3 className="md:text-xl col-span-4">{awardName}</h3>
              <p className="col-span-1">{year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
