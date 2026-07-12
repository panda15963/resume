import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog",
};

const posts = [
    {
        title: "Next.js로 포트폴리오 만들기",
        description: "Next.js와 Tailwind CSS를 사용한 포트폴리오 개발 과정",
        slug: "nextjs-portfolio",
        date: "2026.07.12",
    },
    {
        title: "TypeScript를 사용하는 이유",
        description: "프로젝트에서 TypeScript를 사용하며 배운 점",
        slug: "why-typescript",
        date: "2026.07.01",
    },
];

export default function BlogPage() {
    return (
        <main className="mx-auto min-h-[80vh] max-w-5xl px-6 py-24">
            <p className="mb-2 text-sm font-medium text-blue-500">
                BLOG
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
                Blog
            </h1>

            <p className="mt-6 text-lg text-zinc-400">
                개발하면서 공부하고 경험한 내용을 기록합니다.
            </p>

            <div className="mt-16 divide-y divide-zinc-800">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block py-8"
                    >
                        <p className="text-sm text-zinc-500">
                            {post.date}
                        </p>

                        <h2 className="mt-2 text-2xl font-bold transition-colors group-hover:text-blue-500">
                            {post.title}
                        </h2>

                        <p className="mt-3 text-zinc-400">
                            {post.description}
                        </p>
                    </Link>
                ))}
            </div>
        </main>
    );
}