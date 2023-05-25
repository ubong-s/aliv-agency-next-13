import Image from "next/image";
import { DetailColumn } from "./DetailColumn";

interface Props {
  details: {
    client: string;
    timeline: string;
    services: string;
    website: string;
    logo: string;
    highlight: string;
    fullQuote: string;
  };
}

export const ProjectDetails = ({ details }: Props) => {
  const { client, timeline, services, website, logo, highlight, fullQuote } =
    details;

  return (
    <section>
      <div className="secondary__container">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <DetailColumn title="client" text={client} />
          <DetailColumn title="timeline" text={timeline} />
          <DetailColumn title="services" text={services} />
          <DetailColumn title="website" text={website} />
        </div>

        <div className="grid gap-8 py-16 md:grid-cols-3 lg:grid-cols-4 lg:py-28">
          <div className="hidden lg:block"></div>
          <Image src={logo} alt={client} width={140} height={30} />
          <div className="md:col-span-2">
            <p className="text-2xl mb-8 lg:text-3xl ">{highlight}</p>
            <div
              className="flex flex-col gap-8"
              dangerouslySetInnerHTML={{ __html: fullQuote }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
