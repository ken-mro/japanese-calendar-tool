import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "十二直（じゅうにちょく）とは | 暦計算ツール",
  description:
    "建・除・満・平・定・執・破・危・成・納・開・閉の12種類で吉凶を占う十二直について解説します。The 12 Choku (Junichoku) divination.",
  alternates: {
    canonical: "/about/junichoku",
  },
  openGraph: {
    title: "十二直（じゅうにちょく）とは | 暦計算ツール",
    description: "十二直について解説します。",
  },
};

export default function Page() {
  return <ClientPage />;
}
