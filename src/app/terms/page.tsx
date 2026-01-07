import { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "利用規約 | Terms of Service - 暦計算ツール",
  description:
    "暦計算ツールの利用規約です。免責事項、和暦計算の仕様、九星気学に関する注意事項などを定めています。",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsContent />;
}
