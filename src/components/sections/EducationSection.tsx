import Container from "../common/Container";
import Card from "../ui/Card";
import { education } from "@/src/data/education";

export default function EducationSection() {
    return (
        <section className="border-t border-zinc-900 py-24">
            <Container>
                <p className="text-sm font-medium text-blue-500">
                    EDUCATION
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    Education
                </h2>

                <div className="mt-12 grid gap-6">
                    {education.map((item) => (
                        <Card key={`${item.school}-${item.period}`}>
                            <p className="text-sm text-zinc-500">
                                {item.period}
                            </p>

                            <h3 className="mt-2 text-xl font-bold">
                                {item.school}
                            </h3>

                            <p className="mt-1 text-blue-500">
                                {item.major}
                            </p>

                            <p className="mt-4 text-zinc-400">
                                {item.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}