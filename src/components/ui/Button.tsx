import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: "primary" | "secondary";
}

export default function Button({
                                   children,
                                   href,
                                   variant = "primary",
                               }: ButtonProps) {
    const styles =
        variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:bg-zinc-900";

    const className = `inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-colors ${styles}`;

    if (href) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button type="button" className={className}>
            {children}
        </button>
    );
}