import { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "六曜（ろくよう）とは | 暦計算ツール",
  description:
    "六曜（ろくよう）は、先勝・友引・先負・仏滅・大安・赤口の6種の暦注です。結婚式や葬式などの日取り決めで参考にされます。Meaning of Rokuyo (Six Days).",
  alternates: {
    canonical: "/about/rokuyo",
  },
  openGraph: {
    title: "六曜（ろくよう）とは | 暦計算ツール",
    description:
      "六曜（ろくよう）は、先勝・友引・先負・仏滅・大安・赤口の6種の暦注です。",
  },
};

export default function Page() {
  return <ClientPage />;
}
