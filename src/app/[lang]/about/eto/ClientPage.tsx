"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import Icon from "@/components/icons/Icon";
import { useLanguage } from "@/lib/i18n/config";
import { HEAVENLY_STEMS, EARTHLY_BRANCHES } from "@/lib/calculations/zodiac";

export default function EtoPage() {
  const language = useLanguage();
  const isJa = language === "ja";

  return (
    <AboutWrapper
      title={isJa ? "干支（十干十二支）とは" : "About Sexagenary Cycle (Eto)"}
      icon={<Icon src="/images/zodiac/dragon.svg" alt="Eto" />}
    >
      <div
        className="description-section"
        style={{ border: "none", padding: 0 }}
      >
        {isJa ? (
          <>
            <p className="mb-4 text-lg">
              一般的に「干支（えと）」というと「子・丑・寅…」の十二支（じゅうにし）を指すことが多いですが、本来は「十干（じっかん）」と「十二支」を組み合わせた60通りのサイクルのことを指します。
            </p>
            <p className="text-lg">
              干支は「2024年（甲辰）」のように年ごとに決まるものだけでなく、月や日にもそれぞれ割り当てられています。
            </p>
          </>
        ) : (
          <>
            <p className="mb-4 text-lg">
              While often referred to simply as the &quot;Chinese Zodiac&quot;
              (the 12 animals), the full Sexagenary Cycle combines the Ten
              Heavenly Stems and the Twelve Earthly Branches to create a 60-year
              cycle.
            </p>
            <p className="text-lg">
              This cycle applies not only to years (e.g., &quot;Year of the Wood
              Dragon&quot;) but also to months and days.
            </p>
          </>
        )}

        {/* Ten Heavenly Stems Table */}
        <h2
          className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
          style={{ textAlign: "center", width: "100%" }}
        >
          {isJa ? "十干（Heavenly Stems）" : "Ten Heavenly Stems"}
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
              {HEAVENLY_STEMS.map((stem) => (
                <tr
                  key={stem.romaji}
                  className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  <td
                    style={{ textAlign: "center", padding: "0.5rem" }}
                    data-label=""
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ width: "48px", height: "48px" }}>
                        <Icon src={stem.icon} alt={stem.romaji} />
                      </div>
                    </div>
                  </td>
                  <td
                    className="font-bold text-2xl"
                    style={{ textAlign: "center", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "名称" : "Name"}
                  >
                    {stem.kanji}
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
                    {isJa ? stem.reading : stem.romaji}
                  </td>
                  <td
                    className="text-lg"
                    style={{ textAlign: "left", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "意味" : "Meaning"}
                  >
                    {isJa ? stem.meaningJa : stem.meaningEn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Twelve Earthly Branches Table */}
        <h2
          className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
          style={{ textAlign: "center", width: "100%" }}
        >
          {isJa ? "十二支（Earthly Branches）" : "Twelve Earthly Branches"}
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
                  {isJa ? "動物" : "Animal"}
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
              {EARTHLY_BRANCHES.map((branch) => (
                <tr
                  key={branch.romaji}
                  className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  <td
                    style={{ textAlign: "center", padding: "0.5rem" }}
                    data-label=""
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ width: "48px", height: "48px" }}>
                        <Icon src={branch.icon} alt={branch.animal} />
                      </div>
                    </div>
                  </td>
                  <td
                    className="font-bold text-2xl"
                    style={{ textAlign: "center", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "名称" : "Name"}
                  >
                    {branch.kanji}
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
                    {isJa ? branch.reading : branch.romaji}
                  </td>
                  <td
                    className="text-xl"
                    style={{
                      textAlign: "center",
                      padding: "1.25rem 1.5rem",
                      whiteSpace: "nowrap",
                    }}
                    data-label={isJa ? "動物" : "Animal"}
                  >
                    {isJa ? branch.animalKanji : branch.animal}
                  </td>
                  <td
                    className="text-lg"
                    style={{ textAlign: "left", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "意味" : "Meaning"}
                  >
                    {isJa ? branch.meaningJa : branch.meaningEn}
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
