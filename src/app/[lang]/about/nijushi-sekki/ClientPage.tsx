"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import { SekkiIcon } from "@/components/icons/SekkiIcon";
import { useLanguage } from "@/lib/i18n/config";
import { NIJUSHI_SEKKI } from "@/lib/calculations/solarTerms";

export default function NijushiSekkiPage() {
  const language = useLanguage();
  const isJa = language === "ja";

  return (
    <AboutWrapper
      title={isJa ? "二十四節気（にじゅうしせっき）とは" : "About Nijushi Sekki (24 Solar Terms)"}
      icon={<SekkiIcon termIndex={5} size={36} />}
    >
      <div className="description-section" style={{ border: "none", padding: 0 }}>
        {isJa ? (
          <>
            <p className="mb-4 text-lg">
              二十四節気（にじゅうしせっき）とは、太陽の黄経を24等分した点を基準に、一年を24の季節に分けた暦の区分です。中国で生まれ、日本にも伝わり、農業や生活の節目として長く使われてきました。
            </p>
            <p className="text-lg">
              立春・春分・夏至・秋分・冬至など、現代でも季節の言葉として日常的に使われています。各節気はおよそ15日間続き、次の節気が始まるまでの期間をその節気の「期間」と呼びます。
            </p>
          </>
        ) : (
          <>
            <p className="mb-4 text-lg">
              Nijushi Sekki (24 Solar Terms) divides the year into 24 equal segments based on the sun&apos;s ecliptic longitude. Originating in China and adopted in Japan, these terms have long marked the rhythm of agriculture and daily life.
            </p>
            <p className="text-lg">
              Terms like Risshun (Start of Spring), Shumbun (Vernal Equinox), Geshi (Summer Solstice), Shubun (Autumnal Equinox), and Toji (Winter Solstice) remain in everyday use in modern Japan. Each term lasts approximately 15 days.
            </p>
          </>
        )}

        <h2
          className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
          style={{ textAlign: "center", width: "100%" }}
        >
          {isJa ? "二十四節気の一覧" : "All 24 Solar Terms"}
        </h2>
        <div className="overflow-x-auto w-full flex justify-center pb-4">
          <table
            className="border-collapse w-full max-w-[1200px] responsive-table"
            style={{ margin: "0 auto" }}
          >
            <thead>
              <tr className="border-b-2 border-[var(--card-border)] text-[var(--text-secondary)]">
                <th
                  className="font-bold text-lg"
                  style={{ textAlign: "center", padding: "1.25rem 1.5rem", whiteSpace: "nowrap" }}
                ></th>
                <th
                  className="font-bold text-lg"
                  style={{ textAlign: "center", padding: "1.25rem 1.5rem", whiteSpace: "nowrap" }}
                >
                  {isJa ? "名称" : "Name"}
                </th>
                <th
                  className="font-bold text-lg"
                  style={{ textAlign: "center", padding: "1.25rem 1.5rem", whiteSpace: "nowrap" }}
                >
                  {isJa ? "読み" : "Reading"}
                </th>
                <th
                  className="font-bold text-lg"
                  style={{ textAlign: "center", padding: "1.25rem 1.5rem", whiteSpace: "nowrap" }}
                >
                  {isJa ? "時期" : "Month"}
                </th>
                <th
                  className="font-bold text-lg"
                  style={{ textAlign: "center", padding: "1.25rem 1.5rem", whiteSpace: "nowrap" }}
                >
                  {isJa ? "意味" : "Meaning"}
                </th>
              </tr>
            </thead>
            <tbody>
              {NIJUSHI_SEKKI.map((term) => (
                <tr
                  key={term.index}
                  className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  <td
                    style={{ textAlign: "center", padding: "0.5rem" }}
                    data-label=""
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <SekkiIcon termIndex={term.index} />
                    </div>
                  </td>
                  <td
                    className="font-bold text-2xl"
                    style={{ textAlign: "center", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "名称" : "Name"}
                  >
                    {term.kanji}
                  </td>
                  <td
                    className="text-xl"
                    style={{ textAlign: "center", padding: "1.25rem 1.5rem", whiteSpace: "nowrap" }}
                    data-label={isJa ? "読み" : "Reading"}
                  >
                    {isJa ? term.reading : term.romaji}
                  </td>
                  <td
                    className="text-lg"
                    style={{ textAlign: "center", padding: "1.25rem 1.5rem", whiteSpace: "nowrap" }}
                    data-label={isJa ? "時期" : "Month"}
                  >
                    {isJa
                      ? `${term.month}月${term.day}日頃`
                      : `Around ${new Date(2000, term.month - 1, term.day).toLocaleDateString("en-US", { month: "long", day: "numeric" })}`
                    }
                  </td>
                  <td
                    className="text-lg"
                    style={{ textAlign: "left", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "意味" : "Meaning"}
                  >
                    {isJa ? term.meaningJa : term.meaning}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AboutWrapper>
  );
}
