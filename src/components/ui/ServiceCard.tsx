"use client";

import Link from "next/link";

interface ServiceCardProps {
    slug: string;
    icon: string;
    label: string;
    short: string;
}

export default function ServiceCard({ slug, icon, label, short }: ServiceCardProps) {
    return (
        <Link href={`/${slug}`} style={{ textDecoration: "none" }}>
            <div className="card" style={{ textAlign: "center", borderTop: "3px solid var(--yellow-accent)", cursor: "pointer" }}>
                <div style={{
                    width: 64, height: 64, background: "linear-gradient(135deg,#dcfce7,#bbf7d0)",
                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 1rem", fontSize: "1.75rem",
                }}>
                    {icon}
                </div>
                <h3 style={{ fontSize: "1rem", marginBottom: "0.5rem", color: "var(--gray-900)" }}>{label}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--gray-600)", lineHeight: 1.6 }}>{short}</p>
                <div style={{ marginTop: "1rem", color: "var(--green-primary)", fontWeight: 700, fontSize: "0.875rem" }}>
                    Dowiedz się więcej →
                </div>
            </div>
        </Link>
    );
}
