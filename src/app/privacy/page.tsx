"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/config";
import { ProtectedEmail } from "@/components";

export default function PrivacyPage() {
  const language = useLanguage();

  return (
    <div className="app-container">
      <header className="header">
        <Link href="/" className="back-link">
          ← {language === "ja" ? "ホームに戻る" : "Back to Home"}
        </Link>
      </header>

      <main
        className="main-content"
        style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 1rem" }}
      >
        {language === "ja" ? (
          <div className="terms-content">
            <h1>プライバシーポリシー</h1>
            <p className="last-updated">最終更新日: 2026年1月3日</p>

            <section>
              <h2>1. 情報の収集と利用について</h2>
              <p>
                本アプリ（暦計算ツール）は、ユーザーの個人情報（氏名、住所、メールアドレスなど）を収集しません。
                日付計算などのすべての処理は、ユーザーの端末（ブラウザ）内で行われ、入力されたデータが外部サーバーに送信されることはありません。
              </p>
            </section>

            <section>
              <h2>2. 広告について</h2>
              <p>
                本アプリでは、第三者配信の広告サービス（Google
                AdSense）を利用しています。
                このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報
                「Cookie」（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。
              </p>
              <p>
                また、Google
                AdSenseに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、
                <a
                  href="https://policies.google.com/technologies/ads?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-link"
                >
                  Googleのポリシーと規約
                </a>
                をご覧ください。
              </p>
            </section>

            <section>
              <h2>3. お問い合わせ</h2>
              <p>
                本ポリシーに関するお問い合わせは、以下のメールアドレスまでお願いいたします。
              </p>
              <p>
                <ProtectedEmail className="content-link" />
              </p>
            </section>
          </div>
        ) : (
          <div className="terms-content">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: January 3, 2026</p>

            <section>
              <h2>1. Collection and Use of Information</h2>
              <p>
                This application (Japanese Calendar Tool) does not collect
                personal information (such as name, address, email address). All
                calculations are performed locally on your device (browser), and
                entered data is not sent to external servers.
              </p>
            </section>

            <section>
              <h2>2. Advertising</h2>
              <p>
                This application uses a third-party advertising service (Google
                AdSense). Advertising vendors may use cookies (information about
                your visits to this and other websites, excluding name, address,
                email address, or phone number) to display advertisements for
                products and services of interest to you.
              </p>
              <p>
                For more details on Google AdSense and how to prevent this
                information from being used by ad vendors, please see{" "}
                <a
                  href="https://policies.google.com/technologies/ads?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content-link"
                >
                  Google&apos;s Privacy &amp; Terms
                </a>
                .
              </p>
            </section>

            <section>
              <h2>3. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at the following email address:
              </p>
              <p>
                <ProtectedEmail className="content-link" />
              </p>
            </section>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Japanese Calendar Tool</p>
      </footer>
    </div>
  );
}
