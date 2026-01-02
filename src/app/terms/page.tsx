"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/config";

export default function TermsPage() {
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
            <h1>利用規約</h1>
            <p className="last-updated">
              最終更新日: {new Date().toLocaleDateString("ja-JP")}
            </p>

            <section>
              <h2>1. はじめに</h2>
              <p>
                本アプリ（以下「本サービス」）をご利用いただきありがとうございます。
                本サービスを利用することによって、利用者は本規約に同意したものとみなされます。
              </p>
            </section>

            <section>
              <h2>2. サービスの性質</h2>
              <p>
                本サービスは、日付、和暦、干支などの計算機能を提供するツールです。
                開発者は、本サービスの機能や内容を利用者への事前の通知なく変更・終了する権利を保有します。
              </p>
            </section>

            <section
              className="highlight-section"
              style={{
                background: "rgba(189, 56, 56, 0.1)",
                padding: "1.5rem",
                borderRadius: "8px",
                margin: "1.5rem 0",
                border: "1px solid #bd3838",
                color: "#fcfaf2",
              }}
            >
              <h2
                style={{
                  color: "#ff8080",
                  borderBottom: "1px solid #bd3838",
                  paddingBottom: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                3. 和暦（元号）に関する重要事項と技術的仕様
              </h2>
              <p>
                本アプリにおける1873年（明治6年）以前の日付計算は、以下の技術的仕様に基づいて実装されています。
                <strong style={{ color: "#ff8080" }}>
                  歴史的な正確性を保証するものではない
                </strong>
                ため、研究や公的な証明等には使用しないでください。
              </p>

              <div
                style={{
                  marginTop: "1rem",
                  background: "rgba(0,0,0,0.3)",
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                    color: "#c6aa58",
                  }}
                >
                  【実装上の仕様と限界】
                </h3>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <li>
                    <strong>単純な数値置換による変換:</strong>
                    <br />
                    本アプリは、旧暦（太陰太陽暦）の日付を、暦法自体の変換を行わずに、そのまま現在のグレゴリオ暦の「年・月・日」の数値に当てはめて計算しています。
                    <br />
                    <span style={{ fontSize: "0.9em", color: "#ccc" }}>
                      （例：天保2年1月1日を、西暦1831年1月1日として処理。実際には天保2年1月1日は西暦1831年2月12日頃に相当するため、約1ヶ月以上のズレが生じます。）
                    </span>
                  </li>
                  <li>
                    <strong>閏月（うるうづき）の非対応:</strong>
                    <br />
                    旧暦に存在した「閏月」（例：閏4月）には対応していません。入力や計算はすべて通常の1月〜12月として処理されます。
                  </li>
                  <li>
                    <strong>改元日の不整合:</strong>
                    <br />
                    年の途中で元号が変わった場合でも、アプリ上では便宜上その年の1月1日から、または単純な年単位での計算を行う場合があります。
                  </li>
                </ul>
              </div>

              <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
                以上の理由により、明治6年以前の「西暦変換」「干支」「曜日」などの計算結果は、歴史的事実とは大きく異なる可能性があります。
                あくまで「現代の暦のルールを過去にそのまま適用した場合」の架空の計算結果としてご利用ください。
              </p>
            </section>

            <section>
              <h2>4. 免責事項</h2>
              <p>
                開発者は、本サービスの利用に起因して利用者に生じたあらゆる損害（直接的、間接的を問わず）について、一切の責任を負いません。
                特に、前項で述べた和暦や歴史的日付の計算における不正確さに起因する誤解や問題についても、開発者は責任を負いかねます。
                利用者は、本サービスの結果を自己の責任において利用することに同意するものとします。
              </p>
            </section>
          </div>
        ) : (
          <div className="terms-content">
            <h1>Terms of Service</h1>
            <p className="last-updated">
              Last Updated: {new Date().toLocaleDateString("en-US")}
            </p>

            <section>
              <h2>1. Introduction</h2>
              <p>
                Thank you for using this application (the &quot;Service&quot;).
                By using the Service, you agree to these Terms of Service.
              </p>
            </section>

            <section>
              <h2>2. Nature of Service</h2>
              <p>
                This Service provides tools for calculating dates, Japanese
                eras, zodiac signs, etc. The Developer reserves the right to
                modify or discontinue the Service at any time without prior
                notice.
              </p>
            </section>

            <section
              className="highlight-section"
              style={{
                background: "rgba(189, 56, 56, 0.1)",
                padding: "1.5rem",
                borderRadius: "8px",
                margin: "1.5rem 0",
                border: "1px solid #bd3838",
                color: "#fcfaf2",
              }}
            >
              <h2
                style={{
                  color: "#ff8080",
                  borderBottom: "1px solid #bd3838",
                  paddingBottom: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                3. Important Notes on Japanese Era System and Technical
                Specifications
              </h2>
              <p>
                Calculations for dates prior to 1873 (Meiji 6) in this
                application are based on the following technical specifications.
                Results are{" "}
                <strong style={{ color: "#ff8080" }}>
                  not historically accurate
                </strong>{" "}
                and should not be used for academic research or official
                certification.
              </p>

              <div
                style={{
                  marginTop: "1rem",
                  background: "rgba(0,0,0,0.3)",
                  padding: "1rem",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                    color: "#c6aa58",
                  }}
                >
                  [Implementation Specifications & Limitations]
                </h3>
                <ul
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <li>
                    <strong>Direct Numerical Substitution:</strong>
                    <br />
                    This application treats dates from the old lunisolar
                    calendar directly as modern Gregorian calendar dates without
                    performing any calendar system conversion.
                    <br />
                    <span style={{ fontSize: "0.9em", color: "#ccc" }}>
                      (Example: Tenpo Year 2, Month 1, Day 1 is treated as
                      January 1, 1831. Historically, this date corresponds to
                      roughly February 12, 1831, resulting in a discrepancy of
                      over a month.)
                    </span>
                  </li>
                  <li>
                    <strong>No Support for Leap Months:</strong>
                    <br />
                    The &quot;Leap Months&quot; (Uruu-zuki) that existed in the
                    old lunisolar calendar are not supported. All inputs are
                    processed as standard months 1 through 12.
                  </li>
                  <li>
                    <strong>Era Change Discrepancies:</strong>
                    <br />
                    Even if an era changed in the middle of a year, the app may
                    allow calculations using the new era from January 1st of
                    that same year for convenience.
                  </li>
                </ul>
              </div>

              <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
                For these reasons, calculation results (Western year conversion,
                Zodiac, Day of the Week) for dates prior to 1873 may differ
                significantly from historical facts. Please use these results
                only as a hypothetical reference based on &quot;applying modern
                calendar rules directly to the past.&quot;
              </p>
            </section>

            <section>
              <h2>4. Disclaimer</h2>
              <p>
                The Developer assumes no responsibility for any damages or
                losses (direct or indirect) arising from the use of this
                Service. Specifically, the Developer is not liable for any
                misunderstandings or issues arising from the inaccuracies in
                historical date calculations mentioned above. You agree to use
                the Service and its results at your own risk.
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
