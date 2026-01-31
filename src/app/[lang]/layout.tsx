import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Serif_JP } from "next/font/google";
import "../globals.css";
import { I18nProvider, Language } from "@/lib/i18n/config";
import { ScrollJoystick } from "@/components/ScrollJoystick";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "暦計算ツール - 和暦・干支(十干十二支)・星座・九星",
    template: "%s | 暦計算ツール",
  },
  description:
    "年月日から西暦・和暦・十干十二支・星座・九星を自動計算。江戸時代からの元号に対応。Calculate Japanese era, Sexagenary cycle, zodiac sign, and Nine Star Ki.",
  keywords: [
    "和暦",
    "西暦",
    "変換",
    "干支",
    "十干十二支",
    "九星",
    "星座",
    "Japanese era",
    "wareki",
    "Sexagenary cycle",
    "Heavenly Stems",
    "Earthly Branches",
    "Chinese zodiac",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "暦計算ツール - 和暦・干支(十干十二支)・星座・九星",
    description: "年月日から西暦・和暦・十干十二支・星座・九星を自動計算",
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
    siteName: "暦計算ツール",
  },
  twitter: {
    card: "summary_large_image",
    title: "暦計算ツール - 和暦・干支(十干十二支)・星座・九星",
    description: "年月日から西暦・和暦・十干十二支・星座・九星を自動計算",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<unknown>;
}>) {
  const { lang } = (await params) as { lang: Language };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "和暦・干支・九星 計算ツール",
    description:
      "年月日から西暦・和暦・十干十二支・星座・九星を自動計算するツール",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    inLanguage: lang,
  };

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2474320851633699"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${notoSerifJP.variable}`}>
        <Suspense fallback={null}>
          <I18nProvider locale={lang}>
            {children}
            <ScrollJoystick />
          </I18nProvider>
        </Suspense>
      </body>
    </html>
  );
}
