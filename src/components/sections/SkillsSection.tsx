import Container from "../common/Container";
import Card from "../ui/Card";

const skillGroups = [
    {
        title: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
        title: "Backend",
        skills: ["Java", "Spring Boot", "Node.js"],
    },
    {
        title: "Database & Tools",
        skills: ["MySQL", "Git", "GitHub"],
    },
];

export default function SkillsSection() {
    return (
        <section id="skills" className="border-t border-zinc-900 py-24">
            <Container>
                <p className="text-sm font-medium text-blue-500">
                    SKILLS
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    Tech Stack
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-3">
                    {skillGroups.map((group) => (
                        <Card key={group.title}>
                            <h3 className="text-xl font-bold">
                                {group.title}
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full bg-zinc-800 px-3 py-1.5 text-sm text-zinc-300"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}