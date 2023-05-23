import { LinkButton } from "@/components";

export const ServicesHero = ({
  services,
}: {
  services: {
    name: string;
    slug: string;
  }[];
}) => {
  return (
    <section className="py-16 lg:py-28">
      <div className="secondary__container">
        <h1 className="uppercase">Services</h1>
        <h2 className="text-52px my-8 lg:text-7xl lg:!leading-85px 2xl:text-8xl 2xl:!leading-105px">
          Creating Strong Brands:
          <br />
          Our Expertise, Your Success
        </h2>
        <p className="max-w-2xl mb-8 text-lg lg:text-2xl lg:mb-12">
          From brand strategy to creative execution, discover how our services
          can elevate your brand
        </p>

        <div className="flex gap-4 item-center flex-wrap">
          {services.map((service) => {
            return (
              <LinkButton
                key={service.slug}
                link={`/services/#${service.slug}`}
                linkText={service.name}
                variant="outline"
                small={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
