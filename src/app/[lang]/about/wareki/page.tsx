import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "和暦（われき）とは | 暦計算ツール",
    description: "大化から令和まで続く元号（和暦）について解説します。",
  },
  en: {
    title: "About Japanese Era (Wareki) | Japanese Calendar Tool",
    description:
      "Explanation of the Japanese Era system (Wareki), from Taika to Reiwa.",
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
      canonical: `/${lang}/about/wareki`,
      languages: {
        ja: "/ja/about/wareki",
        en: "/en/about/wareki",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/wareki`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
