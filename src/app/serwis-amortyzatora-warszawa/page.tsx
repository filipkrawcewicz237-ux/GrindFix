import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Testimonials from "@/components/ui/Testimonials";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 7ee1612 (update project)

export const metadata: Metadata = generateMeta({
    title: "Serwis Amortyzatora Rowerowego Warszawa | Fox, RockShox | GRINDFIX",
    description:
        "Serwis amortyzatora rowerowego Warszawa ✓ Fox, RockShox, Manitou, SR Suntour ✓ Wymiana oleju i uszczelnień ✓ Regulacja tłumienia. GRINDFIX.",
    path: "/serwis-amortyzatora-warszawa",
});

const FAQ = [
    { q: "Jak często serwisować amortyzator rowerowy?", a: "Zalecamy serwis amortyzatora co 50–100 godzin jazdy lub przynajmniej raz w roku. Widelec MTB jeżdżony regularnie po trudnym terenie wymaga serwisu częściej. Objawy wskazujące na potrzebę serwisu: wycieki oleju, gąbczaste działanie, hałaśliwe pracy, utrata tłumienia." },
    { q: "Ile kosztuje serwis amortyzatora rowerowego?", a: "Serwis podstawowy amortyzatora (dolny – wymiana oleju w koronach) kosztuje od 150 zł + części (uszczelki i olej). Serwis pełny amortyzatora (dolny + górny + tłumik) od 240 zł + części. Tylny amortyzator – od 150 zł za serwis podstawowy." },
    { q: "Jakie marki amortyzatorów serwisujecie?", a: "Serwisujemy amortyzatory Fox (Float, Rhythm, Performance Elite), RockShox (SID, Reba, Pike, Lyrik, ZEB, Yari), Manitou (Mattoc, Dorado, Mezzer), SR Suntour (Aion, Epicon, Edge) i Nine Point Eight." },
    { q: "Co obejmuje serwis amortyzatora?", a: "Serwis podstawowy: czyszczenie, wymiana oleju w koronach, wymiana uszczelnień dolnych lub górnych. Serwis pełny: dodatkowo serwis tłumika (SPV/Damper), wymiana uszczelnień, regulacja ustawień. Efekt: amortyzator pracuje jak nowy, pełna wrażliwość na drobne nierówności." },
    { q: "Jak rozpoznać, że amortyzator wymaga serwisu?", a: "Objawy zużytego amortyzatora: ślady oleju na koronach lub łodydze, gąbczaste lub zbyt twarde działanie, hałasy podczas pracy (stuki, piski), brak możliwości regulacji tłumienia, nierównomierne działanie." },
];

export default function SerwisAmortyzatora() {
    return (
        <>
            <ServiceJsonLd name="Serwis Amortyzatora Rowerowego Warszawa" description="Serwis amortyzatorów MTB Warszawa – Fox, RockShox, Manitou. Wymiana oleju, uszczelnień, regulacja." url="https://grindfix.pl/serwis-amortyzatora-warszawa" />
            <Breadcrumbs items={[{ name: "Serwis Amortyzatora Warszawa", href: "/serwis-amortyzatora-warszawa" }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
                        <div>
                            <span className="section-label">🏔️ Amortyzator</span>
                            <h1 style={{ marginBottom: "1rem" }}>Serwis Amortyzatora Rowerowego Warszawa</h1>
                            <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                                Profesjonalny <strong>serwis amortyzatorów rowerowych</strong> w Warszawie. Fox, RockShox, Manitou, SR Suntour.
                                Wymiana oleju, uszczelnień i regulacja tłumienia – przywróć amortyzatorowi pełną sprawność.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                <a href="#kontakt" className="btn-primary">📅 Umów serwis amortyzatora</a>
                                <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
<<<<<<< HEAD
                            <Image
                              src="/FOTO/serwis-amortyzatora-mtb.webp"
                              alt="Serwis i regulacja amortyzatora rowerowego MTB Warszawa – GRINDFIX"
                              width={728}
                              height={501}
                              priority
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover", borderRadius: "1.5rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
=======
                            <img
                                src="/FOTO/serwis-amortyzatora-mtb.webp"
                                alt="Serwis i regulacja amortyzatora rowerowego MTB Warszawa – GRINDFIX"
                                title="Serwis amortyzatora rowerowego Warszawa"
                                width={728}
                                height={501}
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
                        <h2>Dlaczego serwis amortyzatora jest ważny?</h2>
                        <p>
                            Amortyzator rowerowy (widelec przedni lub tylna jednostka) to jeden z kluczowych elementów roweru górskiego.
                            Odpowiada za komfort jazdy, przyczepność koła do podłoża i bezpieczeństwo. Zaniedbany amortyzator traci wrażliwość
                            na drobne nierówności, przestaje tłumić prawidłowo i może spowodować utratę kontroli nad rowerem.
                        </p>
                        <p>
                            Regularne <strong>serwisowanie amortyzatora</strong> przedłuża jego żywotność o wiele lat i sprawia,
                            że jazda jest przyjemna i bezpieczna. Zaniedbany serwis prowadzi do kosztownych napraw – uszkodzenia łodygi lub korpusu.
                        </p>
                        <h2>Serwisowane marki amortyzatorów</h2>
                        <ul>
                            <li><strong>Fox Racing Shox</strong> – Float 32, 34, 36, 38, 40; DPX2, DPS, DHX, X2</li>
                            <li><strong>RockShox</strong> – SID, Reba, Recon, Pike, Lyrik, ZEB, Yari; Monarch, Revelation, Vivid, Super Deluxe</li>
                            <li><strong>Manitou</strong> – Mattoc, Dorado, Mezzer, Jade</li>
                            <li><strong>SR Suntour</strong> – Aion, Epicon, Edge, Durolux, Zeron</li>
                            <li><strong>Nine Point Eight</strong> – Fall Line (sztyca amortyzowana)</li>
                        </ul>
                        <h2>Zakres serwisu amortyzatora</h2>
                        <p><strong>Serwis podstawowy widelca (Lower Leg Service):</strong></p>
                        <ul>
                            <li>Demontaż koron i łodyg</li>
                            <li>Czyszczenie wszystkich części</li>
                            <li>Wymiana uszczelnień dolnych (dust seal, foam ring)</li>
                            <li>Wymiana oleju w koronach</li>
                            <li>Montaż i kontrola luzów</li>
                        </ul>
                        <p><strong>Serwis pełny widelca (Full Service):</strong></p>
                        <ul>
                            <li>Wszystko co w serwisie podstawowym</li>
                            <li>Serwis tłumika – wymiana oleju tłumika, uszczelnienia</li>
                            <li>Sprawdzenie i regulacja sprężyny powietrznej lub sprężyny stalowej</li>
                            <li>Wymiana wszystkich uszczelnień (komplety serwisowe producenta)</li>
                            <li>Regulacja nawrotki, tłumienia odbicia i kompresji</li>
                        </ul>
                        <h2>Cennik serwisu amortyzatora Warszawa</h2>
                        <ul>
                            <li>Serwis podstawowy widelca (Lower Leg) – od 150 zł + części</li>
                            <li>Serwis pełny widelca (Full Service) – od 240 zł + części</li>
                            <li>Serwis tylnego amortyzatora (basic) – od 150 zł + części</li>
                            <li>Serwis tylnego amortyzatora (full) – od 220 zł + części</li>
                            <li>Regulacja ustawień (bez serwisu) – od 50 zł</li>
                        </ul>
                        <Link href="/cennik">→ Pełny cennik serwisu amortyzatora</Link>
                        <p>Przeczytaj też: <Link href="/blog/serwis-amortyzatora-jak-czesto">Jak często serwisować amortyzator?</Link></p>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Twój amortyzator traci formę? Pomożemy!</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>Profesjonalny serwis Fox, RockShox, Manitou w Warszawie.</p>
                    <a href="#kontakt" className="btn-secondary">📅 Umów serwis amortyzatora</a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Serwis Amortyzatora Warszawa" />

            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis amortyzatora</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
