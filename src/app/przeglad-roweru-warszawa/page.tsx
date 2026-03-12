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
    title: "Przegląd Roweru Warszawa – Cena od 150 zł | GRINDFIX",
    description:
        "Przegląd roweru Warszawa ✓ Cena od 150 zł ✓ Przegląd przed sezonem ✓ Pełny protokół ✓ Wszystkie typy rowerów. GRINDFIX – umów termin online.",
    path: "/przeglad-roweru-warszawa",
});

const FAQ = [
    { q: "Ile kosztuje przegląd roweru w Warszawie?", a: "Cena przeglądu roweru w GRINDFIX zaczyna się od 150 zł za przegląd podstawowy. Pełny przegląd techniczny kosztuje od 230 zł. Przegląd roweru elektrycznego (e-bike) od 430 zł. Cena obejmuje diagnostykę, regulację i protokół serwisowy." },
    { q: "Kiedy najlepiej zrobić przegląd roweru?", a: "Zalecamy wykonanie przeglądu roweru dwa razy w roku: przed sezonem (marzec–kwiecień) i po sezonie (październik–listopad). Przegląd przed sezonem pozwala bezpiecznie rozpocząć jazdę, a przegląd po sezonie przygotowuje rower do zimowania." },
    { q: "Co zawiera pełny przegląd roweru?", a: "Pełny przegląd obejmuje: regulację hamulców i przerzutek, centrowanie kół i sprawdzenie szprych, kontrolę steru i chwytu kierownicy, smarowanie łańcucha i linek, kontrolę suportu i pedałów, sprawdzenie opon i dętek, oględziny ramy i widelca oraz wydanie protokołu serwisowego." },
    { q: "Czy można umówić przegląd roweru tego samego dnia?", a: "Zależy to od bieżącej dostępności – spróbuj zadzwonić lub napisać do nas. W szczycie sezonu (maj–sierpień) czas oczekiwania może być dłuższy, dlatego polecamy wcześniejszą rezerwację." },
    { q: "Czy wydajecie protokół po przeglądzie?", a: "Tak. Po każdym przeglądzie technicznym wydajemy szczegółowy protokół z oceną stanu każdego podzespołu, wykonanymi czynnościami i zaleceniami na przyszłość." },
];

export default function PrzegladRoweru() {
    return (
        <>
            <ServiceJsonLd name="Przegląd Roweru Warszawa" description="Profesjonalny przegląd roweru przed sezonem i po sezonie. Cena od 150 zł, protokół serwisowy." url="https://grindfix.pl/przeglad-roweru-warszawa" />
            <Breadcrumbs items={[{ name: "Przegląd Roweru Warszawa", href: "/przeglad-roweru-warszawa" }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: "3rem", alignItems: "center" }}>
                        <div>
                            <span className="section-label">🔍 Przegląd</span>
                            <h1 style={{ marginBottom: "1rem" }}>Przegląd Roweru Warszawa</h1>
                            <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                                Profesjonalny <strong>przegląd roweru w Warszawie</strong> – ceny od 150 zł. Sprawdzamy każdy element,
                                wydajemy szczegółowy protokół serwisowy i gwarantujemy Twoje bezpieczeństwo na drodze.
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                                <a href="#kontakt" className="btn-primary">📅 Umów przegląd</a>
                                <a href={`tel:${NAP.phone}`} className="btn-secondary">📞 {NAP.phoneFormatted}</a>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
<<<<<<< HEAD
                            <Image
                              src="/FOTO/bike_looking.jpg"
                              alt="Przegląd Roweru Warszawa"
                              width={2561}
                              height={2567}
                              priority
                              sizes="(max-width: 768px) 100vw, 50vw"
                              style={{ width: "100%", height: "auto", maxHeight: "450px", objectFit: "cover", borderRadius: "1.5rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
=======
                            <img 
                                src="/FOTO/bike_looking.jpg" 
                                alt="Przegląd Roweru Warszawa" 
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
                        <h2>Dlaczego regularny przegląd roweru jest ważny?</h2>
                        <p>
                            Regularny <strong>przegląd roweru</strong> to podstawa bezpiecznej jazdy. Wiele poważnych awarii i wypadków rowerkowych
                            można było uniknąć dzięki profilaktycznemu przeglądowi. Zużyte linki hamulców, poluzowane śruby, przeterminowany olej
                            w amortyzatorze czy pęknięte szprychy to problemy, które mechanik wyłapie na przeglądzie, zanim spowodują wypadek.
                        </p>
                        <p>
                            Poza aspektem bezpieczeństwa, regularny <strong>przegląd techniczny roweru</strong> chroni Twój portfel.
                            Wczesne wykrycie i wymiana zużytego łańcucha zapobiega zniszczeniu kasety i zębatek – części kilkukrotnie droższych.
                            Regulacja hamulców przedłuża życie okładzin i tarcz. Dbałość o napęd to kilka lat dodatkowej żywotności całego zestawu.
                        </p>
                        <h2>Co obejmuje przegląd roweru w GRINDFIX?</h2>
                        <p>Nasz pełny przegląd roweru obejmuje następujące punkty kontrolne:</p>
                        <ul>
                            <li>Układ hamulcowy – luki, luzy, zużycie klocków i tarcz / obody kół</li>
                            <li>Układ napędowy – łańcuch (miernik zużycia), kaseta, suport, mechanizm</li>
                            <li>Przerzutki – regulacja, linki, pancerze, ograniczniki</li>
                            <li>Koła – centrowanie, napięcie szprych, stan obrantu, oś</li>
                            <li>Opony i dętki – zużycie bieżnika, ciśnienie, mikropęknięcia</li>
                            <li>Ster – luzy, łożyska, dokręcenie</li>
                            <li>Piasta – luzy, łożyska</li>
                            <li>Amortyzator (jeśli dotyczy) – skoki, twardość, wycieki oleju</li>
                            <li>Rama i widelec – oględziny na pęknięcia, korozja</li>
                            <li>Siodełko i wspornik – luzy, korozja</li>
                            <li>Smarowanie i czyszczenie – łańcuch, linki, zaciski</li>
                        </ul>
                        <h2>Ile kosztuje przegląd roweru? Cennik 2025</h2>
                        <p>
                            Cena <strong>przeglądu roweru w Warszawie</strong> w GRINDFIX zależy od zakresu:
                        </p>
                        <ul>
                            <li><strong>Przegląd podstawowy</strong> – od 80 zł (regulacja + sprawdzenie)</li>
                            <li><strong>Przegląd pełny</strong> – od 120 zł (pełny zakres + protokół)</li>
                            <li><strong>Przegląd e-bike</strong> – od 150 zł (+ diagnostyka systemu elektrycznego)</li>
                            <li><strong>Przegląd powypadkowy</strong> – od 80 zł (+ ewentualne naprawy)</li>
                        </ul>
                        <p>Ceny nie obejmują kosztu wymienionych części, które wyceniamy osobno.</p>
                        <Link href="/cennik">→ Pełny cennik przeglądów i serwisu</Link>
                        <h2>Przegląd roweru przed sezonem</h2>
                        <p>
                            Przegląd roweru przed sezonem (marzec–kwiecień) to najważniejszy przegląd w roku.
                            Po zimie rower wymaga szczególnej uwagi – rdza na linkach i pancerzach, wyschnięte smary, rozluzowane śruby,
                            zużyte klocki hamulców. Przegląd przedsezonowy zajmuje od 60 do 120 minut i pozwala bezpiecznie wyruszyć w pierwszy wiosenny wyjazd.
                            Przeczytaj też: <Link href="/blog/przeglad-roweru-przed-sezonem">Co sprawdzić przed sezonem?</Link>
                        </p>
                        <h2>Przegląd roweru po sezonie (winteryzacja)</h2>
                        <p>
                            Przegląd po sezonie (październik–listopad) przygotowuje rower do zimowania. Czyścimy, smarujemy,
                            wymieniamy zużyte elementy aby wiosną rower był gotowy do jazdy. Dla rowerzystów jeżdżących przez całą zimę
                            oferujemy specjalny przegląd zimowy uwzględniający środki antykorozyjne i uszczelnienia.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Umów przegląd roweru już dziś</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>Przegląd od 80 zł. Szybki termin, pełny protokół serwisowy.</p>
                    <a href="#kontakt" className="btn-secondary">📅 Zarezerwuj przegląd</a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Przegląd Roweru Warszawa" />

            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów przegląd roweru</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
