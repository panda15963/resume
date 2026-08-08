import Container from "../common/Container";
import Button from "../ui/Button";
import { profile } from "@/src/data/profile";

export default function HeroSection() {
    return (
        <section className="flex min-h-[85vh] items-center">
            <Container>
                <div className="max-w-4xl">
                    <p className="mb-4 font-medium text-blue-500">
                        {profile.role}
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                        안녕하세요.
                        <br />
                        <span className="text-zinc-500">
              개발자 {profile.koreanName}입니다.
            </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                        {profile.introduction}
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button href="/projects">
                            프로젝트 보기
                        </Button>

                        <Button href="/about" variant="secondary">
                            About Me
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}