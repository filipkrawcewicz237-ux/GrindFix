"use client";

import { useState } from "react";
import FaqEditor, { type FaqDraftItem } from "@/components/admin/FaqEditor";
import HtmlEditor from "@/components/admin/HtmlEditor";

const ICON_OPTIONS = ["🔧", "⚙️", "🚲", "⚡", "🛠️", "📦"];

function normalizeFaq(items: FaqDraftItem[]): FaqDraftItem[] {
    return items
        .map((item) => ({ q: item.q.trim(), a: item.a.trim() }))
        .filter((item) => Boolean(item.q) && Boolean(item.a));
}

export default function AdminServiceForm() {
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState(ICON_OPTIONS[0]!);
    const [shortDescription, setShortDescription] = useState("");
    const [heroDescription, setHeroDescription] = useState("");
    const [ctaLabel, setCtaLabel] = useState("Skontaktuj sie");
    const [ctaHref, setCtaHref] = useState("/#kontakt");
    const [faqItems, setFaqItems] = useState<FaqDraftItem[]>([{ q: "", a: "" }]);
    const [bodyHtml, setBodyHtml] = useState("<h2>Zakres uslugi</h2><p>Opis uslugi...</p>");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setLoading(true);
        setStatus(null);
        setError(null);

        try {
            const response = await fetch("/api/admin/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    icon,
                    shortDescription,
                    heroDescription,
                    ctaLabel,
                    ctaHref,
                    faq: normalizeFaq(faqItems),
                    bodyHtml,
                    isPublished: true,
                }),
            });

            const data = await response.json();
            if (!response.ok || !data.success) {
                throw new Error(data.error || "Nie udalo sie zapisac strony uslugi.");
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
            <h2 className="admin-form-title">Nowa strona uslugi</h2>
            <p className="admin-form-subtitle">
                SEO wypelnia sie automatycznie: slug, opisy i canonical metadata.
            </p>

            <div className="admin-grid-2">
                <div className="admin-field">
                    <label htmlFor="service-title">Tytul uslugi</label>
                    <input
                        id="service-title"
                        className="admin-input"
                        required
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                        placeholder="Np. Serwis roweru gravelowego Warszawa"
                    />
                </div>
                <div className="admin-field">
                    <label htmlFor="service-icon">Ikona</label>
                    <select
                        id="service-icon"
                        className="admin-select"
                        value={icon}
                        onChange={(event) => setIcon(event.target.value)}
                    >
                        {ICON_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="admin-grid-2">
                <div className="admin-field">
                    <label htmlFor="service-short">Krotki opis (opcjonalnie)</label>
                    <textarea
                        id="service-short"
                        className="admin-textarea"
                        rows={4}
                        value={shortDescription}
                        onChange={(event) => setShortDescription(event.target.value)}
                        placeholder="Jesli puste, wygeneruje sie automatycznie."
                    />
                </div>
                <div className="admin-field">
                    <label htmlFor="service-hero">Opis hero (opcjonalnie)</label>
                    <textarea
                        id="service-hero"
                        className="admin-textarea"
                        rows={4}
                        value={heroDescription}
                        onChange={(event) => setHeroDescription(event.target.value)}
                        placeholder="Jesli puste, wygeneruje sie automatycznie."
                    />
                </div>
            </div>

            <div className="admin-grid-2">
                <div className="admin-field">
                    <label htmlFor="service-cta-label">CTA label</label>
                    <input
                        id="service-cta-label"
                        className="admin-input"
                        value={ctaLabel}
                        onChange={(event) => setCtaLabel(event.target.value)}
                    />
                </div>
                <div className="admin-field">
                    <label htmlFor="service-cta-href">CTA href</label>
                    <input
                        id="service-cta-href"
                        className="admin-input"
                        value={ctaHref}
                        onChange={(event) => setCtaHref(event.target.value)}
                        placeholder="/#kontakt"
                    />
                </div>
            </div>

            <div style={{ marginBottom: "0.85rem" }}>
                <FaqEditor items={faqItems} onChange={setFaqItems} />
            </div>

            <HtmlEditor
                label="Tresc strony uslugi"
                value={bodyHtml}
                onChange={setBodyHtml}
                placeholder="Wpisz tresc uslugi..."
            />

            <div className="admin-inline" style={{ justifyContent: "space-between", marginTop: "0.85rem" }}>
                <div style={{ display: "grid", gap: "0.5rem", flex: 1 }}>
                    {error && <p className="admin-alert-error">{error}</p>}
                    {status && <p className="admin-alert-success">{status}</p>}
                </div>
                <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
                    {loading ? "Zapisywanie..." : "Opublikuj strone"}
                </button>
            </div>
        </form>
    );
}
