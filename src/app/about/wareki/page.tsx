"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import Icon from "@/components/icons/Icon";
import { useLanguage } from "@/lib/i18n/config";
import { JAPANESE_ERAS } from "@/lib/calculations/japaneseEra";

export default function WarekiPage() {
    const language = useLanguage();
    const isJa = language === "ja";

    const formatDate = (y: number, m: number, d: number) => {
        return `${y}.${m}.${d}`;
    };

    return (
        <AboutWrapper
            title={isJa ? "和暦とは" : "About Japanese Era (Wareki)"}
            icon={<Icon src="/images/japanese-era-icon.svg" alt="Wareki" />}
        >
            <div className="description-section" style={{ border: "none", padding: 0 }}>
                {isJa ? (
                    <>
                        <p className="mb-4 text-lg">
                            和暦（われき）は、日本独自の紀年法で、「元号（げんごう）」とそれに続く年数で年を表します。
                        </p>
                        <p className="text-lg">
                            日本では、飛鳥時代の「大化」から現在の「令和」まで連綿と続いています。このツールでは、主に江戸時代以降の元号に対応しています。
                        </p>
                    </>
                ) : (
                    <>
                        <p className="mb-4 text-lg">
                            Wareki is the traditional Japanese calendar system which uses eras
                            (Gengo) to identify years.
                        </p>
                        <p className="text-lg">
                            It has been used continuously from the Asuka period to the current
                            &quot;Reiwa&quot; era. This tool primarily supports eras from the
                            Edo period onwards.
                        </p>
                    </>
                )}

                <h2
                    className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    {isJa ? "元号一覧（江戸時代以降）" : "List of Eras (Since Edo Period)"}
                </h2>

                {/* Responsive container with centered flex alignment */}
                <div className="overflow-x-auto w-full flex justify-center pb-4">
                    <table
                        className="border-collapse w-full max-w-[1200px] responsive-table"
                        style={{ margin: '0 auto' }}
                    >
                        <thead>
                            <tr className="border-b-2 border-[var(--card-border)] text-[var(--text-secondary)]">
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "元号" : "Era Name"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "読み" : "Romaji"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "開始日" : "Start"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "終了日" : "End"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "年数" : "Duration"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {JAPANESE_ERAS.map((era) => (
                                <tr
                                    key={era.name}
                                    className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                >
                                    <td className="font-bold text-2xl" style={{ textAlign: 'center', padding: '1rem 2rem' }} data-label={isJa ? "元号" : "Era Name"}>{era.nameKanji}</td>
                                    <td className="text-xl" style={{ textAlign: 'center', padding: '1rem 2rem' }} data-label={isJa ? "読み" : "Romaji"}>{isJa ? era.nameHiragana : era.name}</td>
                                    <td className="text-lg font-mono" style={{ textAlign: 'center', padding: '1rem 2rem' }} data-label={isJa ? "開始日" : "Start"}>
                                        {formatDate(era.startYear, era.startMonth, era.startDay)}
                                    </td>
                                    <td className="text-lg font-mono" style={{ textAlign: 'center', padding: '1rem 2rem' }} data-label={isJa ? "終了日" : "End"}>
                                        {era.endYear === 9999 ? (isJa ? "現在" : "Present") : formatDate(era.endYear, era.endMonth, era.endDay)}
                                    </td>
                                    <td className="text-lg text-[var(--text-secondary)]" style={{ textAlign: 'center', padding: '1rem 2rem' }} data-label={isJa ? "年数" : "Duration"}>
                                        {era.endYear === 9999
                                            ? "-"
                                            : `${era.endYear - era.startYear + 1} ${isJa ? "年" : "yrs"}`}
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
