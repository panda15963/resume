import Container from "../common/Container";
import Button from "../ui/Button";

export default function ContactSection() {
    return (
        <section id="contact" className="border-t border-zinc-900 py-32">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium text-blue-500">
                        CONTACT
                    </p>

                    <h2 className="mt-3 text-4xl font-bold md:text-6xl">
                        Let&apos;s Work Together.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        프로젝트, 채용 또는 개발에 관한 이야기를 나누고 싶다면
                        언제든지 연락해주세요.
                    </p>

                    <div className="mt-10">
                        <Button href="mailto:your-email@example.com">
                            Email Me
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}