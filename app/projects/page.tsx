import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects",
};

const projects = [
    {
        title: "Sign Language Translator",
        description: "AI 기반 수어 번역 서비스입니다.",
        slug: "sign-language",
        technologies: ["Next.js", "TypeScript", "AI"],
    },
    {
        title: "Shopping Mall",
        description: "상품 조회와 주문 기능을 구현한 쇼핑몰 프로젝트입니다.",
        slug: "shopping-mall",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Musinsa Clone",
        description: "패션 플랫폼의 주요 기능을 구현한 클론 프로젝트입니다.",
        slug: "musinsa",
        technologies: ["React", "JavaScript", "CSS"],
    },
];

export default function ProjectsPage() {
    return (
        <main className="mx-auto min-h-[80vh] max-w-7xl px-6 py-24 lg:px-8">
            <p className="mb-2 text-sm font-medium text-blue-500">
                PROJECTS
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
                My Projects
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
                지금까지 진행한 주요 프로젝트를 소개합니다.
            </p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
                    >
                        <div className="aspect-video bg-zinc-800" />

                        <div className="p-6">
                            <h2 className="text-2xl font-bold">
                                {project.title}
                            </h2>

                            <p className="mt-3 text-zinc-400">
                                {project.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-zinc-300"
                                    >
                    {technology}
                  </span>
                                ))}
                            </div>

                            <p className="mt-6 text-blue-500">
                                자세히 보기 →
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}