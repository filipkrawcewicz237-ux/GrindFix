import { Metadata } from "next";
import { generateMeta } from "@/lib/metadata";
import { PRICING, FAQ_HOME, NAP } from "@/lib/data";
import { getServiceCards } from "@/lib/cms";
import FAQSection from "@/components/ui/FAQSection";
import Testimonials from "@/components/ui/Testimonials";
import ServiceCard from "@/components/ui/ServiceCard";
import ContactForm from "@/components/ui/ContactForm";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 3600;

export const metadata: Metadata = generateMeta({
  title: "Serwis Rowerowy Warszawa | Naprawa i Przegląd – GRINDFIX",
  description:
    "Profesjonalny serwis rowerowy w Warszawie. Naprawa rowerów, przeglądy, serwis elektrycznych i mobilny serwis u klienta. Zarezerwuj wizytę online.",
  path: "/",
});

export default async function HomePage() {
  const services = await getServiceCards();

  return (
    <>
      {/* ======== HERO ======== */}
      <section style={{
        background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #fef9c3 100%)",
        padding: "5rem 0 4rem",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, background: "rgba(22,163,74,0.08)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -100, left: -60, width: 300, height: 300, background: "rgba(250,204,21,0.12)", borderRadius: "50%", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid-2" style={{ gap: "3rem", alignItems: "flex-start" }}>
            <div className="fade-in-up">
              <span className="badge-green" style={{ marginBottom: "1rem", display: "inline-block" }}>
                🏆 Najlepszy serwis rowerowy w Warszawie
              </span>
              <h1 style={{ marginBottom: "1.25rem", color: "var(--gray-900)", fontSize: "clamp(2.2rem,5vw,3.5rem)" }}>
                Serwis Rowerowy<br />
                <span style={{ color: "var(--green-primary)" }}>Warszawa</span> –{" "}
                <span style={{ color: "var(--yellow-hover)", position: "relative" }}>GRINDFIX</span>
              </h1>
              <p style={{ fontSize: "1.15rem", maxWidth: 560, marginBottom: "2rem", color: "var(--gray-700)", lineHeight: 1.75 }}>
                Profesjonalna <strong>naprawa i przegląd rowerów</strong> w Warszawie. Serwisujemy rowery szosowe, MTB, elektryczne i miejskie.
                Oferujemy także <strong>mobilny serwis</strong> – technik przyjedzie pod Twój adres.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}>
                <a href="#kontakt" className="btn-primary" style={{ fontSize: "1.05rem" }}>
                  📅 Zarezerwuj wizytę
                </a>
                <a href={`tel:${NAP.phone}`} className="btn-secondary">
                  📞 {NAP.phoneFormatted}
                </a>
              </div>
              {/* Trust badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                {[
                  ["⭐", "4.9/5", "Ocena Google"],
                  ["✅", "500+", "Zadowolonych klientów"],
                  ["⚡", "1–3 dni", "Czas realizacji"],
                  ["🚐", "Warszawa", "Mobilny serwis"],
                ].map(([icon, val, label]) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "1.3rem" }}>{icon}</span>
                    <div>
                      <strong style={{ fontSize: "1rem", display: "block", lineHeight: 1 }}>{val}</strong>
                      <span style={{ fontSize: "0.75rem", color: "var(--gray-600)" }}>{label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-up" style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "3.25rem" }}>
              <Image
                src="/FOTO/1.jpg"
                alt="Serwis Rowerowy Warszawa"
                width={1920}
                height={1280}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto", maxHeight: "550px", objectFit: "cover", borderRadius: "1.5rem", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======== WHY GRINDFIX ======== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{ marginBottom: "0.25rem" }}><span className="section-label">💡 Dlaczego my?</span></div>
            <h2 className="heading-underline">Dlaczego warto wybrać GRINDFIX?</h2>
            <p style={{ marginTop: "1rem", color: "var(--gray-600)", maxWidth: 620, margin: "1rem auto 0" }}>
              W Warszawie działa wiele serwisów rowerowych, ale GRINDFIX wyróżnia się podejściem do klienta i jakością usług.
            </p>
          </div>
          <div className="grid-4">
            {[
              { icon: "🔧", title: "12+ lat doświadczenia", desc: "Nasi mechanicy serwisowali tysiące rowerów wszystkich marek i typów." },
              { icon: "⚡", title: "Serwis E-Bike", desc: "Certyfikowani specjaliści Bosch, Shimano Steps i Yamaha." },
              { icon: "🚐", title: "Mobilny serwis", desc: "Wyjeżdżamy do klienta na terenie całej Warszawy." },
              { icon: "💰", title: "Przejrzyste ceny", desc: "Podajemy ceny z góry. Żadnych ukrytych kosztów." },
              { icon: "⭕", title: "Budowa kół", desc: "Ręczna budowa kół rowerowych na zamówienie, każdy rozmiar." },
              { icon: "🗓️", title: "Szybki termin", desc: "Proste naprawy realizujemy nawet w ciągu 1-2 godzin." },
              { icon: "🌿", title: "Ekologiczne podejście", desc: "Staramy się naprawiać zamiast wyrzucać. Dbamy o planetę." },
              { icon: "📍", title: "Cała Warszawa", desc: "Mokotów, Ursynów, Śródmieście, Wola, Praga i okolice." },
            ].map(item => (
              <div key={item.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontSize: "0.95rem", marginBottom: "0.4rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--gray-600)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== SERVICES ======== */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">🔧 Usługi</span>
            <h2>Nasze usługi serwisowe</h2>
            <p style={{ marginTop: "0.75rem", color: "var(--gray-600)", maxWidth: 560, margin: "0.75rem auto 0" }}>
              Kompleksowe usługi dla rowerzystów w Warszawie – od prostej naprawy po zaawansowany serwis e-bike.
            </p>
          </div>
          <div className="grid-3" style={{ marginBottom: "2rem" }}>
            {services.map((s) => (
              <ServiceCard key={s.slug} {...s} />
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/cennik" className="btn-outline">💰 Zobacz pełny cennik</Link>
          </div>
        </div>
      </section>

      {/* ======== PRICING PREVIEW ======== */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span className="section-label">💰 Cennik</span>
            <h2>Skrócony cennik usług</h2>
            <p style={{ marginTop: "0.75rem", color: "var(--gray-600)", maxWidth: 560, margin: "0.75rem auto 0" }}>
              Ile kosztuje naprawa roweru w Warszawie? Sprawdź nasze przejrzyste ceny – bez ukrytych opłat.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>Usługa</th>
                  <th className="price-col">Cena</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.slice(0, 10).map((row, i) => (
                  <tr key={i}>
                    <td>{row.service}</td>
                    <td className="price-col">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/cennik" className="btn-primary">📋 Pełny cennik – wszystkie usługi</Link>
          </div>
        </div>
      </section>

      {/* ======== TESTIMONIALS ======== */}
      <Testimonials />

      {/* ======== MOBILNY SERWIS BANNER ======== */}
      <section style={{ background: "var(--green-primary)", padding: "3.5rem 0", color: "#fff" }}>
        <div className="container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "2rem" }}>
          <div>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.4rem,3vw,2rem)", marginBottom: "0.5rem" }}>
              🚐 Mobilny Serwis Rowerowy Warszawa
            </h2>
            <p style={{ color: "#bbf7d0", maxWidth: 500 }}>
              Technik przyjedzie pod Twój adres i naprawi rower na miejscu. Idealne rozwiązanie dla zapracowanych warszawiaków.
            </p>
          </div>
          <Link href="/mobilny-serwis-rowerowy-warszawa" className="btn-secondary" style={{ flexShrink: 0 }}>
            Dowiedz się więcej →
          </Link>
        </div>
      </section>

      {/* ======== SEO TEXT ======== */}
      <section className="section section-gray">
        <div className="container">
          <div className="prose" style={{ maxWidth: 900, margin: "0 auto" }}>
            <h2>Serwis Rowerowy Warszawa – Profesjonalna Naprawa Rowerów</h2>
            <p>
              GRINDFIX to profesjonalny <strong>serwis rowerowy w Warszawie</strong>, działający od ponad 12 lat. Specjalizujemy się
              w kompleksowej naprawie, przeglądach oraz profesjonalnym serwisie rowerów górskich (MTB), szosowych, gravelowych,
              miejskich i elektrycznych. Obsługujemy klientów z całej Warszawy – od Mokotowa, przez Śródmieście, Wolę, aż po Ursynów i Pragę.
            </p>
            <h3>Profesjonalny przegląd roweru w Warszawie</h3>
            <p>
              Regularny <strong>przegląd roweru</strong> to podstawa bezpiecznej jazdy. W GRINDFIX wykonujemy przeglądy sezonowe obejmujące
              kontrolę układu hamulcowego, napędowego, kół, ramy, widelca i wszystkich śrub. Przegląd podstawowy kosztuje od 80 zł, pełny od 120 zł.
              Po przeglądzie otrzymujesz szczegółowy protokół z opisem stanu technicznego roweru i zaleceniami.
            </p>
            <h3>Naprawa rowerów Warszawa – szybko i solidnie</h3>
            <p>
              Zepsuty rower to frustracja, zwłaszcza gdy codziennie dojeżdżasz do pracy. Dlatego nasze <strong>naprawy rowerów</strong> realizujemy
              tak szybko, jak to możliwe. Proste usterki – wymiana dętki, regulacja przerzutek, naprawa hamulców – często jesteśmy w stanie wykonać
              tego samego dnia. Kompleksowe przeglądy i budowę kół planujemy w ciągu 1–3 dni roboczych.
            </p>
            <h3>Serwis rowerów elektrycznych (e-bike) Warszawa</h3>
            <p>
              Rowery elektryczne to nasza specjalność. Pracujemy z systemami napędowymi Bosch, Shimano Steps, Yamaha, Brose i Fazua.
              Posiadamy certyfikowane narzędzia diagnostyczne i aktualną wiedzę o oprogramowaniu wszystkich głównych systemów e-bike.
              Diagnozujemy błędy, aktualizujemy oprogramowanie, serwisujemy baterie i silniki.
            </p>
            <h3>Mobilny serwis rowerowy – technik do Twojego domu</h3>
            <p>
              Nie możesz przywieźć roweru do warsztatu? Skorzystaj z naszego <strong>mobilnego serwisu rowerowego</strong>.
              Technik przyjedzie pod wskazany adres w Warszawie z pełnym wyposażeniem i wykona niezbędne naprawy na miejscu.
              Mobilny serwis dostępny jest na terenie Mokotowa, Ursynowa, Śródmieścia, Woli, Pragi i okolic.
            </p>
            <h3>Budowa kół rowerowych Warszawa</h3>
            <p>
              Szukasz lekkich, trwałych kół dopasowanych do Twojego stylu jazdy? Oferujemy ręczną <strong>budowę kół rowerowych</strong>
              na zamówienie. Używamy najwyższej jakości obręczy, piast i szprych renomowanych producentów. Każde koło jest ręcznie centrowane
              z użyciem profesjonalnych mierników napięcia szprych. Zapraszamy do omówienia specyfikacji.
            </p>
            <h3>Serwis amortyzatorów MTB</h3>
            <p>
              Amortyzatory rowerów górskich (MTB) wymagają regularnego serwisu co 50–100 godzin jazdy lub przynajmniej raz w roku.
              Serwisujemy amortyzatory Fox, RockShox, Manitou, Nine Point Eight i SR Suntour. Usługa obejmuje wymianę oleju, uszczelnień
              i regulację charakterystyki tłumienia.
            </p>
            <h3>Obsługiwane dzielnice Warszawy</h3>
            <p>
              GRINDFIX obsługuje rowerzystów z całej Warszawy: <strong>Mokotów</strong>, <strong>Ursynów</strong>, <strong>Wola</strong>,
              <strong>Śródmieście</strong>, <strong>Praga</strong>, Żoliborz, Bielany, Bemowo, Targówek, Wilanów i inne dzielnice.
              Mobilny serwis dostępny też w gminach ościennych: Konstancin-Jeziorna, Piaseczno, Pruszków.
            </p>
          </div>
        </div>
      </section>

      {/* ======== FAQ ======== */}
      <FAQSection items={FAQ_HOME} />

      {/* ======== CONTACT ======== */}
      <section className="section section-green" id="kontakt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">📍 Kontakt</span>
            <h2>Umów wizytę w GRINDFIX</h2>
            <p style={{ marginTop: "0.75rem", color: "var(--gray-600)", maxWidth: 540, margin: "0.75rem auto 0" }}>
              Wypełnij formularz, a odezwiemy się w ciągu 2–4 godzin. Możesz też zadzwonić lub napisać na e-mail.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: "2.5rem", alignItems: "start" }}>
            {/* Contact info */}
            <div>
              <div className="card" style={{ marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "1rem" }}>📞 Zadzwoń do nas</h3>
                <a href={`tel:${NAP.phone}`} style={{ fontSize: "1.3rem", fontWeight: 800, color: "var(--green-primary)", display: "block", marginBottom: "0.25rem" }}>
                  {NAP.phoneFormatted}
                </a>
                <p style={{ fontSize: "0.85rem", color: "var(--gray-500)" }}>Pn–Pt 9:00–18:00, Sob 9:00–15:00</p>
              </div>
              <div className="card" style={{ marginBottom: "1.25rem" }}>
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>📍 Adres</h3>
                <address style={{ fontStyle: "normal", fontSize: "0.95rem", color: "var(--gray-700)", lineHeight: 1.7 }}>
                  {NAP.name}<br />
                  {NAP.address.street}<br />
                  {NAP.address.postalCode} {NAP.address.city}
                </address>
              </div>
              <div className="card">
                <h3 style={{ fontSize: "1.05rem", marginBottom: "0.5rem" }}>✉️ E-mail</h3>
                <a href={`mailto:${NAP.email}`} style={{ color: "var(--green-primary)", fontWeight: 700 }}>{NAP.email}</a>
              </div>
            </div>
            {/* Form */}
            <div className="card">
              <h3 style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>📋 Formularz rezerwacji</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
