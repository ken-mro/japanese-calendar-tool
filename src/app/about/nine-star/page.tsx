"use client";

import { AboutWrapper } from "@/components/about/AboutWrapper";
import { NineStarIcon } from "@/components/icons/NineStarIcon";
import { NineStarTitleIcon } from "@/components/icons/NineStarTitleIcon";
import { useLanguage } from "@/lib/i18n/config";
import { NINE_STARS } from "@/lib/calculations/nineStar";

export default function NineStarPage() {
    const language = useLanguage();
    const isJa = language === "ja";

    return (
        <AboutWrapper
            title={isJa ? "九星（きゅうせい）とは" : "About Nine Star Ki"}
            icon={<NineStarTitleIcon className="w-12 h-12" />}
        >
            <div className="description-section" style={{ border: "none", padding: 0 }}>
                {isJa ? (
                    <>
                        <p className="mb-4 text-lg">
                            九星気学（きゅうせいきがく）は、中国から伝わった占術の一つで、生年月日から割り出される「九星」を用いて運勢や相性を占います。
                        </p>
                        <p className="text-lg">
                            一白水星から九紫火星までの9つの星があり、それぞれに「五行（木・火・土・金・水）」や「色」が割り当てられています。
                        </p>
                    </>
                ) : (
                    <>
                        <p className="mb-4 text-lg">
                            Nine Star Ki is a form of astrology that originated in China and is
                            widely used in Japan. It uses nine stars derived from your birth date
                            to determine your fortune and compatibility.
                        </p>
                        <p className="text-lg">
                            There are 9 stars from &quot;1 White Water&quot; to &quot;9 Purple
                            Fire&quot;, each associated with one of the Five Elements (Wood,
                            Fire, Earth, Metal, Water) and a specific color.
                        </p>
                    </>
                )}

                <h2
                    className="mt-12 mb-8 text-2xl font-bold text-[var(--color-kogane)]"
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    {isJa ? "九つの星（The Nine Stars）" : "The Nine Stars"}
                </h2>

                <div className="overflow-x-auto w-full flex justify-center pb-4">
                    <table
                        className="border-collapse w-full max-w-[1200px] responsive-table"
                        style={{ margin: '0 auto' }}
                    >
                        <thead>
                            <tr className="border-b-2 border-[var(--card-border)] text-[var(--text-secondary)]">
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', whiteSpace: 'nowrap' }}></th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', whiteSpace: 'nowrap' }}>{isJa ? "名称" : "Name"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', whiteSpace: 'nowrap' }}>{isJa ? "読み" : "Reading"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', whiteSpace: 'nowrap' }}>{isJa ? "五行" : "Element"}</th>
                                <th className="font-bold text-lg" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', whiteSpace: 'nowrap' }}>{isJa ? "意味" : "Meaning"}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {NINE_STARS.map((star) => (
                                <tr
                                    key={star.number}
                                    className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                                >
                                    <td style={{ textAlign: 'center', padding: '0.5rem', verticalAlign: 'middle' }} data-label="">
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <div style={{ width: '64px', height: '64px' }}>
                                                <NineStarIcon colorName={star.color} className="w-full h-full" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-bold text-2xl" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', verticalAlign: 'middle', whiteSpace: 'nowrap' }} data-label={isJa ? "名称" : "Name"}>{star.kanji}</td>
                                    <td className="text-xl" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', verticalAlign: 'middle', whiteSpace: 'nowrap' }} data-label={isJa ? "読み" : "Reading"}>{isJa ? star.reading : star.romaji}</td>
                                    <td className="text-xl" style={{ textAlign: 'center', padding: '1.25rem 1.5rem', verticalAlign: 'middle', whiteSpace: 'nowrap' }} data-label={isJa ? "五行" : "Element"}>{isJa ? star.elementKanji : star.element}</td>
                                    <td className="text-lg" style={{ textAlign: 'left', padding: '1.25rem 1.5rem', verticalAlign: 'middle' }} data-label={isJa ? "意味" : "Meaning"}>{isJa ? star.meaningJa : star.meaning}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AboutWrapper>
    );
}
