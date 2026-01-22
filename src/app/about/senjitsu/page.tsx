import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "選日（せんじつ）とは | 暦計算ツール",
  description:
    "一粒万倍日（いちりゅうまんばいび）や天赦日（てんしゃにち）、不成就日などの選日について解説します。Special recurring days in Japanese calendar.",
  alternates: {
    canonical: "/about/senjitsu",
  },
  openGraph: {
    title: "選日（せんじつ）とは | 暦計算ツール",
    description: "一粒万倍日や天赦日などの選日について解説します。",
  },
};

export default function Page() {
  return <ClientPage />;
}
