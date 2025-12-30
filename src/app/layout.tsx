import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n/config";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "和暦・干支・九星 計算ツール | Japanese Calendar Tool",
  description:
    "生年月日から西暦・和暦・十干十二支・星座・九星を自動計算。江戸時代からの元号に対応。Calculate Japanese era, Chinese zodiac, zodiac sign, and Nine Star Ki from your birthdate.",
  keywords:
    "和暦,西暦,変換,干支,十干十二支,九星,星座,Japanese era,wareki,Chinese zodiac",
  openGraph: {
    title: "和暦・干支・九星 計算ツール",
    description: "生年月日から西暦・和暦・十干十二支・星座・九星を自動計算",
    type: "website",
    locale: "ja_JP",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "和暦・干支・九星 計算ツール",
    description: "生年月日から西暦・和暦・十干十二支・星座・九星を自動計算",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "和暦・干支・九星 計算ツール",
              description:
                "生年月日から西暦・和暦・十干十二支・星座・九星を自動計算するツール",
              applicationCategory: "UtilityApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "JPY",
              },
            }),
          }}
        />
      </head>
      <body className={`${notoSerifJP.variable}`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
