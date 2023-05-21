import { CallToAction } from "@/components";
import { getServices } from "@/sanity/lib/sanity.client";
import {} from "next/headers";

export default async function ServicesPage() {
  const services = (await getServices()) || {
    services: [],
  };
  console.log(services);

  return (
    <>
      <CallToAction />
    </>
  );
}
