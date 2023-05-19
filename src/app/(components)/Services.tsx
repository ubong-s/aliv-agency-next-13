import { servicesHome } from "@/constants/servicesHomeList";
import Link from "next/link";

export const Services = () => {
  return (
    <section id="services" className="pb-20">
      <h2></h2>
      <div className="main__container">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesHome.map(({ id, title, description, link }) => (
            <li
              key={id}
              className="grid gap-4 items-start justify-items-start bg-alabaster p-10 xl:p-12"
            >
              <h3 className="capitalize text-2xl">{title}</h3>
              <p className="text-muted pb-4">{description}</p>
              <Link
                href={`/services/#${link}`}
                className="text-sm inline-block capitalize pb-1 border-b border-b-ablackccccccc"
              >
                About {title.split(" ")[1]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
