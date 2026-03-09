import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "二十四節気（にじゅうしせっき）とは | 暦計算ツール",
    description:
      "二十四節気（にじゅうしせっき）は、太陽の動きをもとに一年を24等分した季節の区分です。立春・春分・夏至・冬至など、日本の季節感を表す言葉として現在も広く使われています。",
  },
  en: {
    title: "About Nijushi Sekki (24 Solar Terms) | Japanese Calendar Tool",
    description:
      "Nijushi Sekki (24 Solar Terms) divides the year into 24 equal parts based on the sun's position. Terms like Risshun (Start of Spring), Shumbun (Vernal Equinox), Geshi (Summer Solstice), and Toji (Winter Solstice) remain widely used in Japan today.",
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
      canonical: `/${lang}/about/nijushi-sekki`,
      languages: {
        ja: "/ja/about/nijushi-sekki",
        en: "/en/about/nijushi-sekki",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/nijushi-sekki`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
