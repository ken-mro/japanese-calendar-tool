"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import Icon from "@/components/icons/Icon";
import { useLanguage } from "@/lib/i18n/config";
import { WAFU_GETSUMEI_DATA } from "@/lib/calculations/wafuGetsumei";

export default function WafuGetsumeiPage() {
    const language = useLanguage();
    const isJa = language === "ja";

    return (
        <AboutWrapper
            title={isJa ? "和風月名（わふうげつめい）とは" : "About Wafu Getsumei"}
            icon={<Icon src="/images/wafu-title.svg" alt="Wafu Getsumei" />}
        >
            <div className="description-section" style={{ border: "none", padding: 0 }}>
                {isJa ? (
                    <>
                        <p className="mb-4 text-lg">
                            旧暦の月には、数字ではなく季節感を表す美しい名前が付けられています。「睦月（1月）」「如月（2月）」などがこれにあたり、現代でもカレンダーや手紙の挨拶などで広く使われています。
                        </p>
                    </>
                ) : (
                    <>
                        <p className="mb-4 text-lg">
                            In the traditional Japanese calendar, months are given beautiful names
                            that reflect the season rather than just numbers. Examples include
                            &quot;Mutsuki&quot; (January) and &quot;Kisaragi&quot; (February).
                            These names are still widely used in calendars and formal greetings.
                        </p>
                    </>
                )}

                <h2
                    className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    {isJa ? "和風月名一覧" : "List of Wafu Getsumei"}
                </h2>

                {/* Responsive container with centered flex alignment */}
                <div className="overflow-x-auto w-full flex justify-center pb-4">
                    <table
                        className="border-collapse w-full max-w-[1200px] responsive-table"
                        style={{ margin: '0 auto' }}
                    >
                        <thead>
                            <tr className="border-b-2 border-[var(--card-border)] text-[var(--text-secondary)]">
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "月" : "Month"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "和風月名" : "Name"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "読み" : "Reading"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }}>{isJa ? "意味" : "Meaning"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {WAFU_GETSUMEI_DATA.map((month, index) => {
                                const englishMonths = [
                                    "January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ];
                                return (
                                    <tr
                                        key={month.name}
                                        className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                    >
                                        <td className="text-xl" style={{ textAlign: 'center', padding: '1.5rem 2.5rem', whiteSpace: 'nowrap' }} data-label={isJa ? "月" : "Month"}>
                                            {isJa ? `${index + 1}月` : englishMonths[index]}
                                        </td>
                                        <td className="font-bold text-2xl" style={{ textAlign: 'center', padding: '1.5rem 2.5rem' }} data-label={isJa ? "和風月名" : "Name"}>{month.name}</td>
                                        <td className="text-xl" style={{ textAlign: 'center', padding: '1.5rem 2.5rem' }} data-label={isJa ? "読み" : "Reading"}>{isJa ? month.reading : month.romaji}</td>
                                        <td className="text-lg" style={{ textAlign: 'left', padding: '1.5rem 2.5rem' }} data-label={isJa ? "意味" : "Meaning"}>{isJa ? month.meaningJa : month.meaning}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </AboutWrapper>
    );
}
