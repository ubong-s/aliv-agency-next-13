import { CallToAction } from "@/components";
import { getServices } from "@/sanity/lib/sanity.client";
import { ServicesHero, ServicesList } from "./(components)";

export default async function ServicesPage() {
  const services = (await getServices()) || [];

  return (
    <>
      <ServicesHero />
      <ServicesList services={services} />
      <CallToAction />
    </>
  );
}
