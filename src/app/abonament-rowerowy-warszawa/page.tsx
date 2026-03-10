import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Testimonials from "@/components/ui/Testimonials";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = generateMeta({
    title: "Abonament Rowerowy Warszawa – Pakiet od 180 zł / miesiąc | GRINDFIX",
    description:
        "Abonament rowerowy Warszawa ✓ Od 220 zł / rower / miesiąc ✓ Nieograniczone naprawy ✓ Przeglądy w pakiecie ✓ Dedykowany mechanik. GRINDFIX – umów pakiet online.",
    path: "/abonament-rowerowy-warszawa",
});

const FAQ = [
    {
        q: "Ile kosztuje abonament rowerowy w Warszawie?",
        a: "Abonament rowerowy w GRINDFIX zaczyna się od 180 zł miesięcznie za jeden rower. Cena obejmuje przeglądy okresowe, regulacje, drobne naprawy oraz priorytetowy czas obsługi. Pakiety dla wielu rowerów i firm wyceniamy indywidualnie – cena jednostkowa jest wtedy niższa.",
    },
    {
        q: "Co wchodzi w skład abonamentu rowerowego?",
        a: "Pakiet abonamentowy obejmuje: dwa pełne przeglądy techniczne rocznie, nielimitowane regulacje hamulców i przerzutek, smarowanie i czyszczenie napędu, kontrolę ciśnienia i stanu opon, naprawę dętek oraz drobne naprawy eksploatacyjne. Koszt wymienianych części rozliczany jest osobno według cennika.",
    },
    {
        q: "Czy abonament obejmuje wymianę części?",
        a: "Abonament obejmuje robociznę i materiały eksploatacyjne (smary, olejki, oprawki). Koszt wymienianych części zużywalnych (łańcuch, klocki, dętki) dolicza się osobno, jednak abonenci korzystają ze stałego rabatu 15% na wszystkie części w naszym sklepie.",
    },
    {
        q: "Na jaki okres zawierana jest umowa abonamentowa?",
        a: "Standardowe umowy abonamentowe zawieramy na 12 miesięcy. Dostępny jest też wariant 6-miesięczny w nieco wyższej cenie. Umowę można wypowiedzieć z 30-dniowym wyprzedzeniem po upływie minimalnego okresu – bez kar umownych.",
    },
    {
        q: "Czy abonament można wykupić dla całej rodziny lub kilku rowerów?",
        a: "Tak. Oferujemy pakiety rodzinne (2–4 rowery) oraz pakiety firmowe (5+ rowerów). Im więcej rowerów w pakiecie, tym niższa cena jednostkowa. Dla firm przygotowujemy dedykowane warunki z serwisem wyjazdowym i raportami miesięcznymi.",
    },
    {
        q: "Jak umówić się na serwis w ramach abonamentu?",
        a: "Abonenci mają dostęp do priorytetowej rezerwacji terminów – telefonicznie, przez formularz online lub wiadomość SMS/WhatsApp. Czas oczekiwania dla abonentów jest krótszy niż dla klientów jednorazowych, szczególnie w szczycie sezonu.",
    },
];

export default function AbonamentRowerowy() {
    return (
        <>
            <ServiceJsonLd
                name="Abonament Rowerowy Warszawa"
                description="Pakiet abonamentowy serwisu rowerowego – przeglądy, regulacje i naprawy w miesięcznym abonamencie od 180 zł. Warszawa."
                url="https://grindfix.pl/abonament-rowerowy-warszawa"
            />
            <Breadcrumbs
                items={[{ name: "Abonament Rowerowy Warszawa", href: "/abonament-rowerowy-warszawa" }]}
            />

            {/* HERO */}
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">📦 Abonament</span>
                    <h1 style={{ marginBottom: "1rem" }}>Abonament Rowerowy Warszawa</h1>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            maxWidth: 640,
                            marginBottom: "2rem",
                            color: "var(--gray-700)",
                            lineHeight: 1.75,
                        }}
                    >
                        Kompleksowa opieka nad Twoim rowerem w wygodnym pakiecie miesięcznym.{" "}
                        <strong>Abonament rowerowy od 180 zł / miesiąc</strong> – przeglądy, regulacje i naprawy
                        bez limitu, jeden stały mechanik i zero niespodzianek w budżecie.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">
                            📅 Wybierz pakiet
                        </a>
                        <a href={`tel:${NAP.phone}`} className="btn-secondary">
                            📞 {NAP.phoneFormatted}
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="section">
                <div className="container">
                    <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
                        <h2>Czym jest abonament rowerowy?</h2>
                        <p>
                            <strong>Abonament rowerowy</strong> to stała miesięczna opłata za kompleksową opiekę
                            serwisową nad Twoim rowerem. Zamiast każdorazowo szukać terminu i płacić za każdą
                            wizytę osobno – wybierasz pakiet, masz przypisanego mechanika i korzystasz z
                            priorytetowej obsługi przez cały rok. To rozwiązanie idealne dla regularnych
                            rowerzystów, dojeżdżających do pracy oraz właścicieli drogich rowerów MTB, szosowych
                            lub elektrycznych.
                        </p>

                        <h2>Co wchodzi w skład pakietu abonamentowego?</h2>
                        <p>
                            Każdy abonament GRINDFIX obejmuje pełen zakres usług serwisowych wykonywanych zgodnie
                            z harmonogramem lub na żądanie:
                        </p>
                        <ul>
                            <li>
                                <strong>2 pełne przeglądy techniczne rocznie</strong> – z protokołem serwisowym
                                i oceną stanu wszystkich podzespołów
                            </li>
                            <li>
                                <strong>Nielimitowane regulacje</strong> – hamulce, przerzutki, ster, siodełko
                            </li>
                            <li>
                                <strong>Smarowanie i czyszczenie napędu</strong> – łańcuch, kaseta, zębatki co
                                wizytę
                            </li>
                            <li>
                                <strong>Kontrola i pompowanie opon</strong> – ciśnienie, stan bieżnika, uszczelniacz
                                tubeless
                            </li>
                            <li>
                                <strong>Naprawa dętek i usterek drobnych</strong> – w ramach opłaty abonamentowej
                            </li>
                            <li>
                                <strong>Rabat 15% na części zamienne</strong> – łańcuchy, klocki, dętki, linki
                            </li>
                            <li>
                                <strong>Priorytetowy termin wizyty</strong> – krótszy czas oczekiwania, szczególnie
                                w sezonie
                            </li>
                        </ul>

                        <h2>Cennik abonamentu rowerowego 2025</h2>
                        <p>
                            Ceny pakietów abonamentowych w GRINDFIX na rok 2025:
                        </p>
                        <ul>
                            <li>
                                <strong>Pakiet Solo</strong> – od <strong>180 zł / miesiąc</strong> (1 rower,
                                umowa 12 mies.)
                            </li>
                            <li>
                                <strong>Pakiet Duo</strong> – od <strong>320 zł / miesiąc</strong> (2 rowery,
                                oszczędność 11%)
                            </li>
                            <li>
                                <strong>Pakiet Family</strong> – od <strong>580 zł / miesiąc</strong> (4 rowery,
                                oszczędność 19%)
                            </li>
                            <li>
                                <strong>Pakiet Business</strong> – wycena indywidualna (5+ rowerów, serwis
                                wyjazdowy, raport miesięczny)
                            </li>
                        </ul>
                        <p>
                            Ceny dotyczą rowerów mechanicznych. Dopłata za rower elektryczny (e-bike) wynosi
                            +40 zł / miesiąc.
                        </p>
                        <Link href="/cennik">→ Pełny cennik serwisu i abonamentów</Link>

                        <h2>Dla kogo jest abonament rowerowy?</h2>
                        <p>
                            Abonament rowerowy sprawdza się najlepiej dla osób jeżdżących regularnie –
                            commuters dojeżdżający do pracy, sportowcy trenujący kilka razy w tygodniu oraz
                            właściciele drogich rowerów, którym zależy na utrzymaniu gwarancji i wysokiej
                            wartości sprzętu. Abonament to też idealne rozwiązanie dla firm posiadających
                            rowery służbowe lub kurierskie – zamiast rozliczać każdą naprawę osobno, firma
                            płaci stałą, przewidywalną kwotę miesięczną.
                        </p>

                        <h2>Abonament vs. jednorazowy serwis – co się bardziej opłaca?</h2>
                        <p>
                            Przy regularnej jeździe (min. 3–4 razy w tygodniu) abonament jest tańszy już po
                            pierwszych dwóch–trzech wizytach serwisowych. Rowerzysta korzystający z serwisu
                            jednorazowego płaci za każdą regulację z osobna (40–80 zł), za przegląd (120 zł)
                            i za każdą naprawę. W abonamencie wszystkie te usługi są wliczone w stałą opłatę,
                            a do tego korzystasz ze zniżki na części i masz pewność, że Twój rower jest zawsze
                            w doskonałym stanie technicznym.
                        </p>
                        <p>
                            Przeczytaj też:{" "}
                            <Link href="/przeglad-roweru-warszawa">
                                Przegląd roweru Warszawa – ceny i zakres
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA BAND */}
            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
                        Zadbaj o rower przez cały rok za stałą cenę
                    </h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>
                        Abonament od 180 zł / miesiąc. Bez niespodzianek, bez kolejek, z pełnym protokołem.
                    </p>
                    <a href="#kontakt" className="btn-secondary">
                        📅 Wybierz pakiet abonamentowy
                    </a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Abonament Rowerowy Warszawa" />

            {/* CONTACT */}
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Zamów abonament rowerowy</h2>
                    </div>
                    <div className="card">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}