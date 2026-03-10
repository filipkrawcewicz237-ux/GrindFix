import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = generateMeta({
    title: "Serwis Rowerowy Śródmieście Warszawa | GRINDFIX",
    description: "Serwis rowerowy Śródmieście ✓ Naprawa rowerów, przeglądy, serwis e-bike ✓ Mobilny technik ✓ Warszawa Śródmieście. GRINDFIX – profesjonalny serwis rowerów.",
    path: "/serwis-rowerowy-srodmiescie",
});
const FAQ = [
    { q: "Czy GRINDFIX obsługuje rowerzystów ze Śródmieścia?", a: "Tak! Obsługujemy rowerzystów ze Śródmieścia i okolic. Oferujemy mobilny serwis – technik przyjedzie pod Twój adres domowy lub biurowy. Możesz też przywieźć rower do naszego warsztatu." },
    { q: "Jak umówić serwis w Śródmieściu?", a: "Zadzwoń pod +48 572 456 397 lub skorzystaj z formularza kontaktowego. Odpiszemy w ciągu 2–4 godzin i ustalimy termin dla Ciebie." },
    { q: "Czy serwisujecie rowery służbowe w centrum?", a: "Tak! Jeśli firma posiada flotę rowerów, oferujemy grupowy serwis z preferencyjnymi cenami. Skontaktuj się z nami po wycenę dla firmy." },
];
export default function Srodmiescie() {
    return (
        <>
            <ServiceJsonLd name="Serwis Rowerowy Śródmieście" description="Serwis i naprawa rowerów w Śródmieściu w Warszawie. Mobilny technik, e-bike, przeglądy." url="https://grindfix.pl/serwis-rowerowy-srodmiescie" />
            <Breadcrumbs items={[{ name: "Serwis Rowerowy Śródmieście", href: "/serwis-rowerowy-srodmiescie" }]} />
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
                        <div>
                            <span className="section-label">📍 Śródmieście</span>
                            <h1 style={{ marginBottom: "1rem" }}>Serwis Rowerowy Śródmieście – GRINDFIX</h1>
                            <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                                Profesjonalny <strong>serwis rowerowy w Śródmieściu</strong> w Warszawie. Naprawa rowerów, przeglądy i mobilny serwis.
                                Docieramy w okolice Pałacu Kultury, na Nowy Świat, Powiśle, Muranów i w całe centrum.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                <a href="#kontakt" className="btn-primary">📅 Umów serwis w Śródmieściu</a>
                                <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Image
                              src="/FOTO/bike_service.jpg"
                              alt="Serwis Rowerowy Śródmieście"
                              width={1920}
                              height={1440}
                              priority
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover", borderRadius: "1.5rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Rowerzyści ze Śródmieścia – jesteśmy dla Was!</h2>
                        <p>Śródmieście to samo serce Warszawy z rozbudowaną infrastrukturą dla cyklistów. Biurowce, pełne ścieżek rowerowych ulice i bulwary wiślane sprawiają, że to idealne miejsce dla dwóch kółek. GRINDFIX z przyjemnością zajmuje się rowerami mieszkańców centrum i pracowników tutejszych firm.</p>
                        <h2>Mobilny serwis rowerowy w Centrum</h2>
                        <p>Nasz technik GRINDFIX może dotrzeć do każdej części Śródmieścia: Powiśle, Nowe Miasto, Stare Miasto, Śródmieście Północne i Południowe. Mobilny serwis to niesamowita wygoda dla osób zapracowanych – my dojeżdżamy na miejsce, by uniknąć trudności transportowych w zgiełku miasta.</p>
                        <h2>Usługi serwisowe w Śródmieściu</h2>
                        <ul>
                            <li>Wymiana dętki – od 30 zł</li>
                            <li>Regulacja przerzutek i hamulców – od 30 zł</li>
                            <li>Przegląd roweru – od 150 zł</li>
                            <li>Serwis e-bike (Przegląd premium) – od 430 zł</li>
                            <li>Mobilny dojazd do Centrum – od 40 zł</li>
                        </ul>
                        <h2>Inne obsługiwane dzielnice</h2>
                        <p>Serwisujemy również: <Link href="/serwis-rowerowy-wola">Wolę</Link>, <Link href="/serwis-rowerowy-mokotow">Mokotów</Link>, <Link href="/serwis-rowerowy-praga">Pragę</Link> i <Link href="/mobilny-serwis-rowerowy-warszawa">całą Warszawę mobilnie</Link>.</p>
                    </div>
                </div>
            </section>
            <FAQSection items={FAQ} title="FAQ – Serwis Rowerowy Śródmieście" />
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis w Śródmieściu</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
