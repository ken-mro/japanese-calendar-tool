import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "九星（きゅうせい）とは | 暦計算ツール",
    description:
      "九星気学（きゅうせいきがく）は、生年月日から割り出される「九星」を用いて運勢や相性を占います。一白水星から九紫火星までの9つの星について解説します。",
  },
  en: {
    title: "About Nine Star Ki | Japanese Calendar Tool",
    description:
      "Nine Star Ki astrology determines fortune and compatibility using nine stars based on birth date. Explanation of the 9 stars from 1 White Water to 9 Purple Fire.",
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
      canonical: `/${lang}/about/nine-star`,
      languages: {
        ja: "/ja/about/nine-star",
        en: "/en/about/nine-star",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/nine-star`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
