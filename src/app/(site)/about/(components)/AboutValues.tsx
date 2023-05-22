import { ValueProps } from "@/types";

export const AboutValues = ({ values }: { values: ValueProps[] }) => {
  return (
    <section className="py-20 lg:py-32">
      <div className="main__container lg:grid lg:grid-cols-4  lg:gap-16 xl:gap-32">
        <h2 className="text-sm uppercase mb-8 lg:col-span-1">Our Values</h2>
        <div className="lg:col-span-3">
          {values.map(({ _key, title, description }) => (
            <div
              key={_key}
              className="py-8 border-b border-b-concrete md:py-16 first-of-type:pt-0 last-of-type:border-b-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-16 xl:gap-32"
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
