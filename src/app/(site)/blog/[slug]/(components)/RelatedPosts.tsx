import { SectionHeading } from "@/components";
import Image from "next/image";
import Link from "next/link";

interface RelatedPostsProps {
  _id: string;
  title: string;
  slug: string;
  featuredImage: string;
}

export const RelatedPosts = ({ posts }: { posts: RelatedPostsProps[] }) => {
  return (
    <section className="main__container pb-20 lg:pb-36">
      <SectionHeading title="Blog" subtitle="Related News" />

      <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {posts.map(({ _id, title, slug, featuredImage }) => (
          <li key={_id} className="grid gap-4 items-start justify-items-start">
            <div className="lg:h-[250px] 2xl:h-[300px]">
              <Image
                src={featuredImage}
                alt={title}
                width={376}
                height={376}
                className="h-full w-full object-cover"
              />
            </div>
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
