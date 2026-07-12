import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
};

export default function ContactPage() {
    return (
        <main className="mx-auto flex min-h-[80vh] max-w-5xl items-center px-6 py-24">
            <div>
                <p className="mb-2 text-sm font-medium text-blue-500">
                    CONTACT
                </p>

                <h1 className="text-4xl font-bold md:text-6xl">
                    Let&apos;s Work Together.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                    프로젝트, 채용 또는 개발에 관한 이야기를 나누고 싶다면
                    언제든지 연락해주세요.
                </p>

                <div className="mt-12 flex flex-wrap gap-4">
                    <a
                        href="mailto:your-email@example.com"
                        className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition-colors hover:bg-blue-700"
                    >
                        Email
                    </a>

                    <a
                        href="#"
                        className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </main>
    );
}