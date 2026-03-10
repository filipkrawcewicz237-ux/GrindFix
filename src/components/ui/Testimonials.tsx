import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
    return (
        <section className="section section-green">
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <span className="section-label">⭐ Opinie</span>
                    <h2>Co mówią nasi klienci?</h2>
                    <p style={{ marginTop: "0.75rem", color: "var(--gray-600)", maxWidth: 560, margin: "0.75rem auto 0" }}>
                        Zaufało nam ponad 500 rowerzystów w Warszawie. Sprawdź, co o nas mówią.
                    </p>
                </div>
                <div className="grid-3">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="card" style={{ borderTop: "3px solid var(--green-primary)" }}>
                            <div className="stars">{"★".repeat(t.rating)}</div>
                            <p style={{ margin: "0.75rem 0 1rem", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--gray-700)", fontStyle: "italic" }}>
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <div>
                                    <strong style={{ fontSize: "0.9rem", color: "var(--gray-900)" }}>{t.name}</strong>
                                    <div style={{ fontSize: "0.8rem", color: "var(--gray-600)" }}>📍 {t.location}</div>
                                </div>
                                <span style={{ fontSize: "0.75rem", color: "var(--gray-400)" }}>{t.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                    <a href="https://g.page/grindfix-warszawa" target="_blank" rel="noopener noreferrer" className="btn-outline">
                        🌟 Zobacz wszystkie opinie na Google
                    </a>
                </div>
            </div>
        </section>
    );
}
