import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "六曜（ろくよう）とは | 暦計算ツール",
    description:
      "六曜（ろくよう）は、先勝・友引・先負・仏滅・大安・赤口の6種の暦注です。結婚式や葬式などの日取り決めで参考にされます。",
  },
  en: {
    title: "About Rokuyo (Six Days) | Japanese Calendar Tool",
    description:
      "Rokuyo (Six Days) is a six-day cycle used for choosing lucky and unlucky days for events like weddings and funerals, such as Taian and Butsumetsu.",
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
      canonical: `/${lang}/about/rokuyo`,
      languages: {
        ja: "/ja/about/rokuyo",
        en: "/en/about/rokuyo",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/rokuyo`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
