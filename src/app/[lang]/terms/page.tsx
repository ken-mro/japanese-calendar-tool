import { Metadata } from "next";
import TermsContent from "./TermsContent";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "利用規約 | 暦計算ツール",
    description: "暦計算ツールの利用規約です。",
  },
  en: {
    title: "Terms of Service | Japanese Calendar Tool",
    description: "Terms of Service for the Japanese Calendar Tool.",
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
      canonical: `/${lang}/terms`,
      languages: {
        ja: "/ja/terms",
        en: "/en/terms",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/terms`,
    },
  };
}

export default function Page() {
  return <TermsContent />;
}
