import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Testimonials from "@/components/ui/Testimonials";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";

export const metadata: Metadata = generateMeta({
    title: "Budowa Kół Rowerowych Warszawa – Ręczna Budowa | GRINDFIX",
    description:
        "Budowa kół rowerowych Warszawa ✓ Ręczna budowa na zamówienie ✓ MTB, szosa, gravel ✓ Profesjonalne centrowanie ✓ Shimano, DT Swiss, Sapim. GRINDFIX.",
    path: "/budowa-kol-rowerowych-warszawa",
});

const FAQ = [
    { q: "Ile kosztuje budowa koła rowerowego w Warszawie?", a: "Koszt budowy koła (bez części) zaczyna się od 180 zł za koło 32H. Cena zależy od liczby szprych, skomplikowania piasty i rodzaju obręczy. Do ceny usługi dolicza się koszt części (obręcz, piastę, szprychy, nypelki) dobieranych do specyfikacji klienta." },
    { q: "Jak długo trwa budowa kół rowerowych?", a: "Standardowo budowa jednego koła zajmuje 2–3 dni robocze (wliczając czas dojścia do prawidłowego napięcia i centrowania). Przy zamówieniu pary kół realizacja wynosi 3–5 dni. O dokładnym terminie informujemy after zaakceptowaniu specyfikacji." },
    { q: "Czy mogę wybrać komponenty (obręcz, piastę, szprychy)?", a: "Tak, współpracujesz z nami przy doborze komponentów. Powiedz nam o swoim stylu jazdy, budżecie i oczekiwaniach (masa, trwałość, wygląd), a dobierzemy optymalne części. Pracujemy z obręczami DT Swiss, Mavic, Stan's NoTubes, piastami Shimano, Hope, DT Swiss, szprychami Sapim i DT Swiss." },
    { q: "Dlaczego ręcznie budowane koła są lepsze od gotowych?", a: "Ręcznie budowane koła pozwalają idealnie dopasować komponenty do potrzeb rowerzysty i roweru. Można wybrać piastę dopasowaną do osi (QR, Thru Axle, Boost), obręcz o odpowiedniej szerokości i wysokości profilu, oraz szprychy o odpowiednich właściwościach. Efekt: koło lżejsze, trwalsze lub mocniejsze – wedle potrzeby." },
    { q: "Czy sznurujecie koła innych producentów / sprowadzone komponenty?", a: "Tak, możemy zbudować koło z dostarczonych przez Ciebie komponentów. Upewnij się jednak, że komponenty są kompatybilne (standard osi, ilość szprych obręczy i piasty)." },
];

export default function BudowaKol() {
    return (
        <>
            <ServiceJsonLd name="Budowa Kół Rowerowych Warszawa" description="Ręczna budowa kół rowerowych na zamówienie – MTB, szosa, gravel. Profesjonalne centrowanie i sznurowanie." url="https://grindfix.pl/budowa-kol-rowerowych-warszawa" />
            <Breadcrumbs items={[{ name: "Budowa Kół Rowerowych Warszawa", href: "/budowa-kol-rowerowych-warszawa" }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
                        <div>
                            <span className="section-label">⭕ Koła</span>
                            <h1 style={{ marginBottom: "1rem" }}>Budowa Kół Rowerowych Warszawa</h1>
                            <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                                Profesjonalna <strong>ręczna budowa kół rowerowych</strong> w Warszawie. Dobieramy komponenty do Twoich potrzeb,
                                budujemy precyzyjnie i z gwarancją. MTB, szosa, gravel, triathlon.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                <a href="#kontakt" className="btn-primary">📅 Zamów koła</a>
                                <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Image
                              src="/FOTO/wheel.jpg"
                              alt="Budowa Kół Rowerowych Warszawa"
                              width={1280}
                              height={1920}
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
                        <h2>Czym jest ręczna budowa kół rowerowych?</h2>
                        <p>
                            Ręczna <strong>budowa kół rowerowych</strong> to proces tworzenia koła rowerowego z indywidualnie dobranych komponentów:
                            obręczy, piasty, szprych i nypelków. W odróżnieniu od gotowych kół fabrycznych, ręcznie budowane koła są dopasowane
                            do konkretnego rowerzysty, jego stylu jazdy i specyfikacji roweru.
                        </p>
                        <h2>Dlaczego warto wybrać ręcznie budowane koła?</h2>
                        <ul>
                            <li><strong>Idealne dopasowanie</strong> – standard osi, szerokość, profil, liczba szprych</li>
                            <li><strong>Wybór jakości</strong> – najlepsze obręcze DT Swiss, Stan's NoTubes, piasty Hope, DT Swiss</li>
                            <li><strong>Trwałość</strong> – szprychy Sapim Laser, CX-Ray lub DT Swiss odporną na zerwanie</li>
                            <li><strong>Masa</strong> – możliwość zoptymalizowania masy pod konkretne zastosowanie</li>
                            <li><strong>Naprawa</strong> – ręcznie budowane koło łatwiej naprawić w terenie lub warsztacie</li>
                        </ul>
                        <h2>Obsługiwane standardy kół</h2>
                        <ul>
                            <li>26&quot;, 27.5&quot; (650B), 29&quot; – MTB</li>
                            <li>700C – szosa, gravel, cyclocross</li>
                            <li>650C – triathlony, rowery niestandardowe</li>
                            <li>Standardy osi: QR (Quick Release), Thru Axle 12mm, 15mm, 20mm, Boost 110/148</li>
                            <li>Tradycyjne (3-cross) i radial (dla szprych przednich)</li>
                            <li>Koła tubeless ready</li>
                        </ul>
                        <h2>Sznurowanie kół rowerowych – jak to robimy?</h2>
                        <p>
                            Sznurowanie (budowa) kół rowerowych w GRINDFIX odbywa się według ścisłej procedury:
                        </p>
                        <ol style={{ marginLeft: "1.5rem", lineHeight: 2, color: "var(--gray-700)" }}>
                            <li>Dobór komponentów do specyfikacji klienta</li>
                            <li>Montaż wstępny i ręczne skręcenie szprych</li>
                            <li>Wstępne centrowanie i wyrównywanie</li>
                            <li>Dobijanie napięcia szprych do wartości docelowej (miernik Park Tool TM-1)</li>
                            <li>Finalne centrowanie z tolerancją bicia bocznego &lt;0.3 mm i osiowego &lt;0.5 mm</li>
                            <li>Stressowanie koła – wyeliminowanie pozostałych naprężeń</li>
                            <li>Kontrola końcowa i protokół budowy</li>
                        </ol>
                        <h2>Cena budowy kół rowerowych Warszawa</h2>
                        <ul>
                            <li>Budowa koła 28–32H (bez ceny części) – od 150 zł / koło</li>
                            <li>Budowa koła 36H (bez ceny części) – od 160 zł / koło</li>
                            <li>Centrowanie istniejącego koła – 40–70 zł</li>
                            <li>Wymiana szprychy (+ centrowanie) – od 25 zł / szprycha</li>
                        </ul>
                        <p>Koszt komponentów (obręcz, piasta, szprychy) zależy od wybranej specyfikacji i wyceniamy indywidualnie.</p>
                        <Link href="/cennik">→ Pełny cennik – serwis kół rowerowych</Link>
                        <p>Przeczytaj też: <Link href="/blog/budowa-kol-rowerowych-poradnik">Budowa kół – co warto wiedzieć?</Link></p>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Zamów swoje koła na miarę!</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>Skontaktuj się z nami i omówmy specyfikację Twoich kół rowerowych.</p>
                    <a href="#kontakt" className="btn-secondary">📅 Skontaktuj się teraz</a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Budowa Kół Rowerowych Warszawa" />

            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Zamów budowę kół</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
