import { Language } from "@/lib/i18n/config";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Generate WebApplication schema for the Japanese Calendar Tool
 */
export function generateWebApplicationSchema(
  lang: Language,
  baseUrl: string
) {
  const isJapanese = lang === "ja";

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: isJapanese
      ? "和暦・干支・九星 計算ツール"
      : "Japanese Calendar Tool",
    alternateName: isJapanese
      ? "Japanese Calendar Tool"
      : "和暦・干支・九星 計算ツール",
    description: isJapanese
      ? "年月日から西暦・和暦・十干十二支・星座・九星を自動計算するツール。江戸時代からの元号に対応。"
      : "Calculate Japanese era, Sexagenary cycle, zodiac sign, and Nine Star Ki from any date. Supports Edo period eras.",
    url: baseUrl,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: isJapanese ? "JPY" : "USD",
    },
    inLanguage: [lang],
    availableLanguage: ["Japanese", "English"],
    featureList: isJapanese
      ? [
          "和暦計算（慶長～令和）",
          "十干十二支計算",
          "九星気学計算",
          "日めくりカレンダー",
          "六曜・選日表示",
        ]
      : [
          "Japanese Era Calculation (Keicho to Reiwa)",
          "Sexagenary Cycle Calculation",
          "Nine Star Ki Calculation",
          "Daily Calendar",
          "Rokuyo and Senjitsu Display",
        ],
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Japanese Calendar Tool",
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    sameAs: [],
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: BreadcrumbItem[],
  baseUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
