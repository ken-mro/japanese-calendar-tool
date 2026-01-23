import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "干支（十干十二支）とは | 暦計算ツール",
    description:
      "干支（えと）は、十干（じっかん）と十二支（じゅうにし）を組み合わせた60通りのサイクルです。今年の干支や、それぞれの意味について解説します。",
  },
  en: {
    title: "About Sexagenary Cycle (Eto) | Japanese Calendar Tool",
    description:
      "The Sexagenary Cycle (Eto) is a 60-year cycle combining Ten Heavenly Stems and Twelve Earthly Branches. Explanation of this year's Eto and meanings.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Language }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = dictionary[lang];

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `/${lang}/about/eto`,
      languages: {
        ja: "/ja/about/eto",
        en: "/en/about/eto",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/eto`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
