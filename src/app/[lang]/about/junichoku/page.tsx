import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "十二直（じゅうにちょく）とは | 暦計算ツール",
    description:
      "建・除・満・平・定・執・破・危・成・納・開・閉の12種類で吉凶を占う十二直について解説します。",
  },
  en: {
    title: "About Junichoku (12 Choku) | Japanese Calendar Tool",
    description:
      "Explanation of Junichoku (Twelve Choku), a method of day divination with 12 indicators like Ken, Jo, Mitsu for fortune telling.",
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
      canonical: `/${lang}/about/junichoku`,
      languages: {
        ja: "/ja/about/junichoku",
        en: "/en/about/junichoku",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/junichoku`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
