import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "和暦（われき）とは | 暦計算ツール",
  description:
    "大化から令和まで続く元号（和暦）について解説します。Japanese Era system (Wareki).",
  alternates: {
    canonical: "/about/wareki",
  },
  openGraph: {
    title: "和暦（われき）とは | 暦計算ツール",
    description: "大化から令和まで続く元号（和暦）について解説します。",
  },
};

export default function Page() {
  return <ClientPage />;
}
