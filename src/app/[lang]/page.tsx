import { Metadata } from "next";
import { Suspense } from "react";
import ClientHome from "./ClientHome";

import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "暦計算ツール - 和暦・干支(十干十二支)・星座・九星",
    description:
      "年月日から西暦・和暦・十干十二支・星座・九星を自動計算。江戸時代からの元号に対応。",
  },
  en: {
    title: "Japanese Calendar Tool - Wareki, Eto, Nine Star Ki Calculator",
    description:
      "Calculate Japanese era, Sexagenary cycle, zodiac sign, and Nine Star Ki from any date. Supports Edo period eras.",
  },
};

export async function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = dictionary[lang] || dictionary.ja;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ja: "/ja",
        en: "/en",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}`,
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientHome />
    </Suspense>
  );
}
