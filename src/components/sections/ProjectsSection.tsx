import Link from "next/link";
import Container from "../common/Container";
import { projects } from "@/src/data/projects";

export default function ProjectsSection() {
    return (
        <section id="projects" className="border-t border-zinc-900 py-24">
            <Container>
                <p className="text-sm font-medium text-blue-500">
                    PROJECTS
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    Featured Projects
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
                        >
                            <div className="aspect-video bg-zinc-800" />

                            <div className="p-6">
                                <h3 className="text-xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-zinc-400">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                                        >
                      {technology}
                    </span>
                                    ))}
                                </div>

                                <p className="mt-6 text-sm text-blue-500">
                                    View Project →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
}