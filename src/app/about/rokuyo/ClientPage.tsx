"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import Icon from "@/components/icons/Icon";
import { useLanguage } from "@/lib/i18n/config";
import { ROKUYO_TYPES } from "@/lib/calculations/rokuyo";

export default function RokuyoPage() {
  const language = useLanguage();
  const isJa = language === "ja";

  return (
    <AboutWrapper
      title={isJa ? "六曜（ろくよう）とは" : "About Rokuyo"}
      icon={<Icon src="/images/rokuyo/taian.svg" alt="Rokuyo" />}
    >
      <div
        className="description-section"
        style={{ border: "none", padding: 0 }}
      >
        {isJa ? (
          <>
            <p className="mb-4 text-lg">
              六曜（ろくよう）は、暦注（暦に記載される日時・方位などの吉凶）の一つで、先勝・友引・先負・仏滅・大安・赤口の6種があります。
            </p>
            <p className="text-lg">
              現代の日本では、結婚式（大安が好まれる）や葬式（友引が避けられる）などの日取りを決める際に広く参考にされています。
            </p>
          </>
        ) : (
          <>
            <p className="mb-4 text-lg">
              Rokuyo is a six-day cycle used in the Japanese calendar to predict
              good or bad fortune for the day. It is one of the most popular
              fortune-telling systems in modern Japan.
            </p>
            <p className="text-lg">
              People often check Rokuyo when planning events like weddings
              (Taian is preferred) or funerals (Tomobiki is often avoided).
            </p>
          </>
        )}

        <h2
          className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
          style={{ textAlign: "center", width: "100%" }}
        >
          {isJa ? "六曜の種類" : "The Six Days"}
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
              {/* Order: Taian, Shakko, Sensho, Tomobiki, Senbu, Butsumetsu - typical display order or data order? Using data order. */}
              {ROKUYO_TYPES.map((type) => (
                <tr
                  key={type.name}
                  className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                >
                  <td
                    style={{ textAlign: "center", padding: "0.5rem" }}
                    data-label=""
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div style={{ width: "48px", height: "48px" }}>
                        <Icon
                          src={`/images/rokuyo/${type.reading}.svg`}
                          alt={type.name}
                        />
                      </div>
                    </div>
                  </td>
                  <td
                    className="font-bold text-2xl"
                    style={{ textAlign: "center", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "名称" : "Name"}
                  >
                    {type.nameKanji}
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
                    {isJa ? type.readingHiragana : type.name}
                  </td>
                  <td
                    className="text-lg"
                    style={{ textAlign: "left", padding: "1.25rem 1.5rem" }}
                    data-label={isJa ? "意味" : "Meaning"}
                  >
                    {isJa ? type.meaningJa : type.meaning}
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
