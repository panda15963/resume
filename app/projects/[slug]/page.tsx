import Link from "next/link";

interface ProjectDetailPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const projectData: Record<
    string,
    {
        title: string;
        description: string;
        technologies: string[];
    }
> = {
    "sign-language": {
        title: "Sign Language Translator",
        description: "AI 기술을 활용한 수어 번역 서비스입니다.",
        technologies: ["Next.js", "TypeScript", "AI"],
    },

    "shopping-mall": {
        title: "Shopping Mall",
        description: "상품 조회와 주문 기능을 구현한 쇼핑몰 프로젝트입니다.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },

    musinsa: {
        title: "Musinsa Clone",
        description: "패션 플랫폼의 주요 기능을 구현한 프로젝트입니다.",
        technologies: ["React", "JavaScript", "CSS"],
    },
};

export default async function ProjectDetailPage({
                                                    params,
                                                }: ProjectDetailPageProps) {
    const { slug } = await params;

    const project = projectData[slug] ?? {
        title: slug,
        description: "프로젝트 상세 내용을 준비 중입니다.",
        technologies: [],
    };

    return (
        <main className="mx-auto min-h-[80vh] max-w-5xl px-6 py-24">
            <Link
                href="/projects"
                className="text-sm text-zinc-400 transition-colors hover:text-blue-500"
            >
                ← Projects
            </Link>

            <div className="mt-10">
                <p className="text-sm font-medium text-blue-500">
                    PROJECT
                </p>

                <h1 className="mt-3 text-4xl font-bold md:text-6xl">
                    {project.title}
                </h1>

                <p className="mt-6 text-xl leading-8 text-zinc-400">
                    {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm"
                        >
              {technology}
            </span>
                    ))}
                </div>
            </div>

            <div className="mt-16 aspect-video rounded-3xl border border-zinc-800 bg-zinc-900" />

            <div className="mt-16 space-y-16">
                <section>
                    <h2 className="text-2xl font-bold">
                        프로젝트 소개
                    </h2>

                    <p className="mt-4 leading-8 text-zinc-400">
                        프로젝트의 목적과 주요 기능에 대한 내용을 작성합니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">
                        문제와 해결 과정
                    </h2>

                    <p className="mt-4 leading-8 text-zinc-400">
                        개발 과정에서 발생한 문제와 해결 방법을 작성합니다.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold">
                        배운 점
                    </h2>

                    <p className="mt-4 leading-8 text-zinc-400">
                        프로젝트를 진행하며 배운 기술과 경험을 작성합니다.
                    </p>
                </section>
            </div>
        </main>
    );
}