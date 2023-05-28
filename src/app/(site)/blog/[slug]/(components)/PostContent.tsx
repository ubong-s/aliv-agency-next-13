import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { PortableTextBlock } from "sanity";
import { ShareButtons } from "./ShareButtons";
import { SITE_URL } from "@/utils";
import { AuthorProps } from "@/types";

interface PostContentProps {
  title: string;
  featuredImage: string;
  content: PortableTextBlock[];
  conclusion: string;
  author: AuthorProps;
  slug: string;
}

export const PostContent = ({
  data: { featuredImage, title, content, conclusion, author, slug },
}: {
  data: PostContentProps;
}) => {
  return (
    <section className="pb-10 lg:pb-20">
      <div className="secondary__container grid gap-6 md:lg:gap-8">
        <div>
          <Image
            src={featuredImage}
            alt={title}
            width={1400}
            height={891}
            className="w-full"
          />
        </div>

        <div className="py-8  lg:flex lg:gap-28 lg:w-80 lg:mx-auto lg:py-16 xl:w-70 xl:gap-36">
          <ShareButtons
            url={`${SITE_URL}/blog/${slug}`}
            title={title}
            media={featuredImage}
          />

          <div className="grid gap-6">
            <div className="blog__content grid gap-8 mb-8">
              <PortableText value={content} />
            </div>

            <div className="bg-alabaster p-8  grid gap-6 md:p-12 lg:p-16 xl:flex xl:gap-20 2xl:gap-24">
              <h4 className="uppercase">Conclusion</h4>
              <div>
                <p>{conclusion}</p>
                <div className="flex items-center mt-6 gap-4">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={50}
                    height={50}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <div>
                    <h5 className="text-xl mb-1">{author.name}</h5>
                    <p className="text-xs uppercase">{author.expertise}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
