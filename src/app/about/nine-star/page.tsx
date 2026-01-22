import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "九星（きゅうせい）とは | 暦計算ツール",
  description:
    "九星気学（きゅうせいきがく）は、生年月日から割り出される「九星」を用いて運勢や相性を占います。一白水星から九紫火星までの9つの星について解説します。Nine Star Ki astrology.",
  alternates: {
    canonical: "/about/nine-star",
  },
  openGraph: {
    title: "九星（きゅうせい）とは | 暦計算ツール",
    description:
      "九星気学（きゅうせいきがく）は、生年月日から割り出される「九星」を用いて運勢や相性を占います。",
  },
};

export default function Page() {
  return <ClientPage />;
}
