import Link from "next/link";

export const Services = ({
  services,
}: {
  services: {
    _id: string;
    name: string;
    slug: string;
    text: string;
  }[];
}) => {
  return (
    <section id="services" className="pb-20">
      <h2></h2>
      <div className="main__container">
        <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map(({ _id, name, text, slug }) => (
            <li
              key={_id}
              className="grid gap-4 items-start justify-items-start bg-alabaster p-10 xl:p-12"
            >
              <h3 className="capitalize text-2xl">{name}</h3>
              <p className="text-muted pb-4">{text}</p>
              <Link
                href={`/services/#${slug}`}
                className="text-sm inline-block capitalize pb-1 border-b border-b-ablack self-end"
              >
                About {name.split(" ")[1]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
