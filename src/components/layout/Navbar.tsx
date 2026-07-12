"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight transition-colors hover:text-blue-500"
                >
                    Minseok.
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm text-zinc-400 transition-colors hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="rounded-lg border border-zinc-800 px-3 py-2 text-sm md:hidden"
                    aria-label="메뉴 열기"
                >
                    Menu
                </button>
            </nav>

            {open && (
                <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 md:hidden">
                    <div className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-zinc-400 hover:text-white"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}