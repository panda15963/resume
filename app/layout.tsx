import type { Metadata } from "next";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import "./globals.css";
import {ReactNode} from "react";

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
    children: ReactNode;
}>) {
    return (
        <html lang="ko" data-scroll-behavior="smooth">
        <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />

        {children}

        <Footer />
        </body>
        </html>
    );
}