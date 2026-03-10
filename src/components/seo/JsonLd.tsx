"use client";

import { NAP, SITE_URL } from "@/lib/data";

interface FAQItem { q: string; a: string; }
interface BreadcrumbItem { name: string; url: string; }

// ---- Organization + LocalBusiness ----
export function LocalBusinessJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "BikeStore"],
        name: NAP.name,
        url: SITE_URL,
        telephone: NAP.phone,
        email: NAP.email,
        image: `${SITE_URL}/og-image.jpg`,
        logo: `${SITE_URL}/logo.png`,
        priceRange: "$$",
        address: {
            "@type": "PostalAddress",
            streetAddress: NAP.address.street,
            addressLocality: NAP.address.city,
            postalCode: NAP.address.postalCode,
            addressCountry: NAP.address.country,
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: NAP.lat,
            longitude: NAP.lng,
        },
        openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "15:00" },
        ],
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
        sameAs: [
            "https://facebook.com/grindfix",
            "https://instagram.com/grindfix_warszawa",
            "https://g.page/grindfix-warszawa",
        ],
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// ---- Service ----
export function ServiceJsonLd({ name, description, url }: { name: string; description: string; url: string }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        name,
        description,
        provider: {
            "@type": "LocalBusiness",
            name: NAP.name,
            url: SITE_URL,
            telephone: NAP.phone,
            address: {
                "@type": "PostalAddress",
                addressLocality: "Warszawa",
                addressCountry: "PL",
            },
        },
        areaServed: { "@type": "City", name: "Warszawa" },
        url,
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// ---- Article ----
export function ArticleJsonLd({
    title, description, url, imageUrl, datePublished, dateModified, authorName, authorUrl,
}: {
    title: string; description: string; url: string; imageUrl: string;
    datePublished: string; dateModified: string; authorName: string; authorUrl: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        url,
        image: imageUrl,
        datePublished,
        dateModified,
        author: {
            "@type": "Person",
            name: authorName,
            url: authorUrl,
        },
        publisher: {
            "@type": "Organization",
            name: NAP.name,
            logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// ---- FAQPage ----
export function FAQJsonLd({ items }: { items: FAQItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
        })),
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// ---- BreadcrumbList ----
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: item.url,
        })),
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

// ---- Person (Author) ----
export function PersonJsonLd({ name, url, jobTitle, description, image }: {
    name: string; url: string; jobTitle: string; description: string; image: string;
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        url,
        jobTitle,
        description,
        image,
        worksFor: { "@type": "Organization", name: NAP.name, url: SITE_URL },
    };
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
