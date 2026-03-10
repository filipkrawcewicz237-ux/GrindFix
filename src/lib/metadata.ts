import { Metadata } from "next";

const SITE_URL = "https://grindfix.pl";
const SITE_NAME = "GRINDFIX";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

interface MetaOptions {
    title: string;
    description: string;
    path?: string;
    ogImage?: string;
    noIndex?: boolean;
    type?: "website" | "article";
}

export function generateMeta({
    title,
    description,
    path = "",
    ogImage = DEFAULT_OG_IMAGE,
    noIndex = false,
    type = "website",
}: MetaOptions): Metadata {
    const canonical = `${SITE_URL}${path}`;

    // Trim title to ≤60 chars
    const safeTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;
    // Trim description to 120-160 chars
    const safeDesc =
        description.length > 160
            ? description.substring(0, 157) + "..."
            : description.length < 120
                ? description
                : description;

    return {
        title: safeTitle,
        description: safeDesc,
        alternates: { canonical },
        robots: noIndex
            ? { index: false, follow: false }
            : { index: true, follow: true },
        openGraph: {
            title: safeTitle,
            description: safeDesc,
            url: canonical,
            siteName: SITE_NAME,
            type,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: safeTitle,
                },
            ],
            locale: "pl_PL",
        },
        twitter: {
            card: "summary_large_image",
            title: safeTitle,
            description: safeDesc,
            images: [ogImage],
        },
    };
}

export const SITE_URL_CONST = SITE_URL;
export const SITE_NAME_CONST = SITE_NAME;
