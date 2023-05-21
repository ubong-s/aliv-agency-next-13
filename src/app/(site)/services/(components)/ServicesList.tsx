import { LinkButton, SectionHeading } from "@/components";
import { ServicePayload } from "@/types";
import Image from "next/image";

export const ServicesList = ({ services }: { services: ServicePayload[] }) => {
  return (
    <section className="main__container py-20 grid gap-16 lg:gap-36 lg:py-36 ">
      {services.map((service) => {
        const { _id, name, slug, coverImage, headline, features, cta } =
          service;

        return (
          <div key={_id} className="grid gap-8 lg:gap-16" id={slug}>
            <SectionHeading title={name} />

            <div className="relative grid gap-12 items-start lg:flex  lg:flex-row-reverse">
              {/* Image & features */}
              <div className="grid gap-8">
                <Image
                  src={coverImage}
                  alt={name}
                  width={961}
                  height={555}
                  className="w-full"
                />
                <h3 className="text-3xl md:text-4xl lg:text-5xl lg:!leading-57px my-8">
                  {headline}
                </h3>
                <div className="grid gap-8 lg:gap-16">
                  {features.map((feature) => (
                    <div
                      key={feature._key}
                      className="grid gap-4 md:grid-cols-4 xl:gap-12"
                    >
                      <h4 className="text-xs uppercase">{feature.title}</h4>
                      <p className="md:col-span-3">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to action */}
              <div
                className="grid gap-4 items-start justify-items-start p-10 lg:min-w-33%  xl:p-12 lg:sticky lg:top-8"
                style={{
                  backgroundColor: `${
                    cta.background ? cta.background : "#F9F9F9"
                  }`,
                }}
              >
                <h3 className="text-2xl md:text-3xl">{cta.headline}</h3>
                <p className="text-muted pb-4">{cta.text}</p>

                <LinkButton
                  variant="primary"
                  link="/contact"
                  linkText="Let's talk"
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
