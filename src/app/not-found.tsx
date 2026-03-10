import Link from "next/link";

export default function NotFound() {
    return (
        <section style={{ padding: "8rem 0", textAlign: "center" }}>
            <div className="container">
                <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>🔧</div>
                <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", marginBottom: "1rem" }}>404 – Strona nie znaleziona</h1>
                <p style={{ color: "var(--gray-600)", fontSize: "1.1rem", maxWidth: 480, margin: "0 auto 2rem" }}>
                    Ups! Wygląda na to, że ta strona gdzieś pojechała na przejażdżkę. Może zepsuła się przerzutka?
                </p>
                <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                    <Link href="/" className="btn-primary">🏠 Wróć na stronę główną</Link>
                    <Link href="/#kontakt" className="btn-outline">📅 Umów serwis</Link>
                </div>
            </div>
        </section>
    );
}
