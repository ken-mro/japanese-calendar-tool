"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import { useLanguage } from "@/lib/i18n/config";
import { SENJITSU_TYPES } from "@/lib/calculations/senjitsu";

export default function SenjitsuPage() {
  const language = useLanguage();
  const isJa = language === "ja";

  const senjitsuList = Object.values(SENJITSU_TYPES);

  return (
    <AboutWrapper
      title={isJa ? "選日（せんじつ）とは" : "About Senjitsu (Selected Days)"}
      // Use Ichiryumanbai icon logic (first char) as generic icon or just a generic calendar one
      icon={
        <div
          className="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xl select-none shrink-0"
          style={{ backgroundColor: "var(--accent-color, #d44d60)" }}
        >
          {"選"}
        </div>
      }
    >
      <div
        className="description-section"
        style={{ border: "none", padding: 0 }}
      >
        {isJa ? (
          <>
            <p className="mb-4 text-lg">
              選日（せんじつ）とは、六曜や七十二候などの暦注（暦の注釈）に含まれない、特定の吉凶日の総称です。
            </p>
            <p className="text-lg">
              現代でも「一粒万倍日」や「天赦日」などは宝くじの購入や財布の買い替え、結婚などの吉日として非常に人気があります。一方で「不成就日」のような凶日も存在し、重要なイベントの日取りを決める際の参考にされています。
            </p>
          </>
        ) : (
          <>
            <p className="mb-4 text-lg">
              &quot;Senjitsu&quot; refers to a category of selected days in the
              Japanese calendar that indicate specific good or bad fortune,
              distinct from the main cycles like Rokuyo.
            </p>
            <p className="text-lg">
              Days like &quot;Ichiryumanbai-bi&quot; (One Grain Ten Thousand
              Times Day) and &quot;Tensha-nichi&quot; (Heavenly Pardon Day) are
              considered highly auspicious for new beginnings, while others like
              &quot;Fushoju-nichi&quot; are considered unlucky.
            </p>
          </>
        )}

        <h2
          className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
          style={{ textAlign: "center", width: "100%" }}
        >
          {isJa ? "主な選日" : "Main Senjitsu Days"}
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
                ></th>
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
              {senjitsuList.map((type) => {
                return (
                  <tr
                    key={type.romaji}
                    className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                  >
                    <td
                      style={{ textAlign: "center", padding: "0.5rem" }}
                      data-label=""
                    >
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xl select-none shrink-0"
                          style={{
                            backgroundColor: type.isLucky
                              ? "var(--accent-color, #d44d60)"
                              : "var(--color-ginnezumi, #718096)",
                          }}
                        >
                          {type.name[0]}
                        </div>
                      </div>
                    </td>
                    <td
                      className="font-bold text-2xl"
                      style={{ textAlign: "center", padding: "1.25rem 1.5rem" }}
                      data-label={isJa ? "名称" : "Name"}
                    >
                      {type.name}
                    </td>
                    <td
                      className="text-xl"
                      style={{ textAlign: "center", padding: "1.25rem 1.5rem" }}
                      data-label={isJa ? "読み" : "Reading"}
                    >
                      {isJa ? type.reading : type.romaji}
                    </td>
                    <td
                      className="text-lg"
                      style={{ textAlign: "left", padding: "1.25rem 1.5rem" }}
                      data-label={isJa ? "意味" : "Meaning"}
                    >
                      {isJa ? type.meaningJa : type.meaning}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AboutWrapper>
  );
}
