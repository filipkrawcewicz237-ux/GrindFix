import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyCTA from "@/components/ui/StickyCTA";
import { LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { NAP, SITE_URL } from "@/lib/data";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Serwis Rowerowy Warszawa | Naprawa i Przegląd – GRINDFIX",
    template: "%s | GRINDFIX Warszawa",
  },
  description:
    "Profesjonalny serwis rowerowy w Warszawie. Naprawa rowerów, przeglądy, serwis elektrycznych i mobilny serwis u klienta. Zarezerwuj wizytę online.",
  keywords: [
    "serwis rowerowy Warszawa",
    "naprawa rowerów Warszawa",
    "przegląd roweru Warszawa",
    "mobilny serwis rowerowy Warszawa",
    "serwis roweru elektrycznego Warszawa",
    "budowa kół rowerowych Warszawa",
    "serwis amortyzatora Warszawa",
    "GRINDFIX",
  ],
  authors: [{ name: "GRINDFIX", url: SITE_URL }],
  creator: "GRINDFIX",
  publisher: "GRINDFIX",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: {
    google: "x2ncdl3AHkZ-LMKABE50pB2N8sSk5rJEhtmW7B0-aH0",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: SITE_URL,
    siteName: "GRINDFIX",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#16a34a" />
      </head>
      <body>
        <LocalBusinessJsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

// Force HMR
