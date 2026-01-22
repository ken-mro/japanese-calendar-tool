import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "和風月名（わふうげつめい）とは | 暦計算ツール",
  description:
    "睦月・如月などの旧暦の月の和風な名前（和風月名）について解説します。Traditional Japanese month names.",
  alternates: {
    canonical: "/about/wafu-getsumei",
  },
  openGraph: {
    title: "和風月名（わふうげつめい）とは | 暦計算ツール",
    description:
      "睦月・如月などの旧暦の月の和風な名前（和風月名）について解説します。",
  },
};

export default function Page() {
  return <ClientPage />;
}
