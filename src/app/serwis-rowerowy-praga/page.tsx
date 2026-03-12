import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 7ee1612 (update project)

export const metadata: Metadata = generateMeta({
    title: "Serwis Rowerowy Praga Warszawa | GRINDFIX",
    description: "Serwis rowerowy Praga ✓ Naprawa rowerów, przeglądy, serwis e-bike ✓ Mobilny technik ✓ Warszawa Praga. GRINDFIX – profesjonalny serwis rowerów.",
    path: "/serwis-rowerowy-praga",
});
const FAQ = [
    { q: "Czy GRINDFIX obsługuje rowerzystów na Pradze?", a: "Tak! Obsługujemy rowerzystów na Pradze-Północ, Pradze-Południe i okolicznych rejonach. Oferujemy mobilny serwis – przyjedziemy prosto do Ciebie." },
    { q: "Jak umówić serwis domowy na Pradze?", a: "Zadzwoń pod +48 572 456 397 lub skorzystaj z formularza kontaktowego podając adres docelowy. Nasz mechanik przyjedzie we wskazanym czasie." },
    { q: "Czy serwisujecie zarówno e-bike jak i klasyczne rowery na Pradze?", a: "Pewnie! Mamy certyfikowane narzędzia oraz części zamienne do wszelakich typów rowerów, w tym zawieszeń amortyzowanych i e-bike." },
];
export default function Praga() {
    return (
        <>
            <ServiceJsonLd name="Serwis Rowerowy Praga" description="Serwis i naprawa rowerów na Pradze w Warszawie. Mobilny technik, e-bike, przeglądy." url="https://grindfix.pl/serwis-rowerowy-praga" />
            <Breadcrumbs items={[{ name: "Serwis Rowerowy Praga", href: "/serwis-rowerowy-praga" }]} />
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
                        <div>
                            <span className="section-label">📍 Praga</span>
                            <h1 style={{ marginBottom: "1rem" }}>Serwis Rowerowy Praga – GRINDFIX</h1>
                            <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                                Profesjonalny <strong>serwis rowerowy na prawym brzegu Wisły</strong>. Naprawa rowerów, przeglądy i mobilny serwis dla Pragi Północ i Pragi Południe.
                                Odwiedzamy Rondo Wiatraczna, Saską Kępę, Gocław, Kamionek, Szmulki i inne.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                <a href="#kontakt" className="btn-primary">📅 Umów serwis na Pradze</a>
                                <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
<<<<<<< HEAD
                            <Image
                              src="/FOTO/bike_service.jpg"
                              alt="Serwis Rowerowy Praga"
                              width={1920}
                              height={1440}
                              priority
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover", borderRadius: "1.5rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
=======
                            <img
                                src="/FOTO/bike_service.jpg"
                                alt="Serwis Rowerowy Praga"
                                style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover", borderRadius: "1.5rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
>>>>>>> 7ee1612 (update project)
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Rowerzyści z Pragi – sprawdzona opcja naprawy</h2>
                        <p>Zarówno rozległa Praga Południe, jak i klimatyczna Praga Północ oferują wspaniałe tereny rekreacyjne dla rowerzystów. Osobom z brakiem czasu lub bez możliwości transportowych proponujemy w pełni mobilny serwis, podczas gdy reszta może oddać rowery również stacjonarnie.</p>
                        <h2>Mobilny serwis rowerowy dla Pragi Północ i Południe</h2>
                        <p>Technik GRINDFIX dojeżdża w mgnieniu oka na Gocław, Grochów, Kamionek czy Saską Kępę. Zajmuje się również Targówkiem czy Białołęką po wcześniejszym uzgodnieniu. Szybko załatwiamy pomniejsze usterki w postaci pękniętej dętki czy rozregulowanych przerzutek pod adresem Twojego zamieszkania!</p>
                        <h2>Usługi serwisowe na Pradze</h2>
                        <ul>
                            <li>Wymiana dętki – od 30 zł</li>
                            <li>Regulacja przerzutek i hamulców – od 30 zł</li>
                            <li>Przegląd roweru – od 150 zł</li>
                            <li>Serwis e-bike (Przegląd premium) – od 430 zł</li>
                            <li>Mobilny dojazd na Pragę – od 40 zł</li>
                        </ul>
                        <h2>Inne obsługiwane dzielnice</h2>
                        <p>Działamy również w: <Link href="/serwis-rowerowy-srodmiescie">Śródmieściu</Link>, <Link href="/serwis-rowerowy-ursynow">Ursynowie</Link> oraz oferujemy <Link href="/mobilny-serwis-rowerowy-warszawa">mobilny serwis w okolicach</Link>.</p>
                    </div>
                </div>
            </section>
            <FAQSection items={FAQ} title="FAQ – Serwis Rowerowy Praga" />
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis na Pradze</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
