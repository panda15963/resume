import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Minseok Portfolio",
    template: "%s | Minseok Portfolio",
  },
  description: "Frontend / FullStack Developer Portfolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ko" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link
              href="/"
              className="text-xl font-bold tracking-tight transition-colors hover:text-blue-500"
          >
            Minseok.
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link
                href="/about"
                className="text-zinc-400 transition-colors hover:text-white"
            >
              About
            </Link>

            <Link
                href="/projects"
                className="text-zinc-400 transition-colors hover:text-white"
            >
              Projects
            </Link>

            <Link
                href="/blog"
                className="text-zinc-400 transition-colors hover:text-white"
            >
              Blog
            </Link>

            <Link
                href="/contact"
                className="text-zinc-400 transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {children}

      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Minseok Choi</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
      </body>
      </html>
  );
}