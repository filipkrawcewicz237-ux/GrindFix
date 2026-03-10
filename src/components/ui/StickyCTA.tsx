"use client";
import Link from "next/link";

export default function StickyCTA() {
    return (
        <div className="sticky-cta">
            <Link href="/#kontakt" className="btn-primary" style={{ fontSize: "0.95rem", padding: "0.85rem 1.75rem", gap: "0.5rem" }}>
                📅 Zarezerwuj wizytę
            </Link>
        </div>
    );
}
