import { Badge, SectionHeading } from "@/components";
import { PostPayload } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const OtherPosts = ({ posts }: { posts: PostPayload[] }) => {
  return (
    <section className="secondary__container py-20 lg:py-36">
      <SectionHeading title="Latest News" />

      <ul className="grid gap-8 mt-16  md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
        {posts.map(({ _id, title, featuredImage, categories, slug }) => (
          <li key={_id} className="grid gap-6 items-start justify-items-start">
            <Link href={`/blog/${slug}`} className="overflow-hidden lg:h-400px">
              <Image
                src={featuredImage}
                alt={title}
                width={440}
                height={440}
                className="w-full h-full object-cover hover:scale-110 transition-all"
              />
            </Link>

            <div className="flex justify-between items-start gap-8 w-full">
              <Link href={`/blog/${slug}`}>
                <h4>{title}</h4>
              </Link>
              <Badge text={categories[0]} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
