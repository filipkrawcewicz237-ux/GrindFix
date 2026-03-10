import { ARTICLE_CONTENT } from "@/lib/articles";
import { BLOG_ARTICLES, SERVICES } from "@/lib/data";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export interface FAQItem {
    q: string;
    a: string;
}

export interface BlogPostPreview {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readingTime: number;
    date: string;
    updatedDate: string;
    image: string;
    author: string;
}

export interface BlogPost extends BlogPostPreview {
    bodyHtml: string;
    faq: FAQItem[];
}

export interface ServiceCardData {
    slug: string;
    label: string;
    icon: string;
    short: string;
}

export interface ServicePage {
    slug: string;
    title: string;
    description: string;
    bodyHtml: string;
    faq: FAQItem[];
    icon: string;
    ctaLabel: string;
    ctaHref: string;
    updatedDate: string;
}

type BlogRow = {
    slug: string;
    title: string;
    excerpt: string;
    category: string | null;
    reading_time: number | null;
    published_at: string | null;
    updated_at: string | null;
    image_url: string | null;
    author_slug: string | null;
    body_html: string | null;
    faq: unknown;
};

type ServiceRow = {
    slug: string;
    title: string;
    short_description: string | null;
    hero_description: string | null;
    content_html: string | null;
    faq: unknown;
    icon: string | null;
    cta_label: string | null;
    cta_href: string | null;
    updated_at: string | null;
};

const FALLBACK_BLOG_POSTS: BlogPost[] = BLOG_ARTICLES.map((article) => {
    const content = ARTICLE_CONTENT[article.slug];
    return {
        slug: article.slug,
        title: article.title,
        excerpt: article.excerpt,
        category: article.category,
        readingTime: article.readingTime,
        date: article.date,
        updatedDate: article.updatedDate,
        image: article.image,
        author: article.author,
        bodyHtml: content?.html || `<p>${article.excerpt}</p>`,
        faq: content?.faq || [],
    };
});

const FALLBACK_SERVICE_CARDS: ServiceCardData[] = SERVICES.map((service) => ({
    slug: service.slug,
    label: service.label,
    icon: service.icon,
    short: service.short,
}));

function normalizeDate(value: string | null | undefined, fallback: string): string {
    if (!value) return fallback;
    return value.length >= 10 ? value.slice(0, 10) : fallback;
}

function normalizeFaq(value: unknown): FAQItem[] {
    if (!Array.isArray(value)) return [];
    return value
        .map((item) => {
            if (!item || typeof item !== "object") return null;
            const q = "q" in item ? String(item.q ?? "").trim() : "";
            const a = "a" in item ? String(item.a ?? "").trim() : "";
            if (!q || !a) return null;
            return { q, a };
        })
        .filter((item): item is FAQItem => Boolean(item));
}

function mapBlogRow(row: BlogRow): BlogPost | null {
    if (!row.slug || !row.title || !row.excerpt) return null;

    const publishedDate = normalizeDate(row.published_at, new Date().toISOString().slice(0, 10));
    const updatedDate = normalizeDate(row.updated_at, publishedDate);

    return {
        slug: row.slug,
        title: row.title,
        excerpt: row.excerpt,
        category: row.category || "Poradnik",
        readingTime: row.reading_time || 5,
        date: publishedDate,
        updatedDate,
        image: row.image_url || "/images/blog/default.jpg",
        author: row.author_slug || "marcin-kowalski",
        bodyHtml: row.body_html || `<p>${row.excerpt}</p>`,
        faq: normalizeFaq(row.faq),
    };
}

function mapServiceRow(row: ServiceRow): ServicePage | null {
    if (!row.slug || !row.title) return null;

    const description = (row.hero_description || row.short_description || "").trim();
    const normalizedDescription = description || "Profesjonalna usluga rowerowa w Warszawie.";

    return {
        slug: row.slug,
        title: row.title,
        description: normalizedDescription,
        bodyHtml: row.content_html || `<p>${normalizedDescription}</p>`,
        faq: normalizeFaq(row.faq),
        icon: row.icon || "🔧",
        ctaLabel: row.cta_label || "Skontaktuj sie",
        ctaHref: row.cta_href || "/#kontakt",
        updatedDate: normalizeDate(row.updated_at, new Date().toISOString().slice(0, 10)),
    };
}

export async function getBlogPosts(): Promise<BlogPostPreview[]> {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
        return FALLBACK_BLOG_POSTS;
    }

    const { data, error } = await supabase
        .from("cms_blog_posts")
        .select("slug,title,excerpt,category,reading_time,published_at,updated_at,image_url,author_slug,body_html,faq")
        .eq("is_published", true)
        .order("published_at", { ascending: false });

    if (error || !data || data.length === 0) {
        return FALLBACK_BLOG_POSTS;
    }

    const posts = (data as BlogRow[]).map(mapBlogRow).filter((item): item is BlogPost => Boolean(item));
    if (posts.length === 0) {
        return FALLBACK_BLOG_POSTS;
    }

    const merged = new Map(FALLBACK_BLOG_POSTS.map((item) => [item.slug, item] as const));
    posts.forEach((item) => merged.set(item.slug, item));

    return [...merged.values()].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
        return FALLBACK_BLOG_POSTS.find((post) => post.slug === slug) ?? null;
    }

    const { data, error } = await supabase
        .from("cms_blog_posts")
        .select("slug,title,excerpt,category,reading_time,published_at,updated_at,image_url,author_slug,body_html,faq")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

    if (error || !data) {
        return FALLBACK_BLOG_POSTS.find((post) => post.slug === slug) ?? null;
    }

    return mapBlogRow(data as BlogRow);
}

export async function getBlogSlugs(): Promise<string[]> {
    const posts = await getBlogPosts();
    return posts.map((post) => post.slug);
}

export async function getServiceCards(): Promise<ServiceCardData[]> {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
        return FALLBACK_SERVICE_CARDS;
    }

    const { data, error } = await supabase
        .from("cms_service_pages")
        .select("slug,title,short_description,icon")
        .eq("is_published", true)
        .order("created_at", { ascending: true });

    if (error || !data || data.length === 0) {
        return FALLBACK_SERVICE_CARDS;
    }

    const mapped = (data as Array<{ slug: string; title: string; short_description: string | null; icon: string | null }>)
        .map((row) => {
            if (!row.slug || !row.title) return null;
            return {
                slug: row.slug,
                label: row.title,
                icon: row.icon || "🔧",
                short: (row.short_description || "").trim() || "Profesjonalna usluga rowerowa.",
            };
        })
        .filter((item): item is ServiceCardData => Boolean(item));

    if (mapped.length === 0) {
        return FALLBACK_SERVICE_CARDS;
    }

    const merged = new Map(FALLBACK_SERVICE_CARDS.map((item) => [item.slug, item] as const));
    mapped.forEach((item) => merged.set(item.slug, item));
    return [...merged.values()];
}

export async function getServicePageBySlug(slug: string): Promise<ServicePage | null> {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
        return null;
    }

    const { data, error } = await supabase
        .from("cms_service_pages")
        .select("slug,title,short_description,hero_description,content_html,faq,icon,cta_label,cta_href,updated_at")
        .eq("slug", slug)
        .eq("is_published", true)
        .maybeSingle();

    if (error || !data) {
        return null;
    }

    return mapServiceRow(data as ServiceRow);
}

export async function getPublishedServicePages(): Promise<ServicePage[]> {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
        return [];
    }

    const { data, error } = await supabase
        .from("cms_service_pages")
        .select("slug,title,short_description,hero_description,content_html,faq,icon,cta_label,cta_href,updated_at")
        .eq("is_published", true);

    if (error || !data || data.length === 0) {
        return [];
    }

    return (data as ServiceRow[]).map(mapServiceRow).filter((item): item is ServicePage => Boolean(item));
}
