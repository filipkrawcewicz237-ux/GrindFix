"use client";

import Link from "next/link";
import { useState } from "react";
import { SERVICES } from "@/lib/data";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header style={{
            position: "sticky", top: 0, zIndex: 100,
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #e5e7eb",
            boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        }}>
            <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                    <span style={{
                        background: "var(--green-primary)", color: "#fff",
                        fontWeight: 800, fontSize: "1.35rem", padding: "0.25rem 0.7rem",
                        borderRadius: "0.5rem", fontFamily: "var(--font-poppins), sans-serif",
                        letterSpacing: "-0.03em",
                    }}>GRIND</span>
                    <span style={{
                        background: "var(--yellow-accent)", color: "var(--gray-900)",
                        fontWeight: 800, fontSize: "1.35rem", padding: "0.25rem 0.7rem",
                        borderRadius: "0.5rem", fontFamily: "var(--font-poppins), sans-serif",
                        letterSpacing: "-0.03em",
                    }}>FIX</span>
                </Link>

                {/* Desktop Nav */}
                <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
                    <NavLink href="/">Strona Główna</NavLink>
                    <NavDropdown label="Usługi" items={SERVICES} />
                    <NavLink href="/cennik">Cennik</NavLink>
                    <NavLink href="/blog">Blog</NavLink>
                    <NavLink href="/#kontakt">Kontakt</NavLink>
                    <a href="/#kontakt" className="btn-primary" style={{ marginLeft: "0.75rem", padding: "0.6rem 1.4rem", fontSize: "0.9rem" }}>
                        📅 Zarezerwuj wizytę
                    </a>
                </nav>

                {/* Mobile burger */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                    style={{
                        display: "none", background: "none", border: "none",
                        cursor: "pointer", padding: "0.5rem", flexDirection: "column",
                        gap: "5px", alignItems: "center",
                    }}
                    className="mobile-menu-btn"
                >
                    <span style={{ width: 24, height: 2, background: "var(--gray-900)", borderRadius: 2, display: "block", transition: "0.2s" }} />
                    <span style={{ width: 24, height: 2, background: "var(--gray-900)", borderRadius: 2, display: "block", transition: "0.2s" }} />
                    <span style={{ width: 24, height: 2, background: "var(--gray-900)", borderRadius: 2, display: "block", transition: "0.2s" }} />
                </button>
            </div>

            {/* Mobile menu overlay */}
            <div style={{
                position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
                background: "rgba(0,0,0,0.5)", zIndex: 999,
                opacity: open ? 1 : 0, visibility: open ? "visible" : "hidden",
                transition: "opacity 0.3s ease, visibility 0.3s ease",
            }} onClick={() => setOpen(false)} />

            {/* Mobile menu container */}
            <div style={{
                position: "fixed", top: 0, right: 0, width: "85%", maxWidth: "400px", height: "100vh",
                background: "#fff", zIndex: 1000,
                transform: open ? "translateX(0)" : "translateX(100%)",
                transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                display: "flex", flexDirection: "column",
                boxShadow: "-4px 0 24px rgba(0,0,0,0.1)",
                overflowY: "auto",
            }}>
                {/* Mobile menu header */}
                <div style={{ 
                    display: "flex", alignItems: "center", justifyContent: "space-between", 
                    padding: "1.25rem 1.5rem", borderBottom: "1px solid #e5e7eb" 
                }}>
                    <Link href="/" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
                        <span style={{
                            background: "var(--green-primary)", color: "#fff",
                            fontWeight: 800, fontSize: "1.2rem", padding: "0.2rem 0.6rem",
                            borderRadius: "0.5rem", fontFamily: "var(--font-poppins), sans-serif",
                            letterSpacing: "-0.03em",
                        }}>GRIND</span>
                        <span style={{
                            background: "var(--yellow-accent)", color: "var(--gray-900)",
                            fontWeight: 800, fontSize: "1.2rem", padding: "0.2rem 0.6rem",
                            borderRadius: "0.5rem", fontFamily: "var(--font-poppins), sans-serif",
                            letterSpacing: "-0.03em",
                        }}>FIX</span>
                    </Link>
                    <button onClick={() => setOpen(false)} style={{ 
                        border: "none", fontSize: "1.5rem", 
                        cursor: "pointer", color: "var(--gray-900)", 
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "40px", height: "40px", borderRadius: "50%",
                        background: "var(--gray-50)",
                    }}>✕</button>
                </div>

                {/* Mobile menu specific nav content */}
                <div style={{ padding: "0" }}>
                    <MobileNav setOpen={setOpen} />
                </div>
            </div>

            <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
        </header>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} style={{
            color: "var(--gray-700)", fontWeight: 600, fontSize: "0.9rem",
            padding: "0.5rem 0.75rem", borderRadius: "0.5rem",
            textDecoration: "none", transition: "color 0.2s, background 0.2s",
        }}
            onMouseOver={e => { (e.target as HTMLElement).style.color = "var(--green-primary)"; (e.target as HTMLElement).style.background = "#f0fdf4"; }}
            onMouseOut={e => { (e.target as HTMLElement).style.color = "var(--gray-700)"; (e.target as HTMLElement).style.background = "transparent"; }}
        >
            {children}
        </Link>
    );
}

function NavDropdown({ label, items }: { label: string; items: typeof SERVICES }) {
    const [show, setShow] = useState(false);
    return (
        <div style={{ position: "relative" }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
        >
            <button style={{
                color: "var(--gray-700)", fontWeight: 600, fontSize: "0.9rem",
                padding: "0.5rem 0.75rem", borderRadius: "0.5rem", background: show ? "#f0fdf4" : "none",
                border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.25rem",
                transition: "0.2s",
            }}>
                {label} <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>▼</span>
            </button>
            {show && (
                <div style={{
                    position: "absolute", top: "100%", left: 0, background: "#fff",
                    border: "1px solid #e5e7eb", borderRadius: "0.75rem",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.12)", minWidth: "240px",
                    padding: "0.5rem", zIndex: 200,
                }}>
                    {items.map(s => (
                        <Link key={s.slug} href={`/${s.slug}`} style={{
                            display: "flex", alignItems: "center", gap: "0.5rem",
                            padding: "0.6rem 0.75rem", borderRadius: "0.5rem",
                            color: "var(--gray-700)", fontSize: "0.875rem", fontWeight: 500,
                            textDecoration: "none", transition: "0.15s",
                        }}
                            onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = "#f0fdf4"; (e.currentTarget as HTMLElement).style.color = "var(--green-primary)"; }}
                            onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--gray-700)"; }}
                        >
                            <span>{s.icon}</span> {s.label}
                        </Link>
                    ))}
                    <div style={{ borderTop: "1px solid #e5e7eb", margin: "0.5rem 0" }} />
                    <Link href="/cennik" style={{
                        display: "flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.6rem 0.75rem", borderRadius: "0.5rem",
                        color: "var(--green-primary)", fontSize: "0.875rem", fontWeight: 700,
                        textDecoration: "none",
                    }}>💰 Cennik usług</Link>
                </div>
            )}
        </div>
    );
}

function MobileNav({ setOpen }: { setOpen: (v: boolean) => void }) {
    const [servicesOpen, setServicesOpen] = useState(false);

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <nav style={{ display: "flex", flexDirection: "column" }}>
                <Link href="/" onClick={() => setOpen(false)} style={{
                    color: "var(--gray-900)", fontWeight: 600, fontSize: "1.1rem",
                    padding: "1rem 1.5rem", borderBottom: "1px solid #f3f4f6",
                    textDecoration: "none", display: "flex", alignItems: "center", minHeight: "64px"
                }}>Strona Główna</Link>
                
                {/* Services Accordion */}
                <div>
                    <button onClick={() => setServicesOpen(!servicesOpen)} style={{
                        width: "100%", background: "none", border: "none",
                        color: "var(--gray-900)", fontWeight: 600, fontSize: "1.1rem",
                        padding: "1rem 1.5rem", borderBottom: "1px solid #f3f4f6",
                        textAlign: "left", display: "flex", alignItems: "center", justifyContent: "space-between",
                        cursor: "pointer", minHeight: "64px"
                    }}>
                        Usługi 
                        <span style={{ 
                            transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", 
                            transition: "transform 0.3s ease", fontSize: "0.8rem", opacity: 0.6 
                        }}>▼</span>
                    </button>
                    
                    <div style={{
                        maxHeight: servicesOpen ? "500px" : "0", overflow: "hidden",
                        transition: "max-height 0.3s ease", background: "var(--gray-50)",
                    }}>
                        {[
                            { href: "/serwis-rowerowy-warszawa", label: "Serwis Rowerowy" },
                            { href: "/naprawa-rowerow-warszawa", label: "Naprawa" },
                            { href: "/przeglad-roweru-warszawa", label: "Przegląd" },
                            { href: "/serwis-roweru-elektrycznego-warszawa", label: "E-Bike" },
                            { href: "/mobilny-serwis-rowerowy-warszawa", label: "Mobilny Serwis" },
                            { href: "/budowa-kol-rowerowych-warszawa", label: "Budowa Kół" },
                            { href: "/serwis-amortyzatora-warszawa", label: "Serwis Amortyzatora" },
                        ].map(({ href, label }) => (
                            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
                                color: "var(--gray-700)", fontWeight: 500, fontSize: "1rem",
                                padding: "0.875rem 1.5rem 0.875rem 2.5rem", borderBottom: "1px solid #e5e7eb",
                                textDecoration: "none", display: "flex", alignItems: "center", minHeight: "48px"
                            }}>{label}</Link>
                        ))}
                    </div>
                </div>

                {[
                    { href: "/cennik", label: "Cennik" },
                    { href: "/blog", label: "Blog" },
                    { href: "/#kontakt", label: "Kontakt" },
                ].map(({ href, label }) => (
                    <Link key={href} href={href} onClick={() => setOpen(false)} style={{
                        color: "var(--gray-900)", fontWeight: 600, fontSize: "1.1rem",
                        padding: "1rem 1.5rem", borderBottom: "1px solid #f3f4f6",
                        textDecoration: "none", display: "flex", alignItems: "center", minHeight: "64px"
                    }}>{label}</Link>
                ))}
            </nav>

            <div style={{ padding: "1.5rem", marginTop: "auto" }}>
                <a href="/#kontakt" className="btn-primary" style={{ 
                    width: "100%", justifyContent: "center", padding: "1rem", 
                    fontSize: "1.1rem", borderRadius: "0.75rem" 
                }} onClick={() => setOpen(false)}>
                    Zarezerwuj wizytę
                </a>
                
                <a href="tel:+48572456397" style={{ 
                    display: "block", textAlign: "center", marginTop: "1rem",
                    color: "var(--gray-900)", fontWeight: 700, fontSize: "1.2rem",
                    textDecoration: "none"
                }}>
                    +48 572 456 397
                </a>
            </div>
        </div>
    );
}
