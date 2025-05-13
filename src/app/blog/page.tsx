// src/app/blog/page.tsx

import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts, Post } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function BlogPage() {
  const posts: Post[] = await getBlogPosts();

  return (
    <section className=" ">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">Blogs</h1>
      </BlurFade>

      <div className="flex flex-col gap-8">
        {posts.map((post, idx) => (
          <BlurFade key={post.slug} delay={BLUR_FADE_DELAY * 2 + idx * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition flex flex-col h-full"
              aria-label={`Read “${post.metadata.title}” published on ${post.metadata.publishedAt}`}
            >
              {post.metadata.image && (
                <div className="relative h-48 w-full mb-4 overflow-hidden rounded-md">
                  <Image
                    src={post.metadata.image}
                    alt={`${post.metadata.title} thumbnail`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <h2 className="text-xl font-semibold mb-2">
                {post.metadata.title}
              </h2>
              <time
                className="text-xs text-muted-foreground mb-3"
                dateTime={post.metadata.publishedAt}
              >
                {formatDate(post.metadata.publishedAt)}
              </time>
              <p className="text-sm text-gray-600 flex-grow">
                {post.metadata.summary}
              </p>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
