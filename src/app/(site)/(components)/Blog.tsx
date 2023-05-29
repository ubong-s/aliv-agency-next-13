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
          <li key={_id} className="grid gap-4 items-start justify-items-start">
            <Image src={featuredImage} alt={title} width={376} height={376} />
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
