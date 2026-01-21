"use client";

import { useI18n, useLanguage } from "@/lib/i18n/config";
import { type Senjitsu } from "@/lib/calculations";
import { ResultCard } from "./ResultCard";
import Icon from "../icons/Icon";

interface SenjitsuCardProps {
    senjitsu: Senjitsu;
}

export function SenjitsuCard({ senjitsu }: SenjitsuCardProps) {
    const { t } = useI18n();
    const language = useLanguage();
    const useKanji = language === "ja";

    // Determine icon based on senjitsu type or use simple fallback
    // Since we don't have dedicated icons yet, we'll try to map common ones or just text
    // For now, let's use a generic approach or maybe assume images exist later.
    // We can use the 'romaji' to pick an icon if we had them.
    // For now, let's use a styling that distinguishes them?
    // Or just pass no icon and let ResultCard handle it (if it supports no icon).

    // Actually, let's try to load a generic icon if it exists, otherwise ResultCard might show nothing?
    // Let's use a dynamic path and if it fails, the Icon component might handle it?
    // The Icon component likely just renders an img.

    // Let's assume we might add icons later. 
    // For Ichiryumanbai -> 'seed.svg'? 
    // For now I'll point to a placeholder logic.
    // But to avoid broken images, I will just omit the icon prop for now, 
    // OR use the 'romaji' lowercased which is a good pattern.
    // The user can add images later.

    const iconName = senjitsu.romaji.toLowerCase().replace("-", "_");

    return (
        <ResultCard
            icon={
                <div
                    className="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xl select-none shrink-0"
                    style={{ backgroundColor: senjitsu.isLucky ? "var(--accent-color, #d44d60)" : "var(--color-ginnezumi, #718096)" }}
                >
                    {senjitsu.name[0]}
                </div>
            }
            title={t("result.senjitsu")} // We need to add this key to i18n
            value={useKanji ? senjitsu.name : senjitsu.romaji}
            subtitle={!useKanji ? senjitsu.name : undefined}
            note={useKanji ? senjitsu.meaningJa : senjitsu.meaning}
        />
    );
}
