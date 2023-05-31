import Link from "next/link";
import { PostDetailColumn } from "./PostDetailColumn";
import { ArrowDown } from "@/components";
import { format } from "date-fns";

interface PostIntroProps {
  title: string;
  excerpt: string;
  date: Date;
  category: string;
  slug: string;
  estimatedReadingTime: number;
}

export const PostIntro = ({
  data: { title, excerpt, date, category, slug, estimatedReadingTime },
}: {
  data: PostIntroProps;
}) => {
  const formattedDate = format(new Date(date), "dd MMM yyy");

  return (
    <section className="py-16 lg:py-24">
      <div className="secondary__container 2xl:px-16">
        <div className="grid grid-cols-2 gap-8 mb-8 lg:grid-cols-3 lg:mb-16">
          <PostDetailColumn text={formattedDate} title="Date" />
          <PostDetailColumn text={category} title="Categoty" />
          <PostDetailColumn
            text={`${estimatedReadingTime} mins`}
            title="Reading Time"
          />
        </div>

        <div className="mb-8 lg:mb-16">
          <h1 className="text-5xl my-8 lg:text-7xl lg:!leading-85px 2xl:text-8xl 2xl:!leading-105px 2xl:max-w-5xl">
            {title}
          </h1>
          <p className="lg:text-lg">{excerpt}</p>
        </div>

        <Link
          href={`/blog/${slug}/#content`}
          className="uppercase text-xs flex gap-4 items-center lg:text-base"
        >
          <ArrowDown /> Read More
        </Link>
      </div>
    </section>
  );
};
