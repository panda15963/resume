import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

export default function AboutPage() {
    return (
        <main className="mx-auto min-h-[80vh] max-w-7xl px-6 py-24 lg:px-8">
            <p className="mb-2 text-sm font-medium text-blue-500">
                ABOUT
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
                About Me
            </h1>

            <div className="mt-12 grid gap-12 lg:grid-cols-2">
                <div>
                    <div className="aspect-square max-w-md rounded-3xl border border-zinc-800 bg-zinc-900" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold">
                        사용자 경험을 생각하는 개발자
                    </h2>

                    <div className="mt-6 space-y-5 leading-8 text-zinc-400">
                        <p>
                            안녕하세요. 프론트엔드 및 풀스택 개발자
                            최민석입니다.
                        </p>

                        <p>
                            React, Next.js, TypeScript를 중심으로
                            사용자에게 편리하고 직관적인 웹 서비스를
                            만드는 것에 관심이 있습니다.
                        </p>

                        <p>
                            새로운 기술을 학습하고 실제 프로젝트에 적용하며
                            지속적으로 성장하는 개발자가 되고자 합니다.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                            <p className="text-sm text-zinc-500">
                                Position
                            </p>
                            <p className="mt-1 font-medium">
                                Frontend / FullStack
                            </p>
                        </div>

                        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
                            <p className="text-sm text-zinc-500">
                                Location
                            </p>
                            <p className="mt-1 font-medium">
                                South Korea
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}