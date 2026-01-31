import { DailyCalendar } from "@/components/DailyCalendar";
import { DetailHeader } from "@/components/DetailHeader";
import { Language } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
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
  const dictionary = await getDictionary(lang);

  return {
    title: `${dictionary.common.title} | Daily`,
    description: dictionary.common.description,
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
