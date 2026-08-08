import Container from "../common/Container";
import { profile } from "@/src/data/profile";

export default function AboutSection() {
    return (
        <section id="about" className="border-t border-zinc-900 py-24">
            <Container>
                <p className="text-sm font-medium text-blue-500">
                    ABOUT
                </p>

                <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                    About Me
                </h2>

                <div className="mt-10 max-w-3xl">
                    <p className="text-lg leading-8 text-zinc-400">
                        {profile.introduction}
                    </p>
                </div>
            </Container>
        </section>
    );
}