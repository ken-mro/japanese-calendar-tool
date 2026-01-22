"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import Icon from "@/components/icons/Icon";
import { useLanguage } from "@/lib/i18n/config";
import { JUNICHOKU_DATA } from "@/lib/calculations/junichoku";

export default function JunichokuPage() {
  const language = useLanguage();
  const isJa = language === "ja";

  return (
    <AboutWrapper
      title={isJa ? "十二直（じゅうにちょく）とは" : "About 12 Choku"}
      icon={<Icon src="/images/junichoku.svg" alt="Junichoku" />}
    >
      <div
        className="description-section"
        style={{ border: "none", padding: 0 }}
      >
        {isJa ? (
          <>
            <p className="mb-4 text-lg">
              十二直（じゅうにちょく）は、暦注の一つで、「建・除・満・平・定・執・破・危・成・納・開・閉」の12種類で日の吉凶を占います。
            </p>
            <p className="text-lg">
              北斗七星の柄の方向が十二支のどの方向を向いているかで定められ、江戸時代までは六曜よりも重視されていました。
            </p>
          </>
        ) : (
          <>
            <p className="mb-4 text-lg">
              The 12 Choku (Junichoku) is a method of divination used in the
              Japanese calendar to determine the fortune of a day based on 12
              types.
            </p>
            <p className="text-lg">
              It relies on the direction of the Big Dipper's handle relative to
              the Earthly Branches and was considered even more important than
              Rokuyo until the Edo period.
            </p>
          </>
        )}

        <h2
          className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
          style={{ textAlign: "center", width: "100%" }}
        >
          {isJa ? "十二直一覧" : "List of 12 Choku"}
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
                  style={{
                    textAlign: "center",
                    padding: "1.25rem 1.5rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {isJa ? "名称" : "Name"}
                </th>
                <th
                  className="font-bold text-lg"
                  style={{
                    textAlign: "center",
                    padding: "1.25rem 1.5rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {isJa ? "読み" : "Reading"}
                </th>
                <th
                  className="font-bold text-lg"
                  style={{
                    textAlign: "center",
                    padding: "1.25rem 1.5rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {isJa ? "意味" : "Meaning"}
                </th>
              </tr>
            </thead>
            <tbody>
              {JUNICHOKU_DATA.map((choku) => (
                <tr
                  key={choku.name}
                  className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  <td
                    className="font-bold text-2xl"
                    style={{ textAlign: "center", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "名称" : "Name"}
                  >
                    {choku.name}
                  </td>
                  <td
                    className="text-xl"
                    style={{
                      textAlign: "center",
                      padding: "1.25rem 1.5rem",
                      whiteSpace: "nowrap",
                    }}
                    data-label={isJa ? "読み" : "Reading"}
                  >
                    {isJa ? choku.reading : choku.romaji}
                  </td>
                  <td
                    className="text-lg"
                    style={{ textAlign: "left", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "意味" : "Meaning"}
                  >
                    {isJa ? choku.meaningJa : choku.meaning}
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
