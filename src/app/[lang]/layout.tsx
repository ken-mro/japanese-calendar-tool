import type { Metadata } from "next";
import { Suspense } from "react";
import { Noto_Serif_JP } from "next/font/google";
import "../globals.css";
import { I18nProvider, Language } from "@/lib/i18n/config";
import { ScrollJoystick } from "@/components/ScrollJoystick";
import {
  generateWebApplicationSchema,
  generateOrganizationSchema,
} from "@/lib/seo/schemas";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "暦計算ツール - 和暦・干支(十干十二支)・星座・九星",
    template: "%s | 暦計算ツール",
  },
  description:
    "年月日から西暦・和暦・十干十二支・星座・九星を自動計算。江戸時代からの元号に対応。Calculate Japanese era, Sexagenary cycle, zodiac sign, and Nine Star Ki.",
  applicationName: "Japanese Calendar Tool",
  keywords: [
    "和暦",
    "西暦",
    "変換",
    "干支",
    "十干十二支",
    "九星",
    "星座",
    "六曜",
    "選日",
    "日めくりカレンダー",
    "Japanese era",
    "wareki",
    "Sexagenary cycle",
    "Heavenly Stems",
    "Earthly Branches",
    "Chinese zodiac",
    "Nine Star Ki",
    "Rokuyo",
    "Senjitsu",
  ],
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
    url: baseUrl,
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
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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

  const webAppSchema = generateWebApplicationSchema(lang, baseUrl);
  const orgSchema = generateOrganizationSchema(baseUrl);

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Structured Data - WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webAppSchema),
          }}
        />
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgSchema),
          }}
        />
        {/* Google AdSense */}
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
