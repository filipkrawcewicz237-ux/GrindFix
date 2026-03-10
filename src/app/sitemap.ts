import { MetadataRoute } from "next";
import { AUTHORS, SERVICES, SITE_URL } from "@/lib/data";
import { getBlogPosts, getPublishedServicePages } from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const base = SITE_URL;
    const now = new Date().toISOString();
    const [blogPosts, cmsServices] = await Promise.all([getBlogPosts(), getPublishedServicePages()]);

    const serviceSlugs = new Set([
        ...SERVICES.map((service) => service.slug),
        ...cmsServices.map((service) => service.slug),
    ]);

    const staticPages: MetadataRoute.Sitemap = [
        { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${base}/cennik`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
        { url: `${base}/serwis-rowerowy-mokotow`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/serwis-rowerowy-ursynow`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/serwis-rowerowy-wola`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ];

    const servicePages: MetadataRoute.Sitemap = [...serviceSlugs].map((slug) => ({
        url: `${base}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.9,
    }));

    const blogPages: MetadataRoute.Sitemap = blogPosts.map((a) => ({
        url: `${base}/blog/${a.slug}`,
        lastModified: a.updatedDate,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    const authorPages: MetadataRoute.Sitemap = AUTHORS.map(a => ({
        url: `${base}/authors/${a.slug}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.5,
    }));

    return [...staticPages, ...servicePages, ...blogPages, ...authorPages];
}
