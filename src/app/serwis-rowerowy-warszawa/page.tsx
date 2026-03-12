import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { FAQ_HOME, SERVICES, NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Testimonials from "@/components/ui/Testimonials";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";
import Image from "next/image";

export const metadata: Metadata = generateMeta({
    title: "Serwis Rowerowy Warszawa – Kompleksowy Serwis | GRINDFIX",
    description:
        "Profesjonalny serwis rowerowy w Warszawie. Naprawiamy rowery MTB, szosowe, miejskie i elektryczne. Szybki termin, przejrzyste ceny. GRINDFIX Warszawa.",
    path: "/serwis-rowerowy-warszawa",
});

const FAQ = [
    { q: "Ile kosztuje podstawowy serwis roweru w Warszawie?", a: "Podstawowy serwis roweru (regulacja przerzutek, hamulców, centrowanie kół) kosztuje w GRINDFIX od 150 do 230 zł w zależności od stanu roweru i zakresu prac. Pełny serwis z wymianą zużytych elementów wyceniamy indywidualnie." },
    { q: "Jak długo trwa serwis rowerowy?", a: "Proste regulacje i naprawy wykonujemy w ciągu 1–2 godzin. Kompleksowy serwis lub budowa kół zajmuje 1–3 dni robocze. O dokładnym terminie informujemy przy przyjęciu roweru do serwisu." },
    { q: "Czy serwisujecie wszystkie marki rowerów?", a: "Tak. Serwisujemy rowery firm Trek, Giant, Specialized, Cube, Scott, Merida, Kross, Romet, Canyon, Bergamont i wielu innych producentów. Naprawiamy rowery szosowe, górskie (MTB), gravel, miejskie i elektryczne." },
    { q: "Co obejmuje pełny przegląd roweru?", a: "Pełny przegląd obejmuje: kontrolę i regulację hamulców, regulację przerzutek i napędu, centrowanie kół, sprawdzenie napięcia szprych, sprawdzenie steru i suportu, smarowanie wszystkich punktów, kontrolę opon i dętek oraz ocenę stanu ogólnego roweru z protokołem." },
    { q: "Jak umówić rower na serwis?", a: "Możesz umówić się przez formularz na stronie, pisząc na kontakt@grindfix.pl lub dzwoniąc pod +48 572 456 397. Odpowiadamy w ciągu 2–4 godzin." },
];

export default function SerwisRowerowy() {
    return (
        <>
            <ServiceJsonLd name="Serwis Rowerowy Warszawa" description="Kompleksowy serwis rowerowy w Warszawie – naprawa, przegląd, serwis e-bike i budowa kół." url="https://grindfix.pl/serwis-rowerowy-warszawa" />
            <Breadcrumbs items={[{ name: "Serwis Rowerowy Warszawa", href: "/serwis-rowerowy-warszawa" }]} />

            {/* Hero */}
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
                        <div>
                            <span className="section-label">🔧 Usługi</span>
                            <h1 style={{ marginBottom: "1rem" }}>Serwis Rowerowy Warszawa</h1>
                            <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                                Profesjonalny <strong>serwis rowerowy w Warszawie</strong> – naprawiamy, przeglądamy i regulujemy rowery wszystkich marek i typów.
                                Działamy szybko, solidnie i w przejrzystych cenach.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                <a href="#kontakt" className="btn-primary">📅 Zarezerwuj wizytę</a>
                                <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                            <Image
                              src="/FOTO/bike_service.jpg"
                              alt="Serwis Rowerowy Warszawa"
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

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Czym jest profesjonalny serwis rowerowy?</h2>
                        <p>
                            Profesjonalny <strong>serwis rowerowy w Warszawie</strong> to znacznie więcej niż pompowanie kół i smarowanie łańcucha.
                            To kompleksowa opieka nad Twoim rowerem, obejmująca diagnostykę, regulację wszystkich podzespołów, wymianę zużytych elementów
                            i doradztwo w zakresie eksploatacji. W GRINDFIX podchodzimy do każdego roweru indywidualnie, bo wiemy, że dobry serwis
                            to inwestycja w Twoje bezpieczeństwo i komfort jazdy.
                        </p>
                        <p>
                            Nasz <strong>serwis rowerowy</strong> działa w Warszawie od ponad 12 lat. W tym czasie naprawiliśmy i serwisowaliśmy tysiące
                            rowerów – górskich MTB, szosowych, gravelowych, miejskich, składaków, BMX i elektrycznych. Nasi mechanicy przeszli szkolenia
                            u czołowych producentów komponentów rowerowych: Shimano, SRAM, Fox, RockShox i Bosch.
                        </p>
                        <h2>Zakres usług serwisowych GRINDFIX</h2>
                        <p>
                            Oferujemy pełne spektrum usług serwisowych dla rowerzystów w Warszawie:
                        </p>
                        <ul>
                            <li><strong>Przeglądy techniczne</strong> – sezonowe (przedsezonowe i poseason) oraz na żądanie</li>
                            <li><strong>Regulacja napędu</strong> – przerzutki, manetki, linki i pancerze, łańcuch, kaseta, korba, suport</li>
                            <li><strong>Serwis hamulców</strong> – V-brake, cantilever, tarczowe mechaniczne i hydrauliczne, odpowietrzanie</li>
                            <li><strong>Serwis kół</strong> – centrowanie, wymiana szprych, wymiana opon i dętek, tubeless</li>
                            <li><strong>Serwis prowadnicy i kierownicy</strong> – ster, wspornik, chwyty ergonomiczne</li>
                            <li><strong>Serwis amortyzatorów</strong> – widelce i tylne jednostki Fox, RockShox, Manitou, SR Suntour</li>
                            <li><strong>Serwis piasty</strong> – wymiana łożysk, czyszczenie i smarowanie, piasty biegowe</li>
                            <li><strong>Budowa kół</strong> – ręczna budowa z komponentów premium na zamówienie</li>
                            <li><strong>Serwis e-bike</strong> – diagnoza, aktualizacja oprogramowania, serwis silnika</li>
                        </ul>
                        <h2>Jak przebiega serwis rowerowy w GRINDFIX?</h2>
                        <p>
                            Serwis roweru w GRINDFIX przebiega według jasno określonej procedury, dzięki której masz pełną kontrolę nad tym, co robimy z Twoim rowerem:
                        </p>
                        <ol style={{ marginLeft: "1.5rem", color: "var(--gray-700)", lineHeight: 2 }}>
                            <li><strong>Przyjęcie i diagnostyka</strong> – oceniamy stan techniczny roweru i omawiatemy zakres prac</li>
                            <li><strong>Wycena</strong> – podajemy koszt przed przystąpieniem do pracy; żadnych niespodzianek</li>
                            <li><strong>Serwis</strong> – wykonujemy uzgodnione prace z użyciem profesjonalnych narzędzi i części</li>
                            <li><strong>Kontrola jakości</strong> – test jazdy i weryfikacja każdego parametru</li>
                            <li><strong>Odbiór i protokół</strong> – przekazujemy rower z protokołem serwisowym i zaleceniami</li>
                        </ol>
                        <h2>Ceny serwisu rowerowego w Warszawie</h2>
                        <p>
                            Nasze ceny są jednymi z najbardziej konkurencyjnych wśród profesjonalnych <strong>serwisów rowerowych w Warszawie</strong>.
                            Przykładowe ceny:
                        </p>
                        <ul>
                            <li>Regulacja przerzutki – od 50 zł</li>
                            <li>Regulacja hamulców tarczowych – od 50 zł</li>
                            <li>Centrowanie koła – 50–90 zł</li>
                            <li>Przegląd podstawowy – od 150 zł</li>
                            <li>Przegląd pełny – od 230 zł</li>
                            <li>Odpowietrzenie hamulców hydraulicznych – od 100 zł</li>
                        </ul>
                        <Link href="/cennik" style={{ color: "var(--green-primary)", fontWeight: 700 }}>→ Pełny cennik serwisu rowerowego</Link>
                        <h2>Obsługiwane dzielnice Warszawy</h2>
                        <p>
                            Nasz serwis rowerowy obsługuje klientów z całej Warszawy. Szczególnie często korzystają z nas mieszkańcy
                            <Link href="/serwis-rowerowy-mokotow"> Mokotowa</Link>,{" "}
                            <Link href="/serwis-rowerowy-ursynow">Ursynowa</Link>,{" "}
                            <Link href="/serwis-rowerowy-wola">Woli</Link>, Śródmieścia i Pragi.
                            Oferujemy również <Link href="/mobilny-serwis-rowerowy-warszawa">mobilny serwis rowerowy</Link> – technik przyjedzie do Ciebie.
                        </p>
                        <h2>Inne usługi w ofercie GRINDFIX</h2>
                        <p>
                            Oprócz standardowego serwisu rowerowego oferujemy:
                        </p>
                        <ul>
                            <li><Link href="/naprawa-rowerow-warszawa">Naprawa rowerów Warszawa</Link> – awarie, wypadki, usterki</li>
                            <li><Link href="/przeglad-roweru-warszawa">Przegląd roweru Warszawa</Link> – kompleksowy przegląd techniczny</li>
                            <li><Link href="/serwis-roweru-elektrycznego-warszawa">Serwis roweru elektrycznego</Link> – e-bike, pedelec</li>
                            <li><Link href="/mobilny-serwis-rowerowy-warszawa">Mobilny serwis rowerowy</Link> – technik do Twojego domu</li>
                            <li><Link href="/budowa-kol-rowerowych-warszawa">Budowa kół rowerowych</Link> – na zamówienie</li>
                            <li><Link href="/serwis-amortyzatora-warszawa">Serwis amortyzatora</Link> – MTB, enduro, trail</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Gotowy na profesjonalny serwis?</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem", maxWidth: 500, margin: "0 auto 1.75rem" }}>
                        Umów wizytę online lub zadzwoń. Odpowiemy w ciągu 2–4 godzin.
                    </p>
                    <a href="#kontakt" className="btn-secondary">📅 Zarezerwuj wizytę teraz</a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Serwis Rowerowy Warszawa" />

            {/* Contact */}
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów serwis roweru</h2>
                    </div>
                    <div className="card">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}
