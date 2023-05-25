import { ServicePayload } from "@/types";
import { Service } from "./Service";

export const ServicesList = ({ services }: { services: ServicePayload[] }) => {
  return (
    <section className="secondary__container py-20 grid gap-16 lg:gap-36 lg:py-36 ">
      {services.map((service) => {
        return <Service key={service._id} service={service} />;
      })}
    </section>
  );
};
