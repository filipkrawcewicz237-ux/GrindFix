"use client";

import { useState } from "react";
import { FAQJsonLd } from "@/components/seo/JsonLd";

interface FAQItem { q: string; a: string; }

export default function FAQSection({ items, title = "Najczęściej Zadawane Pytania" }: { items: FAQItem[]; title?: string }) {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className="section">
            <FAQJsonLd items={items} />
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <div style={{ marginBottom: "0.25rem" }}><span className="section-label">❓ FAQ</span></div>
                    <h2 className="heading-underline">{title}</h2>
                </div>
                <div style={{ maxWidth: 760, margin: "0 auto" }}>
                    {items.map((item, i) => (
                        <div key={i} className="faq-item">
                            <button
                                className="faq-question"
                                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                aria-expanded={openIdx === i}
                            >
                                <span>{item.q}</span>
                                <span style={{
                                    fontSize: "1.2rem", color: "var(--green-primary)",
                                    transform: openIdx === i ? "rotate(45deg)" : "rotate(0)",
                                    transition: "transform 0.25s ease", flexShrink: 0,
                                }}>+</span>
                            </button>
                            {openIdx === i && (
                                <div className="faq-answer fade-in-up" dangerouslySetInnerHTML={{ __html: item.a }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
