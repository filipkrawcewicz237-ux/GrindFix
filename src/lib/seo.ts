export function stripHtml(html: string): string {
    return html
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

const PL_MAP: Record<string, string> = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
};

export function slugify(value: string): string {
    const normalized = value
        .toLowerCase()
        .split("")
        .map((char) => PL_MAP[char] || char)
        .join("")
        .replace(/[^a-z0-9\s-]/g, " ")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");

    return normalized || "nowy-wpis";
}

function trimWithEllipsis(text: string, max: number): string {
    if (text.length <= max) return text;
    const trimmed = text.slice(0, Math.max(0, max - 3)).trimEnd();
    return `${trimmed}...`;
}

export function normalizeSeoTitle(title: string, max = 60): string {
    return trimWithEllipsis(title.trim(), max);
}

export function normalizeSeoDescription(description: string, fallback = "", max = 160): string {
    const source = (description.trim() || fallback.trim()).replace(/\s+/g, " ");
    if (!source) return "";
    return trimWithEllipsis(source, max);
}

export function estimateReadingTimeFromHtml(html: string, wordsPerMinute = 180): number {
    const wordCount = stripHtml(html).split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function buildSeoExcerpt(title: string, bodyHtml: string, customExcerpt?: string): string {
    const body = stripHtml(bodyHtml);
    const draft = customExcerpt?.trim() || body || title;
    const merged = draft.length < 120 ? `${title}. ${draft}` : draft;
    return normalizeSeoDescription(merged, title, 160);
}
