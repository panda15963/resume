import Link from "next/link";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
];

const projects = [
  {
    title: "Sign Language Translator",
    description: "AI 기반 수어 번역 서비스",
    slug: "sign-language",
  },
  {
    title: "Shopping Mall",
    description: "Next.js 기반 쇼핑몰 프로젝트",
    slug: "shopping-mall",
  },
  {
    title: "Musinsa Clone",
    description: "패션 플랫폼 클론 프로젝트",
    slug: "musinsa",
  },
];

export default function HomePage() {
  return (
      <main>
        {/* Hero */}
        <section className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 font-medium text-blue-500">
              Frontend / FullStack Developer
            </p>

            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
              안녕하세요.
              <br />
              <span className="text-zinc-500">
              개발자 최민석입니다.
            </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              사용자 경험을 중요하게 생각하며 React, Next.js,
              TypeScript를 중심으로 웹 서비스를 개발합니다.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                  href="/projects"
                  className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition-colors hover:bg-blue-700"
              >
                프로젝트 보기
              </Link>

              <Link
                  href="/about"
                  className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                About Me
              </Link>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="border-t border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-2 text-sm font-medium text-blue-500">
              SKILLS
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Tech Stack
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                  <span
                      key={skill}
                      className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-zinc-300"
                  >
                {skill}
              </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="border-t border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-2 text-sm font-medium text-blue-500">
              PROJECTS
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Featured Projects
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                  <Link
                      key={project.slug}
                      href={`/projects/${project.slug}`}
                      className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
                  >
                    <div className="mb-6 aspect-video rounded-xl bg-zinc-800" />

                    <h3 className="text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-zinc-400">
                      {project.description}
                    </p>

                    <p className="mt-6 text-sm text-blue-500">
                      View Project →
                    </p>
                  </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}