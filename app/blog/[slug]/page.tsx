import Link from "next/link";

interface BlogDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function BlogDetailPage({
                                                 params,
                                             }: BlogDetailPageProps) {
    const { slug } = await params;

    return (
        <main className="mx-auto min-h-[80vh] max-w-3xl px-6 py-24">
            <Link
                href="/blog"
                className="text-sm text-zinc-400 transition-colors hover:text-blue-500"
            >
                ← Blog
            </Link>

            <article className="mt-10">
                <p className="text-sm font-medium text-blue-500">
                    BLOG
                </p>

                <h1 className="mt-3 text-4xl font-bold md:text-5xl">
                    {slug}
                </h1>

                <p className="mt-4 text-zinc-500">
                    2026.07.12
                </p>

                <div className="mt-12 border-t border-zinc-800 pt-12">
                    <p className="leading-8 text-zinc-300">
                        블로그 상세 내용을 작성하는 공간입니다.
                        이후 MDX를 연결하면 Markdown 형식으로 글을
                        작성할 수 있습니다.
                    </p>
                </div>
            </article>
        </main>
    );
}