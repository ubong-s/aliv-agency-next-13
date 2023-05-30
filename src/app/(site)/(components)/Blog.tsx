import { SectionHeading } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { PostPayload } from "@/types";

export const Blog = ({
  posts,
}: {
  posts: Omit<PostPayload, "excerpt" | "categories">[];
}) => {
  return (
    <section className="main__container py-20 lg:py-36">
      <SectionHeading
        title="Blog"
        subtitle="Insights on Branding"
        cta={{ link: "/blog", text: "See all" }}
      />

      <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {posts.map(({ _id, title, slug, featuredImage }) => (
          <li key={_id}>
            <div className="lg:h-250px 2xl:h-300px mb-4">
              <Image
                src={featuredImage}
                alt={title}
                width={376}
                height={376}
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="mb-4">{title}</h4>
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
