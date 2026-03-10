import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { PRICING, NAP } from "@/lib/data";
import FAQSection from "@/components/ui/FAQSection";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";

export const metadata: Metadata = generateMeta({
    title: "Cennik Serwisu Rowerowego Warszawa 2025 | GRINDFIX",
    description:
        "Cennik serwisu rowerowego GRINDFIX Warszawa 2025. Przegląd od 80 zł, naprawa od 20 zł, serwis e-bike od 150 zł. Przejrzyste ceny, bez ukrytych kosztów.",
    path: "/cennik",
});

const FAQ = [
    { q: "Czy wymagacie zaliczki przed naprawą?", a: "Nie pobieramy zaliczek za standardowe naprawy i przeglądy. Płatność następuje po odbiorze roweru. Przy zamówieniu specjalistycznych części może być wymagana zaliczka." },
    { q: "Czy ceny w cenniku są cenami brutto?", a: "Tak, wszystkie ceny podane w cenniku są cenami brutto (z VAT). Jeśli potrzebujesz faktury VAT, poinformuj nas przy umawianiu wizyty." },
    { q: "Czy mogę dostać wycenę przed naprawą?", a: "Oczywiście! Zawsze podajemy orientacyjną wycenę przed przystąpieniem do pracy. W przypadku napraw powypadkowych wycena jest bezpłatna." },
    { q: "Ile kosztuje dojazd mobilnego serwisu?", a: "Koszt dojazdu w granicach Warszawy wynosi od 30 zł w zależności od odległości. Przy zamówieniu usług za powyżej 200 zł dojazd może być bezpłatny – zapytaj przy rezerwacji." },
];

const categories = [...new Set(PRICING.map(r => r.category))];

export default function CennikPage() {
    return (
        <>
            <Breadcrumbs items={[{ name: "Cennik", href: "/cennik" }]} />

            <section style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", padding: "4rem 0 3rem" }}>
                <div className="container">
                    <span className="section-label">💰 Cennik</span>
                    <h1 style={{ marginBottom: "1rem" }}>Cennik Serwisu Rowerowego Warszawa 2025</h1>
                    <p style={{ fontSize: "1.1rem", maxWidth: 640, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                        Przejrzyste ceny serwisu rowerowego w GRINDFIX. <strong>Przegląd roweru 150 zł</strong>,
                        naprawa od 20 zł. Wszystkie ceny brutto, bez ukrytych kosztów. Wycenę zawsze podajemy przed przystąpieniem do pracy.
                    </p>
                    <a href="#kontakt" className="btn-primary">📅 Umów wizytę</a>
                </div>
            </section>

            {/* Pricing per category */}
            <section className="section">
                <div className="container">
                    {categories.map(cat => (
                        <div key={cat} style={{ marginBottom: "2.5rem" }}>
                            <h2 style={{ marginBottom: "0.75rem", fontSize: "1.35rem", color: "var(--green-dark)" }}>{cat}</h2>
                            <div style={{ overflowX: "auto" }}>
                                <table className="pricing-table">
                                    <thead>
                                        <tr>
                                            <th>Usługa</th>
                                            <th className="price-col">Cena</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {PRICING.filter(r => r.category === cat).map((row, i) => (
                                            <tr key={i}>
                                                <td>{row.service}</td>
                                                <td className="price-col">{row.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}

                    {/* Notes */}
                    <div className="card section-green" style={{ marginTop: "2rem" }}>
                        <h3 style={{ marginBottom: "0.75rem" }}>📋 Ważne informacje o cenniku</h3>
                        <ul style={{ color: "var(--gray-700)", lineHeight: 2, fontSize: "0.95rem" }}>
                            <li>Wszystkie ceny są cenami brutto (zawierają VAT).</li>
                            <li>Ceny usług <strong>nie obejmują kosztu części</strong> (np. łańcuch, dętka, linka) – wyceniamy je osobno.</li>
                            <li>Każdą wycenę podajemy przed przystąpieniem do pracy – żadnych niespodzianek.</li>
                            <li>Przy kompleksowych naprawach możliwy rabat – zapytaj przy umawianiu wizyty.</li>
                            <li>Wystawiamy faktury VAT na życzenie.</li>
                        </ul>
                    </div>

                    {/* SEO text */}
                    <div className="prose" style={{ maxWidth: 900, margin: "3rem auto 0" }}>
                        <h2>Ile kosztuje naprawa/przegląd roweru w Warszawie?</h2>
                        <p>
                            Ceny serwisu rowerowego w Warszawie różnią się znacząco w zależności od warsztatu i zakresu usług.
                            W GRINDFIX staramy się utrzymywać ceny na poziomie konkurencyjnym, gwarantując jednocześnie najwyższą jakość.
                            <strong>Przegląd roweru</strong> kosztuje u nas od 150 zł (podstawowy) do 230 zł (pełny z protokołem).
                        </p>
                        <p>
                            <strong>Regulacja przerzutek</strong> to usługa kosztująca od 30–50 zł. Wymiana łańcucha rowerowego, zależnie od modelu łańcucha,
                            to 40 zł robocizny plus koszt łańcucha (30–200 zł w zależności od liczby biegów i producenta).
                            Odpowietrzenie hamulców hydraulicznych to koszt od 100 zł za koło + płyn.
                        </p>
                        <p>
                            Droższe usługi to serwis amortyzatora (od 150 zł za serwis podstawowy) i budowa kół rowerowych (od 180 zł za koło).
                            Serwis e-bike wyceniamy indywidualnie po diagnostyce, przegląd premium kosztuje 430 zł.
                        </p>
                        <p>
                            Przy zamówieniu mobilnego serwisu rowerowego doliczamy koszt dojazdu od 30 zł, zależnie od dzielnicy Warszawy.
                        </p>
                        <h3>Jak zaoszczędzić na serwisie rowerowym?</h3>
                        <p>
                            Najlepsza miara oszczędności to regularne przeglądy. Wykrycie zużytego łańcucha na czas (40 zł wymiany)
                            zapobiega zniszczeniu kasety (100–500 zł). Regularne smarowanie zapobiega korozji i przedłuża
                            żywotność komponentów. Przegląd przed sezonem to inwestycja, która zwraca się wielokrotnie.
                        </p>
                    </div>
                </div>
            </section>

            <section style={{ background: "var(--green-primary)", padding: "3rem 0" }}>
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 style={{ color: "#fff", marginBottom: "1rem" }}>Gotowy na serwis? Umów wizytę!</h2>
                    <p style={{ color: "#bbf7d0", marginBottom: "1.75rem" }}>Odpiszemy w ciągu 2–4 godzin. Możesz też zadzwonić bezpośrednio.</p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                        <a href="#kontakt" className="btn-secondary">📅 Zarezerwuj wizytę</a>
                        <a href={`tel:${NAP.phone}`} style={{ color: "#fff", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1rem" }}>
                            📞 {NAP.phoneFormatted}
                        </a>
                    </div>
                </div>
            </section>

            <FAQSection items={FAQ} title="FAQ – Cennik serwisu rowerowego" />

            <section className="section section-green" id="kontakt">
                <div className="container" style={{ maxWidth: 700 }}>
                    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                        <h2>Umów wizytę</h2>
                    </div>
                    <div className="card"><ContactForm /></div>
                </div>
            </section>
        </>
    );
}
