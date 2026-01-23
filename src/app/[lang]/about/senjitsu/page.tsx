import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "選日（せんじつ）とは | 暦計算ツール",
    description:
      "一粒万倍日（いちりゅうまんばいび）や天赦日（てんしゃにち）、不成就日などの選日について解説します。",
  },
  en: {
    title: "About Senjitsu (Selected Days) | Japanese Calendar Tool",
    description:
      "Explanation of selected auspicious and inauspicious days like Ichiryumanbai-bi (One Grain Ten Thousand Times Day) and Tensha-nichi (Heavenly Forgiveness Day).",
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
      canonical: `/${lang}/about/senjitsu`,
      languages: {
        ja: "/ja/about/senjitsu",
        en: "/en/about/senjitsu",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/senjitsu`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
