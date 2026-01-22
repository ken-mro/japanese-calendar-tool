import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "干支（十干十二支）とは | 暦計算ツール",
  description:
    "干支（えと）は、十干（じっかん）と十二支（じゅうにし）を組み合わせた60通りのサイクルです。今年の干支や、それぞれの意味について解説します。Sexagenary Cycle (Heavenly Stems and Earthly Branches).",
  alternates: {
    canonical: "/about/eto",
  },
  openGraph: {
    title: "干支（十干十二支）とは | 暦計算ツール",
    description:
      "干支（えと）は、十干（じっかん）と十二支（じゅうにし）を組み合わせた60通りのサイクルです。",
  },
};

export default function Page() {
  return <ClientPage />;
}
