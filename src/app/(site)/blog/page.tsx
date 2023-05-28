import { CallToAction } from "@/components";
import { FeaturedPost, OtherPosts } from "./(components)";
import { getPosts } from "@/sanity/lib/sanity.client";

export const metadata = {
  title: "Blog - Aliv Agency",
};

export default async function BlogPage() {
  const { posts, total } = await getPosts();

  if (!posts) return null;

  const [featured, ...otherPosts] = posts;
  return (
    <>
      <FeaturedPost post={featured} />
      <OtherPosts initialPosts={otherPosts} total={total} />
      <CallToAction />
    </>
  );
}
