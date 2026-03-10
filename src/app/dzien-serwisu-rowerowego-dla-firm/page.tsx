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
    title: "Dzień Serwisu Rowerowego w Firmie Warszawa – 220 zł / rower | GRINDFIX",
    description:
        "Dzień serwisu rowerowego dla pracowników ✓ 220 zł / rower ✓ Przyjeżdżamy do biura lub magazynu ✓ Przegląd + regulacja + smarowanie ✓ Min. 10 rowerów. GRINDFIX Warszawa.",
    path: "/dzien-serwisu-rowerowego-dla-firm",
});

const FAQ = [
    {
        q: "Ile kosztuje dzień serwisu rowerowego dla pracowników?",
        a: "cena wynosi 220 zł netto za jeden rower. Obejmuje pełny przegląd techniczny, regulację hamulców i przerzutek, smarowanie napędu oraz ocenę stanu z protokołem. Koszt ewentualnych wymian części (dętka, klocki, linki) doliczany jest osobno według cennika i akceptowany przez pracownika lub firmę przed wykonaniem.",
    },
    {
        q: "Jaka jest minimalna liczba rowerów, żeby zamówić dzień serwisowy?",
        a: "Minimalna liczba rowerów to 10 sztuk. Przy mniejszej flocie zapraszamy do skorzystania z indywidualnych terminów w warsztacie lub rozważenia abonamentu rowerowego dla pracowników.",
    },
    {
        q: "Jak długo trwa dzień serwisowy?",
        a: "Jeden mechanik obsługuje średnio 8–12 rowerów dziennie przy pełnym zakresie usług. Przy większych flotach wysyłamy dwóch mechaników, co skraca czas do 1 dnia roboczego nawet dla 20–24 rowerów. Dokładny harmonogram ustalamy po potwierdzeniu liczby rowerów.",
    },
    {
        q: "Czy musimy dostarczyć rowery do was, czy przyjeżdżacie do firmy?",
        a: "Przyjeżdżamy do Was. Potrzebujemy miejsca o wymiarach min. 3×4 m (parking, magazyn, dziedziniec, sala), dostępu do prądu (230V) i ewentualnie ujęcia wody do mycia rowerów. Dojeżdżamy na teren Warszawy i w promieniu 50 km bez dodatkowych kosztów dojazdu.",
    },
    {
        q: "Czy wystawiacie fakturę VAT dla firmy?",
        a: "Tak, wystawiamy faktury VAT 23% na firmę. Możliwe są płatności przelewem 14/30 dni po zrealizowaniu usługi. Dla stałych klientów korporacyjnych oferujemy fakturowanie zbiorcze i rozliczenia miesięczne.",
    },
    {
        q: "Czy możemy połączyć dzień serwisowy z eventami firmowymi lub Bike to Work?",
        a: "Jak najbardziej. Dzień serwisu rowerowego świetnie sprawdza się jako element akcji Bike to Work, firmowego dnia sportu lub inicjatywy wellbeing dla pracowników. Na życzenie przygotowujemy krótką prezentację o bezpiecznej jeździe i podstawowej obsłudze roweru.",
    },
];

export default function DzienSerwisu() {
    return (
        <>
            <ServiceJsonLd
                name="Dzień Serwisu Rowerowego dla Firm Warszawa"
                description="Wyjazdowy serwis rowerowy dla pracowników – przyjeżdżamy do biura, 220 zł za rower, min. 10 rowerów. Przegląd, regulacja, smarowanie z protokołem."
                url="https://grindfix.pl/dzien-serwisu-rowerowego-dla-firm"
            />
            <Breadcrumbs
                items={[
                    { name: "Dzień Serwisu Rowerowego dla Firm", href: "/dzien-serwisu-rowerowego-dla-firm" },
                ]}
            />

            {/* HERO */}
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">🏢 Dla Firm</span>
                    <h1 style={{ marginBottom: "1rem" }}>Dzień Serwisu Rowerowego dla Firm</h1>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            maxWidth: 640,
                            marginBottom: "2rem",
                            color: "var(--gray-700)",
                            lineHeight: 1.75,
                        }}
                    >
                        Przyjeżdżamy do Twojego biura, magazynu lub siedziby firmy i serwisujemy rowery
                        wszystkich pracowników w jednym dniu.{" "}
                        <strong>220 zł za rower</strong> – przegląd, regulacja i smarowanie w pakiecie.
                        Minimum 10 rowerów.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">
                            📅 Zarezerwuj termin dla firmy
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
                        <h2>Na czym polega dzień serwisu rowerowego w firmie?</h2>
                        <p>
                            <strong>Dzień serwisu rowerowego</strong> to usługa wyjazdowa skierowana do firm,
                            które chcą zadbać o rowery swoich pracowników bez konieczności odsyłania ich do
                            warsztatu. Nasz mechanik lub zespół mechaników przyjeżdża w ustalonym terminie
                            bezpośrednio do Ciebie – na parking, dziedziniec, do magazynu lub garażu podziemnego.
                            Każdy pracownik zostawia rower rano i odbiera go naprawiony jeszcze tego samego dnia.
                        </p>
                        <p>
                            To idealne rozwiązanie przy okazji akcji <strong>Bike to Work</strong>, firmowego
                            dnia sportu, inicjatyw wellbeing, Europejskiego Tygodnia Mobilności czy po prostu
                            jako regularny benefit dla zespołu. Firma płaci jedną fakturą, pracownicy korzystają
                            ze sprawnych rowerów – i wszyscy są zadowoleni.
                        </p>

                        <h2>Co zawiera pakiet 220 zł za rower?</h2>
                        <p>
                            Cena 180 zł netto za jeden rower obejmuje pełen zakres usług serwisowych:
                        </p>
                        <ul>
                            <li>
                                <strong>Pełny przegląd techniczny</strong> – ocena stanu wszystkich
                                kluczowych podzespołów
                            </li>
                            <li>
                                <strong>Regulacja hamulców</strong> – sprawdzenie luzów, naciągu linki,
                                ustawienie klocków lub szczęk
                            </li>
                            <li>
                                <strong>Regulacja przerzutek</strong> – przód i tył, ograniczniki, napięcie
                                linki
                            </li>
                            <li>
                                <strong>Smarowanie i czyszczenie napędu</strong> – łańcuch, linki, zaciski
                            </li>
                            <li>
                                <strong>Kontrola kół</strong> – luzy w piastach, bicie boczne, stan szprych
                            </li>
                            <li>
                                <strong>Kontrola opon i ciśnienia</strong> – stan bieżnika, pompowanie,
                                wstępna ocena dętek
                            </li>
                            <li>
                                <strong>Protokół serwisowy</strong> – dla każdego roweru osobno,
                                z rekomendacjami napraw
                            </li>
                        </ul>
                        <p>
                            Koszt wymienianych części (dętka, klocki, linki, łańcuch) doliczany jest osobno
                            i każdorazowo uzgadniany z właścicielem roweru lub osobą kontaktową w firmie
                            przed wykonaniem. Nie robimy nic bez akceptacji.
                        </p>

                        <h2>Jak wygląda organizacja dnia serwisowego krok po kroku?</h2>
                        <ol style={{ marginLeft: "1.5rem", lineHeight: 2, color: "var(--gray-700)" }}>
                            <li>
                                <strong>Kontakt i wstępna wycena</strong> – podajesz przybliżoną liczbę
                                rowerów i preferowany termin
                            </li>
                            <li>
                                <strong>Potwierdzenie i logistyka</strong> – ustalamy godziny, miejsce
                                postoju i listę rowerów do obsługi
                            </li>
                            <li>
                                <strong>Przyjazd mechanika</strong> – przywozimy cały sprzęt, potrzebujemy
                                tylko miejsca i dostępu do prądu
                            </li>
                            <li>
                                <strong>Serwis</strong> – pracownicy zostawiają rowery z karteczką z imieniem,
                                mechanik serwisuje kolejno
                            </li>
                            <li>
                                <strong>Odbiór i protokoły</strong> – każdy pracownik odbiera rower
                                z protokołem serwisowym i listą ewentualnych zaleceń
                            </li>
                            <li>
                                <strong>Faktura zbiorcza</strong> – wystawiamy jedną fakturę VAT dla firmy
                                za całość usługi
                            </li>
                        </ol>

                        <h2>Dla jakich firm jest ta usługa?</h2>
                        <p>
                            Dzień serwisu rowerowego sprawdza się wszędzie tam, gdzie pracownicy dojeżdżają
                            rowerem lub gdzie firma posiada własną flotę: biurowce, kampusy korporacyjne,
                            magazyny logistyczne, centra dystrybucji, uczelnie, instytucje publiczne
                            i urzędy. Usługę realizujemy też dla deweloperów organizujących eventy dla
                            mieszkańców oraz dla organizatorów eventów i festiwali.
                        </p>
                        <p>
                            Jeśli interesuje Cię stała, cykliczna opieka nad flotą rowerową – sprawdź naszą
                            ofertę abonamentową:{" "}
                            <Link href="/abonament-rowerowy-warszawa">
                                Abonament Rowerowy dla Firm – od 220 zł / rower / miesiąc
                            </Link>
                        </p>
                        <p>
                            Przeczytaj też:{" "}
                            <Link href="/mobilny-serwis-rowerowy-warszawa">
                                Mobilny Serwis Rowerowy Warszawa
                            </Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA BAND */}
            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>
                        Zorganizuj dzień serwisowy dla swojego zespołu
                    </h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>
                        220 zł / rower · Przyjeżdżamy do Was · Min. 10 rowerów · Faktura VAT
                    </p>
                    <a href="#kontakt" className="btn-secondary">
                        📅 Zarezerwuj termin dla firmy
                    </a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Dzień Serwisu Rowerowego dla Firm" />

            {/* CONTACT */}
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Zamów dzień serwisowy dla firmy</h2>
                        <p style={{ color: "var(--gray-600)", marginTop: "0.5rem" }}>
                            Podaj liczbę rowerów i preferowany termin – oddzwonimy w ciągu 2 godzin roboczych.
                        </p>
                    </div>
                    <div className="card">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </>
    );
}