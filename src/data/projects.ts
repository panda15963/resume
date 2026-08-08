export interface Project {
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    image?: string;
}

export const projects: Project[] = [
    {
        title: "Sign Language Translator",
        slug: "sign-language",
        description: "AI 기술을 활용한 수어 번역 서비스입니다.",
        technologies: ["Next.js", "TypeScript", "AI"],
    },
    {
        title: "Shopping Mall",
        slug: "shopping-mall",
        description: "상품 조회와 주문 기능을 구현한 쇼핑몰 프로젝트입니다.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Musinsa Clone",
        slug: "musinsa",
        description: "패션 플랫폼의 주요 기능을 구현한 클론 프로젝트입니다.",
        technologies: ["React", "JavaScript", "CSS"],
    },
];