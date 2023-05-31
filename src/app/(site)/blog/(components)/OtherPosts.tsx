"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Badge, LinkButton, SectionHeading } from "@/components";
import { PostPayload } from "@/types";
import { getPosts } from "@/sanity/lib/sanity.client";

const LOAD_COUNT = 6;

export const OtherPosts = ({
  initialPosts,
  total,
}: {
  initialPosts: PostPayload[];
  total: number;
}) => {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(posts.length + 1);
  const [loading, setLoading] = useState(false);

  const getMorePosts = async () => {
    setLoading(true);
    let limit = loadedAmount + LOAD_COUNT;
    try {
      const data = await getPosts(loadedAmount, limit);
      setLoadedAmount(limit);
      setPosts([...posts, ...data.posts]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <section className="secondary__container py-20 lg:py-36">
      <SectionHeading title="Latest News" />

      <ul className="grid gap-8 mt-16  md:grid-cols-2 lg:grid-cols-3 lg:gap-y-12">
        {posts.map(({ _id, title, featuredImage, categories, slug }) => (
          <li key={_id} className="grid gap-6 items-start justify-items-start">
            <Link
              href={`/blog/${slug}`}
              className="overflow-hidden md:h-[300px] lg:h-[400px]"
            >
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

      {loading && (
        <div className="mt-12 flex justify-center ">
          <p className="uppercase">loading More Posts...</p>
        </div>
      )}

      {loadedAmount < total && (
        <div className="mt-12 flex justify-center ">
          <button
            className="inline-block  border border-ablack rounded-full transition-all px-4 py-3 lg:px-6 lg:py-4 bg-black text-white hover:opacity-80 disabled:opacity-50 disabled:pointer-events-none"
            onClick={getMorePosts}
            disabled={loading}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};
