import { LinkButton, LinkIcon } from "@/components";
import { PostPayload } from "@/types";
import Image from "next/image";

export const FeaturedPost = ({ post }: { post: PostPayload }) => {
  if (!post) null;

  const { featuredImage, title, categories, excerpt, slug } = post;

  return (
    <section className=" pb-8 lg:pt-12">
      <div className="secondary__container grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div className="col-span-1 h-full">
          <Image
            src={featuredImage}
            alt={title}
            width={780}
            height={695}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-1 lg:py-8">
          <p className="uppercase flex gap-4 items center">{categories[0]}</p>
          <h1 className="my-6 text-4xl lg:text-5xl lg:!leading-snug">
            {title}
          </h1>
          <p className="mb-12 lg:text-lg lg:mb-20 xl:mb-32">{excerpt}</p>

          <LinkButton
            link={`/blog/${slug}`}
            variant="primary"
            icon={<LinkIcon />}
            linkText="Read More "
          />
        </div>
      </div>
    </section>
  );
};
