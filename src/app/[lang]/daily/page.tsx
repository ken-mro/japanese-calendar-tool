import { DailyCalendar } from "@/components/DailyCalendar";
import { DetailHeader } from "@/components/DetailHeader";
import { Language } from "@/lib/i18n/config";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    lang: Language;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isJapanese = lang === "ja";

  const title = isJapanese
    ? "日めくりカレンダー | 暦計算ツール"
    : "Daily Calendar | Japanese Calendar Tool";
  const description = isJapanese
    ? "今日の干支・九星・六曜・選日・月齢を表示する日めくりカレンダー。和風デザインで日本の伝統的な暦を楽しめます。"
    : "Daily calendar showing today's Eto, Nine Star Ki, Rokuyo, Senjitsu, and moon phase. Traditional Japanese calendar in Wafu design.";

  return {
    title,
    description,
    keywords: isJapanese
      ? [
          "日めくりカレンダー",
          "今日の干支",
          "今日の九星",
          "六曜",
          "選日",
          "月齢",
          "和風カレンダー",
          "旧暦",
          "和風月名",
        ]
      : [
          "daily calendar",
          "today's eto",
          "today's nine star",
          "rokuyo",
          "senjitsu",
          "moon phase",
          "Japanese calendar",
          "lunar calendar",
          "traditional calendar",
        ],
    alternates: {
      canonical: `/${lang}/daily`,
      languages: {
        ja: "/ja/daily",
        en: "/en/daily",
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}/daily`,
      type: "website",
      locale: isJapanese ? "ja_JP" : "en_US",
      alternateLocale: isJapanese ? "en_US" : "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function DailyPage({ params }: PageProps) {
  await params;
  return (
    <>
      <DetailHeader />
      <div className="container mx-auto px-4 py-8">
        <DailyCalendar />
      </div>
    </>
  );
}
