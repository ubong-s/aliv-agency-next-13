import { CallToAction } from "@/components";
import { FeaturedPost, OtherPosts } from "./(components)";
import { getPosts } from "@/sanity/lib/sanity.client";

export default async function BlogPage() {
  const posts = await getPosts();

  if (!posts) return null;

  const [featured, ...otherPosts] = posts;

  return (
    <>
      <FeaturedPost post={featured} />
      <OtherPosts posts={otherPosts} />
      <CallToAction />
    </>
  );
}
