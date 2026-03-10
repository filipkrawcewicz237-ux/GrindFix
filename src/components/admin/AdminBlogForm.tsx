"use client";

import { useMemo, useState } from "react";
import FaqEditor, { type FaqDraftItem } from "@/components/admin/FaqEditor";
import HtmlEditor from "@/components/admin/HtmlEditor";

const CATEGORY_OPTIONS = [
    "Poradnik",
    "Cennik",
    "Naprawa",
    "E-Bike",
    "MTB",
    "Przeglad",
    "Hamulce",
    "Mobilny Serwis",
    "Kola",
];

const AUTHOR_OPTIONS = [
    { slug: "marcin-kowalski", label: "Marcin Kowalski" },
    { slug: "anna-wisniewska", label: "Anna Wisniewska" },
];

function normalizeFaq(items: FaqDraftItem[]): FaqDraftItem[] {
    return items
        .map((item) => ({ q: item.q.trim(), a: item.a.trim() }))
        .filter((item) => Boolean(item.q) && Boolean(item.a));
}

export default function AdminBlogForm() {
    const [title, setTitle] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(CATEGORY_OPTIONS[0]!);
    const [customCategory, setCustomCategory] = useState("");
    const [selectedAuthor, setSelectedAuthor] = useState(AUTHOR_OPTIONS[0]!.slug);
    const [imageUrl, setImageUrl] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [faqItems, setFaqItems] = useState<FaqDraftItem[]>([{ q: "", a: "" }]);
    const [bodyHtml, setBodyHtml] = useState("<h2>Tytul sekcji</h2><p>Tresc artykulu...</p>");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const categoryValue = useMemo(() => {
        if (selectedCategory === "__custom") {
            return customCategory.trim();
        }
        return selectedCategory;
    }, [selectedCategory, customCategory]);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setStatus(null);
        setError(null);

        try {
            const response = await fetch("/api/admin/blog", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    category: categoryValue,
                    authorSlug: selectedAuthor,
                    imageUrl,
                    excerpt,
                    faq: normalizeFaq(faqItems),
                    bodyHtml,
                    isPublished: true,
                }),
            });

            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.error || "Nie udalo sie zapisac artykulu.");
            }

            setStatus(`Opublikowano: ${data.previewUrl}`);
        } catch (caughtError) {
            const message = caughtError instanceof Error ? caughtError.message : "Nieznany blad";
            setError(message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={onSubmit} className="admin-form">
            <h2 className="admin-form-title">Nowy artykul bloga</h2>
            <p className="admin-form-subtitle">
                SEO generuje sie automatycznie: slug, opis meta i czas czytania.
            </p>

            <div className="admin-field">
                <label htmlFor="blog-title">Tytul</label>
                <input
                    id="blog-title"
                    required
                    className="admin-input"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Np. Ile kosztuje serwis roweru gravelowego?"
                />
            </div>

            <div className="admin-grid-2">
                <div className="admin-field">
                    <label htmlFor="blog-category">Kategoria</label>
                    <select
                        id="blog-category"
                        className="admin-select"
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                    >
                        {CATEGORY_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                        <option value="__custom">Inna kategoria...</option>
                    </select>
                </div>

                <div className="admin-field">
                    <label htmlFor="blog-author">Autor</label>
                    <select
                        id="blog-author"
                        className="admin-select"
                        value={selectedAuthor}
                        onChange={(event) => setSelectedAuthor(event.target.value)}
                    >
                        {AUTHOR_OPTIONS.map((option) => (
                            <option key={option.slug} value={option.slug}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {selectedCategory === "__custom" && (
                <div className="admin-field">
                    <label htmlFor="blog-custom-category">Nazwa nowej kategorii</label>
                    <input
                        id="blog-custom-category"
                        className="admin-input"
                        value={customCategory}
                        onChange={(event) => setCustomCategory(event.target.value)}
                        required
                    />
                </div>
            )}

            <div className="admin-grid-2">
                <div className="admin-field">
                    <label htmlFor="blog-image">Obrazek (URL, opcjonalnie)</label>
                    <input
                        id="blog-image"
                        className="admin-input"
                        value={imageUrl}
                        onChange={(event) => setImageUrl(event.target.value)}
                        placeholder="/images/blog/nowy-artykul.jpg"
                    />
                </div>
                <div className="admin-field">
                    <label htmlFor="blog-excerpt">Krotki opis (opcjonalnie)</label>
                    <textarea
                        id="blog-excerpt"
                        className="admin-textarea"
                        value={excerpt}
                        onChange={(event) => setExcerpt(event.target.value)}
                        rows={4}
                        placeholder="Mozesz zostawic puste, wtedy opis wygeneruje sie automatycznie."
                    />
                </div>
            </div>

            <div style={{ marginBottom: "0.85rem" }}>
                <FaqEditor items={faqItems} onChange={setFaqItems} />
            </div>

            <HtmlEditor
                label="Tresc artykulu"
                value={bodyHtml}
                onChange={setBodyHtml}
                placeholder="Wpisz tresc artykulu..."
            />

            <div className="admin-inline" style={{ justifyContent: "space-between", marginTop: "0.85rem" }}>
                <div style={{ display: "grid", gap: "0.5rem", flex: 1 }}>
                    {error && <p className="admin-alert-error">{error}</p>}
                    {status && <p className="admin-alert-success">{status}</p>}
                </div>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
                    {loading ? "Zapisywanie..." : "Opublikuj artykul"}
                </button>
            </div>
        </form>
    );
}
