import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";
import { Language } from "@/lib/i18n/config";

const dictionary = {
  ja: {
    title: "プライバシーポリシー | 暦計算ツール",
    description: "暦計算ツールのプライバシーポリシーです。",
  },
  en: {
    title: "Privacy Policy | Japanese Calendar Tool",
    description: "Privacy Policy for the Japanese Calendar Tool.",
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
      canonical: `/${lang}/privacy`,
      languages: {
        ja: "/ja/privacy",
        en: "/en/privacy",
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `/${lang}/privacy`,
    },
  };
}

export default function Page() {
  return <PrivacyContent />;
}
