"use client";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "building-a-personal-site",
    title: "Building a Personal Site with Next.js and TailwindCSS",
    description:
      "A deep dive into creating a modern, minimalist personal website using Next.js 13, TailwindCSS, and TypeScript.",
    date: "February 24, 2024",
    tags: ["Next.js", "TailwindCSS", "TypeScript", "Web Development"],
  },
  {
    slug: "serverless-contact-forms",
    title: "Creating Serverless Contact Forms",
    description:
      "How to build and deploy serverless contact forms using AWS Lambda and SES for your personal website.",
    date: "February 23, 2024",
    tags: ["AWS", "Serverless", "Web Development", "Tutorial"],
  },
  // Add more blog posts here
];

export default function Blog() {
  return (
    <main className="container mx-auto px-4 py-12 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-200 dark:text-white font-mono">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Thoughts on software development, technology, and occasional
            tutorials.
          </p>
        </header>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative border-b border-neutral-200 dark:border-neutral-700 pb-8 last:border-0"
            >
              {/* Decorative accent */}
              <div className="absolute -left-4 top-0 h-full w-0.5 bg-gradient-to-b from-accent-light to-transparent dark:from-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <a
                href={`/blog/${post.slug}`}
                className="block group-hover:translate-x-2 transition-transform duration-300"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-2 transition-colors duration-200 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4">
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
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
