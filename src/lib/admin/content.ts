import { buildSeoExcerpt, estimateReadingTimeFromHtml, slugify } from "@/lib/seo";

type FaqInput = { q?: string; a?: string };

interface BlogInput {
    title?: string;
    category?: string;
    authorSlug?: string;
    bodyHtml?: string;
    imageUrl?: string;
    faqText?: string;
    faq?: FaqInput[];
    excerpt?: string;
    isPublished?: boolean;
}

interface ServiceInput {
    title?: string;
    bodyHtml?: string;
    shortDescription?: string;
    heroDescription?: string;
    icon?: string;
    ctaLabel?: string;
    ctaHref?: string;
    faqText?: string;
    faq?: FaqInput[];
    isPublished?: boolean;
}

function todayDateString(): string {
    return new Date().toISOString().slice(0, 10);
}

function parseFaqText(raw?: string): Array<{ q: string; a: string }> {
    if (!raw) return [];

    return raw
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const [question, ...answerParts] = line.split("|");
            const q = (question || "").trim();
            const a = answerParts.join("|").trim();
            if (!q || !a) return null;
            return { q, a };
        })
        .filter((item): item is { q: string; a: string } => Boolean(item));
}

function parseFaqList(items?: FaqInput[]): Array<{ q: string; a: string }> {
    if (!Array.isArray(items)) return [];

    return items
        .map((item) => ({
            q: String(item?.q || "").trim(),
            a: String(item?.a || "").trim(),
        }))
        .filter((item) => Boolean(item.q) && Boolean(item.a));
}

function normalizeCtaHref(value?: string): string {
    const href = (value || "").trim();
    if (!href) return "/#kontakt";
    if (href.startsWith("/")) return href;
    if (href.startsWith("http://") || href.startsWith("https://")) return href;
    return `/${href.replace(/^\/+/, "")}`;
}

export function buildBlogPayload(input: BlogInput) {
    const title = (input.title || "").trim();
    const bodyHtml = (input.bodyHtml || "").trim();

    if (!title) {
        throw new Error("Tytul artykulu jest wymagany.");
    }
    if (!bodyHtml) {
        throw new Error("Tresc artykulu (HTML) jest wymagana.");
    }

    const slug = slugify(title);
    const excerpt = buildSeoExcerpt(title, bodyHtml, input.excerpt);
    const faq = parseFaqList(input.faq);

    return {
        slug,
        title,
        excerpt,
        category: (input.category || "Poradnik").trim() || "Poradnik",
        reading_time: estimateReadingTimeFromHtml(bodyHtml),
        published_at: todayDateString(),
        updated_at: todayDateString(),
        image_url: (input.imageUrl || "").trim() || "/images/blog/default.jpg",
        author_slug: (input.authorSlug || "marcin-kowalski").trim() || "marcin-kowalski",
        body_html: bodyHtml,
        faq: faq.length > 0 ? faq : parseFaqText(input.faqText),
        is_published: input.isPublished ?? true,
    };
}

export function buildServicePayload(input: ServiceInput) {
    const title = (input.title || "").trim();
    const bodyHtml = (input.bodyHtml || "").trim();

    if (!title) {
        throw new Error("Tytul uslugi jest wymagany.");
    }
    if (!bodyHtml) {
        throw new Error("Tresc uslugi (HTML) jest wymagana.");
    }

    const slug = slugify(title);
    const shortDescription = buildSeoExcerpt(title, bodyHtml, input.shortDescription);
    const heroDescription = buildSeoExcerpt(title, bodyHtml, input.heroDescription);
    const faq = parseFaqList(input.faq);

    return {
        slug,
        title,
        short_description: shortDescription,
        hero_description: heroDescription,
        content_html: bodyHtml,
        faq: faq.length > 0 ? faq : parseFaqText(input.faqText),
        icon: (input.icon || "🔧").trim() || "🔧",
        cta_label: (input.ctaLabel || "Skontaktuj sie").trim() || "Skontaktuj sie",
        cta_href: normalizeCtaHref(input.ctaHref),
        updated_at: todayDateString(),
        is_published: input.isPublished ?? true,
    };
}
