import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";

export const metadata: Metadata = generateMeta({
    title: "Serwis Rowerowy Ursynów Warszawa | GRINDFIX",
    description: "Serwis rowerowy Ursynów ✓ Naprawa rowerów, przeglądy, mobilny serwis u klienta ✓ Warszawa Ursynów. GRINDFIX – profesjonalny serwis rowerów.",
    path: "/serwis-rowerowy-ursynow",
});
const FAQ = [
    { q: "Czy GRINDFIX obsługuje Ursynów?", a: "Tak! Obsługujemy rowerzystów z Ursynowa. Możesz skorzystać z mobilnego serwisu – technik przyjedzie pod Twój adres na Ursynowie lub możesz odwiedzić nasz warsztat." },
    { q: "Jakie obszary Ursynowa obsługujecie?", a: "Obsługujemy cały Ursynów: Natolin, Imielin, Kabaty, Stokłosy, Lasek Brzozowy i pozostałe osiedla. Zasięg mobilny obejmuje też Wilanów i Piaseczno." },
    { q: "Czy serwisujecie rowery e-bike na Ursynowie?", a: "Tak, serwis rowerów elektrycznych (Bosch, Shimano Steps, Yamaha) dostępny jest zarówno w warsztacie jak i mobilnie na Ursynowie." },
];
export default function Ursynow() {
    return (
        <>
            <ServiceJsonLd name="Serwis Rowerowy Ursynów" description="Serwis i naprawa rowerów na Ursynowie w Warszawie. Mobilny technik, przeglądy, e-bike." url="https://grindfix.pl/serwis-rowerowy-ursynow" />
            <Breadcrumbs items={[{ name: "Serwis Rowerowy Ursynów", href: "/serwis-rowerowy-ursynow" }]} />
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">📍 Ursynów</span>
                    <h1 style={{ marginBottom: "1rem" }}>Serwis Rowerowy Ursynów – GRINDFIX</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        Profesjonalny <strong>serwis rowerowy na Ursynowie</strong>. Naprawa rowerów, przeglądy techniczne i serwis e-bike.
                        Mobilny technik dotrze do Natolina, Kabat, Stoklłos i całego Ursynowa.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">📅 Umów serwis na Ursynowie</a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Serwis rowerowy na Ursynowie</h2>
                        <p>Ursynów to dzielnica, w której rower jest jednym z najpopularniejszych środków transportu. Dobrze rozwinięta infrastruktura rowerowa, bliskie Lasy Kabackie i spokojne osiedla zachęcają do jazdy przez cały rok. GRINDFIX z chęcią dba o rowery ursynowskich rowerzystów.</p>
                        <h2>Mobilny serwis rowerowy na Ursynowie</h2>
                        <p>Technik GRINDFIX może przyjechać na każde osiedle Ursynowa: Natolin, Imielin, Kabaty, Stokłosy, Lasek Brzozowy. Wystarczy telefon lub formularz – umawiamy termin i przyjeżdżamy.</p>
                        <h2>Naprawa rowerów Ursynów – najczęstsze usługi</h2>
                        <ul>
                            <li>Przebita dętka lub opona – od 30 zł</li>
                            <li>Regulacja hamulców i przerzutek – od 25 zł</li>
                            <li>Przegląd roweru przed sezonem – od 150 zł</li>
                            <li>Serwis e-bike (Przegląd premium) – od 430 zł</li>
                            <li>Centrowanie koła – 50–90 zł</li>
                        </ul>
                        <h2>Inne dzielnice w okolicy</h2>
                        <p>Obsługujemy też: <Link href="/serwis-rowerowy-mokotow">Mokotów</Link>, <Link href="/serwis-rowerowy-wola">Wolę</Link> i Wilanów przez <Link href="/mobilny-serwis-rowerowy-warszawa">mobilny serwis</Link>.</p>
                    </div>
                </div>
            </section>
            <FAQSection items={FAQ} title="FAQ – Serwis Rowerowy Ursynów" />
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis na Ursynowie</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
