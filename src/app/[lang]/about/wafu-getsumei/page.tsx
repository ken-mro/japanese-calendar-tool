import { Metadata } from "next";
import ClientPage from "./ClientPage";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "和風月名（わふうげつめい）とは | 暦計算ツール",
    description:
      "睦月・如月などの旧暦の月の和風な名前（和風月名）について解説します。",
  },
  en: {
    title: "About Traditional Month Names | Japanese Calendar Tool",
    description:
      "Explanation of traditional Japanese month names like Mutsuki (January) and Kisaragi (February).",
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
      canonical: `/${lang}/about/wafu-getsumei`,
      languages: {
        ja: "/ja/about/wafu-getsumei",
        en: "/en/about/wafu-getsumei",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/about/wafu-getsumei`,
    },
  };
}

export default function Page() {
  return <ClientPage />;
}
