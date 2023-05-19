import { LinkButton } from "@/components";
import { blogList } from "@/constants/blogList";
import Image from "next/image";
import placeholderImage from "../../../public/assets/blog-image.png";
import Link from "next/link";

export const Blog = () => {
  return (
    <section className="main__container py-20 lg:py-36">
      <h2 className="uppercase pb-2 border-b border-b-concrete">Blog</h2>

      <div className="flex justify-between items-center my-8 lg:my-12">
        <p className="text-4xl lg:text-48px">Insights on Branding</p>
        <span className="hidden lg:inline-block">
          <LinkButton variant="outline" link="/blog" linkText="See all" />
        </span>
      </div>

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
