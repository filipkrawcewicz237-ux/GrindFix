"use client";

import Link from "next/link";
import { NAP, SERVICES, SITE_URL } from "@/lib/data";

export default function Footer() {
    const year = 2026;
    return (
        <footer style={{ background: "#111827", color: "#d1d5db", paddingTop: "4rem" }}>
            <div className="container">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", paddingBottom: "3rem", borderBottom: "1px solid #374151" }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: "flex", gap: "0.4rem", marginBottom: "1rem" }}>
                            <span style={{ background: "var(--green-primary)", color: "#fff", fontWeight: 800, fontSize: "1.2rem", padding: "0.2rem 0.6rem", borderRadius: "0.4rem" }}>GRIND</span>
                            <span style={{ background: "var(--yellow-accent)", color: "#111", fontWeight: 800, fontSize: "1.2rem", padding: "0.2rem 0.6rem", borderRadius: "0.4rem" }}>FIX</span>
                        </div>
                        <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#9ca3af", maxWidth: 260 }}>
                            Profesjonalny serwis rowerowy w Warszawie. Naprawa, przeglądy, e-bike i mobilny serwis.
                        </p>
                        <div suppressHydrationWarning style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem" }}>
                            {/* Facebook */}
                            <a suppressHydrationWarning href="https://www.facebook.com/profile.php?id=61575021239578&locale=pl_PL" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={socialStyle}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a suppressHydrationWarning href="https://www.instagram.com/grindfix_serwis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={socialStyle}>
                                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                            </a>

                            {/* Telegram */}
                            <a suppressHydrationWarning href="https://t.me/rudicz" target="_blank" rel="noopener noreferrer" aria-label="Telegram" style={socialStyle}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21.95 5.005l-3.306 15.494c-.249 1.103-.896 1.378-1.817.857l-5-3.678-2.414 2.322c-.267.267-.49.49-.1.49l.356-5.06 9.2-8.313c.4-.357-.087-.554-.617-.198L6.054 13.99 1.14 12.465c-1.07-.334-1.087-1.07.224-1.583l20.24-7.802c.89-.324 1.67.218 1.345 1.925z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a suppressHydrationWarning href="https://wa.me/48572456397" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={socialStyle}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.117 1.535 5.845L.057 23.5l5.797-1.517A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.9 9.9 0 0 1-5.031-1.37l-.361-.214-3.44.9.92-3.352-.235-.374A9.861 9.861 0 0 1 2.1 12c0-5.467 4.433-9.9 9.9-9.9s9.9 4.433 9.9 9.9-4.433 9.9-9.9 9.9z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* NAP */}
                    <div>
                        <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Kontakt</h3>
                        <address style={{ fontStyle: "normal", fontSize: "0.9rem", lineHeight: 2, color: "#9ca3af" }}>
                            <strong style={{ color: "#fff", display: "block" }}>{NAP.name}</strong>
                            <span>{NAP.address.street}</span><br />
                            <span>{NAP.address.postalCode} {NAP.address.city}</span><br />
                            <a href={`tel:${NAP.phone}`} style={{ color: "var(--green-light)" }}>{NAP.phoneFormatted}</a><br />
                            <a href={`mailto:${NAP.email}`} style={{ color: "var(--green-light)" }}>{NAP.email}</a>
                        </address>
                        <div style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "#9ca3af" }}>
                            <strong style={{ color: "#d1d5db" }}>Godziny:</strong><br />
                            Pn–Pt: 9:00–18:00<br />
                            Sob: 9:00–15:00
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Usługi</h3>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {SERVICES.map(s => (
                                <li key={s.slug}>
                                    <Link href={`/${s.slug}`} style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                                        onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                        onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                                    >
                                        {s.icon} {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dzielnice */}
                    <div>
                        <h3 style={{ color: "#fff", fontSize: "1rem", fontWeight: 700, marginBottom: "1rem" }}>Obsługiwane Dzielnice</h3>
                        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                            {[
                                { slug: "serwis-rowerowy-mokotow", name: "Mokotów" },
                                { slug: "serwis-rowerowy-ursynow", name: "Ursynów" },
                                { slug: "serwis-rowerowy-wola", name: "Wola" },
                                { slug: "serwis-rowerowy-srodmiescie", name: "Śródmieście" },
                                { slug: "serwis-rowerowy-praga", name: "Praga" },
                            ].map(d => (
                                <li key={d.slug}>
                                    <Link href={`/${d.slug}`} style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none" }}
                                        onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                        onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                                    >
                                        📍 {d.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: "1.25rem" }}>
                            <Link href="/cennik" style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none" }}
                                onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                            >
                                💰 Cennik usług
                            </Link>
                        </div>
                        <div style={{ marginTop: "0.5rem" }}>
                            <Link href="/blog" style={{ color: "#9ca3af", fontSize: "0.875rem", textDecoration: "none" }}
                                onMouseOver={e => (e.currentTarget.style.color = "#bbf7d0")}
                                onMouseOut={e => (e.currentTarget.style.color = "#9ca3af")}
                            >
                                📝 Blog
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div style={{ padding: "2rem 0" }}>
                    <iframe suppressHydrationWarning
                        title="GRINDFIX Serwis Rowerowy Warszawa – mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2445.1792715325196!2d21.0137777!3d52.2037896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a56d2ad72023e9%3A0x6c22ae1b0b663a60!2sGrindFix%20Mobilny%20Serwis%20Rowerowy!5e0!3m2!1sru!2spl!4v1773146950657!5m2!1sru!2spl"
                        width="100%"
                        height="220"
                        style={{ border: "none", borderRadius: "0.75rem", display: "block" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                {/* Bottom */}
                <div style={{
                    borderTop: "1px solid #374151", padding: "1.5rem 0",
                    display: "flex", flexWrap: "wrap", justifyContent: "space-between",
                    alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", color: "#6b7280",
                }}>
                    <span>© {year} {NAP.name}. Wszelkie prawa zastrzeżone.</span>
                    <span>ul. Rowerowa 15/7, 00-950 Warszawa | {NAP.phoneFormatted} | {NAP.email}</span>
                </div>
            </div>
        </footer>
    );
}

const socialStyle: React.CSSProperties = {
    width: 36, height: 36, background: "#374151",
    color: "#d1d5db", borderRadius: "50%",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    fontSize: "0.8rem", fontWeight: 700, textDecoration: "none", transition: "0.2s",
};

// Force HMR

// Force HMR 2
