"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

// This would eventually come from your MDX files
const blogPosts: Record<string, BlogPost> = {
  "building-a-personal-site": {
    slug: "building-a-personal-site",
    title: "Building a Personal Site with Next.js and TailwindCSS",
    description:
      "A deep dive into creating a modern, minimalist personal website using Next.js 13, TailwindCSS, and TypeScript.",
    date: "February 24, 2024",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Web Development"],
  },
  "serverless-contact-forms": {
    slug: "serverless-contact-forms",
    title: "Creating Serverless Contact Forms",
    description:
      "Learn how to build and deploy serverless contact forms using AWS Lambda and SES.",
    date: "February 23, 2024",
    tags: ["AWS", "Serverless", "Web Development", "Tutorial"],
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as string];

  if (!post) {
    notFound();
  }

  const PostContent = dynamic(() => import(`../posts/${slug}.mdx`), {
    loading: () => <p className="text-center">Loading post...</p>,
  });

  return (
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-200 dark:text-white">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mb-8">
            <time className="text-sm text-gray-500 dark:text-gray-400 font-mono">
              {post.date}
            </time>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 transition-colors duration-200 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          <PostContent />
        </div>
      </article>
    </main>
  );
}
