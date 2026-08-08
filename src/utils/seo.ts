import type { Metadata } from "next";
import { siteConfig } from "@/src/constants/data/site";

interface GenerateMetadataProps {
    title?: string;
    description?: string;
}

export function generateMetadata({
                                     title,
                                     description = siteConfig.description,
                                 }: GenerateMetadataProps = {}): Metadata {
    return {
        title: title
            ? `${title} | ${siteConfig.name}`
            : siteConfig.title,

        description,

        openGraph: {
            title: title ?? siteConfig.title,
            description,
            url: siteConfig.url,
            siteName: siteConfig.name,
            locale: "ko_KR",
            type: "website",
        },

        twitter: {
            card: "summary_large_image",
            title: title ?? siteConfig.title,
            description,
        },
    };
}