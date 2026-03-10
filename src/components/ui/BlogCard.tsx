"use client";

import Link from "next/link";
import type { BlogPostPreview } from "@/lib/cms";

export default function BlogCard({ article }: { article: BlogPostPreview }) {
    return (
        <article className="card" style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="badge-green">{article.category}</span>
                <span style={{ fontSize: "0.78rem", color: "var(--gray-600)" }}>⏱ {article.readingTime} min czytania</span>
            </div>
            <h3 style={{ fontSize: "1rem", lineHeight: 1.4 }}>
                <Link href={`/blog/${article.slug}`} style={{ color: "var(--gray-900)", textDecoration: "none" }}
                    onMouseOver={e => (e.currentTarget.style.color = "var(--green-primary)")}
                    onMouseOut={e => (e.currentTarget.style.color = "var(--gray-900)")}
                >
                    {article.title}
                </Link>
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--gray-600)", lineHeight: 1.6 }}>{article.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid var(--gray-100)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--gray-400)" }}>📅 {article.date}</span>
                <Link href={`/blog/${article.slug}`} style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--green-primary)" }}>
                    Czytaj →
                </Link>
            </div>
        </article>
    );
}
