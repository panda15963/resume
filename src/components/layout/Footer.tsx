import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-800">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between lg:px-8">
                <p>© {new Date().getFullYear()} Minseok Choi</p>

                <div className="flex gap-5">
                    <Link href="/projects" className="hover:text-white">
                        Projects
                    </Link>

                    <Link href="/contact" className="hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </footer>
    );
}