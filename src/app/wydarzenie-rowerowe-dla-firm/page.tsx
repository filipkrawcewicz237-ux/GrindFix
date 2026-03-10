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
    title: "Wydarzenie Rowerowe dla Firm Warszawa – 220 zł / rower | GRINDFIX",
    description:
        "Wydarzenie rowerowe dla firm Warszawa ✓ 220 zł / rower ✓ Przyjeżdżamy do biura lub magazynu ✓ Przegląd + regulacja + smarowanie + wymiana dętki ✓ Bez limitu rowerów. GRINDFIX.",
    path: "/wydarzenie-rowerowe-dla-firm",
});

const FAQ = [
    {
        q: "Ile kosztuje wydarzenie rowerowe dla firm?",
        a: "cena wynosi 220 zł netto za jeden rower. W pakiecie: pełny przegląd techniczny, regulacja hamulców i przerzutek, smarowanie napędu oraz wymiana dętki (jeśli jest potrzebna). Koszt dętki jako części doliczany jest osobno i każdorazowo uzgadniany z właścicielem roweru przed wymianą.",
    },
    {
        q: "Czy jest minimalna liczba rowerów wymagana do zamówienia wydarzenia?",
        a: "Nie ma minimalnego progu – możemy obsłużyć nawet jeden rower na miejscu u klienta. Im więcej rowerów, tym lepiej zoptymalizujemy czas i harmonogram wizyty. Dla bardzo dużych grup (50+ rowerów) wysyłamy kilku mechaników równolegle.",
    },
    {
        q: "Co dokładnie wchodzi w pakiet 220 zł za rower?",
        a: "Pakiet obejmuje: pełny przegląd techniczny z protokołem, regulację hamulców (tarczowych i v-brake), regulację przerzutek (przód i tył), smarowanie łańcucha i linek oraz wymianę dętki jeśli zajdzie potrzeba. Koszt samej dętki jako produktu doliczany jest osobno – robocizna wymiany jest już wliczona w pakiet.",
    },
    {
        q: "Jak długo trwa wizyta serwisowa?",
        a: "Jeden mechanik obsługuje średnio 8–12 rowerów dziennie przy pełnym zakresie usług. Przy większej liczbie rowerów wysyłamy dwóch lub więcej mechaników, aby zmieścić się w jednym dniu roboczym. Dokładny harmonogram ustalamy po potwierdzeniu liczby rowerów.",
    },
    {
        q: "Czy wystawiacie fakturę VAT dla firmy?",
        a: "Tak, wystawiamy faktury VAT 23% na firmę. Możliwe są płatności przelewem z terminem 14 lub 30 dni po realizacji usługi. Dla stałych klientów korporacyjnych oferujemy fakturowanie zbiorcze i rozliczenia miesięczne.",
    },
    {
        q: "Czy wydarzenie rowerowe można połączyć z Bike to Work lub dniem sportu?",
        a: "Oczywiście. Wydarzenie rowerowe świetnie wpisuje się w akcję Bike to Work, firmowy dzień sportu, inicjatywy wellbeing lub Europejski Tydzień Mobilności. Na życzenie przygotowujemy krótką prezentację dla pracowników o bezpiecznej jeździe i podstawowej obsłudze roweru.",
    },
];

export default function WydarzenieRoweroweDlaFirm() {
    return (
        <>
            <ServiceJsonLd
                name="Wydarzenie Rowerowe dla Firm Warszawa"
                description="Wyjazdowe wydarzenie rowerowe dla pracowników – przyjeżdżamy do biura, 220 zł za rower, bez limitu. Przegląd, regulacja, smarowanie, wymiana dętki z protokołem."
                url="https://grindfix.pl/wydarzenie-rowerowe-dla-firm"
            />
            <Breadcrumbs
                items={[
                    { name: "Wydarzenie Rowerowe dla Firm", href: "/wydarzenie-rowerowe-dla-firm" },
                ]}
            />

            {/* HERO */}
            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">🏢 Dla Firm</span>
                    <h1 style={{ marginBottom: "1rem" }}>Wydarzenie Rowerowe dla Firm</h1>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            maxWidth: 640,
                            marginBottom: "2rem",
                            color: "var(--gray-700)",
                            lineHeight: 1.75,
                        }}
                    >
                        Przyjeżdżamy do Twojego biura lub siedziby firmy i serwisujemy rowery
                        pracowników w jednym dniu.{" "}
                        <strong>220 zł za rower</strong> – przegląd, regulacja hamulców i przerzutek,
                        smarowanie napędu oraz wymiana dętki w pakiecie. Bez minimalnej liczby rowerów.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                        <a href="#kontakt" className="btn-primary">
                            📅 Zarezerwuj wydarzenie
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
                        <h2>Czym jest wydarzenie rowerowe dla firm?</h2>
                        <p>
                            <strong>Wydarzenie rowerowe dla firm</strong> to usługa wyjazdowa, w ramach
                            której nasz mechanik lub zespół przyjeżdża bezpośrednio do siedziby Twojej
                            firmy – na parking, dziedziniec, do magazynu lub garażu podziemnego – i
                            serwisuje rowery pracowników na miejscu. Każdy pracownik zostawia rower rano
                            i odbiera go naprawionego jeszcze tego samego dnia wraz z protokołem serwisowym.
                        </p>
                        <p>
                            To doskonały pomysł na benefit pracowniczy, element akcji{" "}
                            <strong>Bike to Work</strong>, firmowego dnia sportu lub inicjatywy wellbeing.
                            Firma płaci jedną fakturą VAT, pracownicy zyskują sprawne i bezpieczne rowery –
                            bez konieczności samodzielnego umawiania się w warsztacie.
                        </p>

                        <h2>Co zawiera pakiet 220 zł za rower?</h2>
                        <p>
                            W cenie 220 zł netto za rower realizujemy pełen zakres usług serwisowych:
                        </p>
                        <ul>
                            <li>
                                <strong>Pełny przegląd techniczny</strong> – ocena stanu ramy, widelca,
                                napędu, kół, sterownicówki i podzespołów z wydaniem protokołu serwisowego
                            </li>
                            <li>
                                <strong>Regulacja hamulców</strong> – naciąg linek, ustawienie klocków
                                lub szczęk, sprawdzenie tarcz (hamulce tarczowe i v-brake)
                            </li>
                            <li>
                                <strong>Regulacja przerzutek</strong> – przednia i tylna, ograniczniki,
                                naciąg linki, jakość zmiany biegów
                            </li>
                            <li>
                                <strong>Smarowanie napędu</strong> – łańcuch, linki, pancerze, zaciski
                                i punkty ruchome
                            </li>
                            <li>
                                <strong>Wymiana dętki</strong> – robocizna wymiany wliczona w pakiet;
                                koszt samej dętki jako produktu doliczany osobno po akceptacji
                            </li>
                        </ul>
                        <p>
                            Nic nie robimy bez wiedzy właściciela roweru. Przed każdą wymianą części
                            informujemy pracownika lub wskazaną osobę kontaktową w firmie i czekamy
                            na akceptację.
                        </p>

                        <h2>Jak wygląda organizacja wydarzenia krok po kroku?</h2>
                        <ol style={{ marginLeft: "1.5rem", lineHeight: 2, color: "var(--gray-700)" }}>
                            <li>
                                <strong>Kontakt i wycena</strong> – podajesz przybliżoną liczbę rowerów
                                i preferowany termin, my potwierdzamy dostępność i wysyłamy ofertę
                            </li>
                            <li>
                                <strong>Potwierdzenie logistyki</strong> – ustalamy godziny, miejsce
                                postoju warsztatu mobilnego i sposób komunikacji z pracownikami
                            </li>
                            <li>
                                <strong>Przyjazd mechanika</strong> – przywozimy pełne wyposażenie
                                mobilnego warsztatu; potrzebujemy miejsca i dostępu do prądu (230V)
                            </li>
                            <li>
                                <strong>Serwis</strong> – pracownicy zostawiają rowery z karteczką
                                z imieniem i numerem telefonu, mechanik serwisuje kolejno
                            </li>
                            <li>
                                <strong>Odbiór i protokoły</strong> – każdy pracownik odbiera rower
                                z protokołem serwisowym i listą ewentualnych zaleceń na przyszłość
                            </li>
                            <li>
                                <strong>Faktura zbiorcza</strong> – wystawiamy jedną fakturę VAT
                                na firmę za całość zrealizowanej usługi
                            </li>
                        </ol>

                        <h2>Dla jakich firm organizujemy wydarzenia rowerowe?</h2>
                        <p>
                            Usługę kierujemy do każdej firmy niezależnie od liczby rowerów – biurowce,
                            kampusy korporacyjne, magazyny logistyczne, centra dystrybucji, uczelnie,
                            instytucje publiczne i urzędy. Realizujemy też wydarzenia dla deweloperów,
                            organizatorów festiwali oraz w ramach programów CSR i inicjatyw proekologicznych.
                        </p>
                        <p>
                            Jeśli interesuje Cię stała, cykliczna opieka nad flotą rowerową, sprawdź
                            naszą ofertę:{" "}
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
                        Zorganizuj wydarzenie rowerowe dla swojego zespołu
                    </h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>
                        220 zł / rower · Przyjeżdżamy do Was · Bez limitu rowerów · Faktura VAT
                    </p>
                    <a href="#kontakt" className="btn-secondary">
                        📅 Zarezerwuj termin dla firmy
                    </a>
                </div>
            </section>

            <Testimonials />
            <FAQSection items={FAQ} title="FAQ – Wydarzenie Rowerowe dla Firm Warszawa" />

            {/* CONTACT */}
            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Zarezerwuj wydarzenie rowerowe</h2>
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