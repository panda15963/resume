import Container from "../common/Container";
import { experiences } from "@/src/data/experience";

export default function ExperienceSection() {
    return (
        <section className="border-t border-zinc-900 py-24">
            <Container>
                <p className="text-sm font-medium text-blue-500">
                    EXPERIENCE
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    Experience
                </h2>

                <div className="mt-12 space-y-8">
                    {experiences.map((experience) => (
                        <div
                            key={`${experience.period}-${experience.title}`}
                            className="grid gap-4 border-l border-zinc-800 pl-6 md:grid-cols-[180px_1fr]"
                        >
                            <p className="text-sm text-zinc-500">
                                {experience.period}
                            </p>

                            <div>
                                <h3 className="text-xl font-bold">
                                    {experience.title}
                                </h3>

                                <p className="mt-1 text-blue-500">
                                    {experience.company}
                                </p>

                                <p className="mt-4 leading-7 text-zinc-400">
                                    {experience.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}