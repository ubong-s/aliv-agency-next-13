import { LinkButton, SectionHeading } from "@/components";
import { blogList } from "@/constants/blogList";
import Image from "next/image";
import placeholderImage from "../../../../public/assets/blog-image.png";
import Link from "next/link";

export const Blog = () => {
  return (
    <section className="main__container py-20 lg:py-36">
      <SectionHeading
        title="Blog"
        subtitle="Insights on Branding"
        cta={{ link: "/blog", text: "See all" }}
      />

      <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {blogList.map(({ id, title, slug }) => (
          <li key={id} className="grid gap-4 items-start justify-items-start">
            <Image
              src={placeholderImage}
              alt={title}
              width={376}
              height={376}
            />
            <h4>{title}</h4>
            <Link
              href={`/blog/${slug}`}
              className="text-sm pb-1 border-b border-b-ablack hover:opacity-50 transition-opacity"
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
