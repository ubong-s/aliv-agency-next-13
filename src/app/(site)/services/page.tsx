import { CallToAction } from "@/components";
import { getServices } from "@/sanity/lib/sanity.client";
import { ServicesHero, ServicesList } from "./(components)";

export const metadata = {
  title: "Services - Aliv Agency",
};

export default async function ServicesPage() {
  const services = (await getServices()) || [];

  return (
    <>
      <ServicesHero
        services={services.map((service) => {
          return {
            name: service.name,
            slug: service.slug,
          };
        })}
      />
      <ServicesList services={services} />
      <CallToAction />
    </>
  );
}
