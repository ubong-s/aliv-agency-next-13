import { getSinglePost } from "@/sanity/lib/sanity.client";
import { Metadata } from "next";
import { PostIntro, PostContent, RelatedPosts } from "./(components)";
import { CallToAction } from "@/components";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // fetch data
  const post = await getSinglePost(params.slug);

  return {
    title: `${post?.current.title} - Aliv Agency`,
  };
}

export default async function SingleBlogPage({ params }: Props) {
  const post = await getSinglePost(params.slug);

  if (!post) return null;

  const { current, previous, next } = post;

  return (
    <>
      <PostIntro
        data={{
          title: current.title,
          excerpt: current.excerpt,
          date: current.publishedAt,
          category: current.categories[0],
          slug: params.slug,
          estimatedReadingTime: current.estimatedReadingTime,
        }}
      />
      <PostContent
        data={{
          title: current.title,
          featuredImage: current.featuredImage,
          content: current.body,
          conclusion: current.conclusion,
          author: current.author,
          slug:params.slug
        }}
      />
      <RelatedPosts />
      <CallToAction />
    </>
  );
}
