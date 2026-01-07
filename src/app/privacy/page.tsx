import { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Privacy Policy - 暦計算ツール",
  description:
    "暦計算ツールのプライバシーポリシーです。個人情報の取り扱い、広告、免責事項について説明しています。",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
