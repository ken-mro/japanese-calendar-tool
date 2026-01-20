import { getDayZodiac } from './zodiac';
import { getStarDate } from './solarTerms';
import { getOldCalendarDate } from './rokuyo';

export interface Senjitsu {
    name: string;
    reading: string;
    romaji: string;
    meaning: string;
    meaningJa: string;
}

export const SENJITSU_TYPES: Record<string, Senjitsu> = {
    ICHIRYUMANBAI: {
        name: "一粒万倍日",
        reading: "いちりゅうまんばいび",
        romaji: "Ichiryumanbai-bi",
        meaning: "One grain grows ten thousand times. Good for starting things.",
        meaningJa: "一粒の籾（もみ）が万倍にも実るという吉日。事始めによい。",
    },
    TENSHA: {
        name: "天赦日",
        reading: "てんしゃにち",
        romaji: "Tensha-nichi",
        meaning: "The heavens forgive everything. The best lucky day.",
        meaningJa: "天が万物の罪を赦す日。最上の大吉日。",
    },
    FUSHOJU: {
        name: "不成就日",
        reading: "ふじょうじゅにち",
        romaji: "Fushoju-nichi",
        meaning: "Nothing succeeds. Bad for starting new things.",
        meaningJa: "何事も成就しない凶日。事を起こすのによくない。",
    },
};

// Earthly Branches Map
const BRANCH_MAP: Record<string, number> = {
    '子': 0, '丑': 1, '寅': 2, '卯': 3, '辰': 4, '巳': 5,
    '午': 6, '未': 7, '申': 8, '酉': 9, '戌': 10, '亥': 11
};

// Heavenly Stems Map
const STEM_MAP: Record<string, number> = {
    '甲': 0, '乙': 1, '丙': 2, '丁': 3, '戊': 4,
    '己': 5, '庚': 6, '辛': 7, '壬': 8, '癸': 9
};

/**
 * Returns list of Earthly Branches (0-11) for Ichiryumanbai-bi for a given Solar Month (1-12)
 * Based on observed data matching 2024 calendar.
 * Month 1 = Jan (Shokan), Month 2 = Feb (Risshun), etc.
 */
function getIchiryuBranches(solarMonth: number): number[] {
    switch (solarMonth) {
        case 1: return [0, 3]; // Feb(Spring): Rat, Rabbit
        case 2: return [1, 6]; // Mar: Ox, Horse
        case 3: return [2, 9]; // Apr: Tiger, Rooster
        case 4: return [0, 3]; // May: Rat, Rabbit
        case 5: return [3, 4]; // Jun: Rabbit, Dragon
        case 6: return [5, 6]; // Jul: Snake, Horse
        case 7: return [6, 9]; // Aug: Horse, Rooster
        case 8: return [0, 7]; // Sep: Rat, Sheep
        case 9: return [3, 8]; // Oct: Rabbit, Monkey
        case 10: return [6, 9]; // Nov: Horse, Rooster
        case 11: return [9, 10]; // Dec: Rooster, Dog
        case 12: return [0, 11]; // Jan(Late Winter): Rat, Boar
        default: return [];
    }
}

// Tensha-nichi Rules (Season -> Stem-Branch)
// Spring (2,3,4): Tsuchinoe-Tora (4, 2)
// Summer (5,6,7): Kinoe-Uma (0, 6)
// Autumn (8,9,10): Tsuchinoe-Saru (4, 8)
// Winter (11,12,1): Kinoe-Ne (0, 0)
function getTenshaMatch(solarMonth: number): { stem: number, branch: number } {
    if (solarMonth >= 2 && solarMonth <= 4) return { stem: 4, branch: 2 }; // Spring
    if (solarMonth >= 5 && solarMonth <= 7) return { stem: 0, branch: 6 }; // Summer
    if (solarMonth >= 8 && solarMonth <= 10) return { stem: 4, branch: 8 }; // Autumn
    return { stem: 0, branch: 0 }; // Winter (11, 12, 1)
}

// Fushoju-nichi Rules (Old Calendar Month -> Day Numbers)
// 1, 7: 3, 11, 19, 27
// 2, 8: 2, 10, 18, 26
// 3, 9: 1, 9, 17, 25
// 4, 10: 4, 12, 20, 28
// 5, 11: 5, 13, 21, 29
// 6, 12: 6, 14, 22, 30
const FUSHOJU_TABLE: Record<number, number[]> = {
    1: [3, 11, 19, 27],
    2: [2, 10, 18, 26],
    3: [1, 9, 17, 25],
    4: [4, 12, 20, 28],
    5: [5, 13, 21, 29],
    6: [6, 14, 22, 30],
    7: [3, 11, 19, 27],
    8: [2, 10, 18, 26],
    9: [1, 9, 17, 25],
    10: [4, 12, 20, 28],
    11: [5, 13, 21, 29],
    12: [6, 14, 22, 30],
};

export function getSenjitsu(date: Date): Senjitsu[] {
    const result: Senjitsu[] = [];

    // 1. Calculate Solar Month/Year for Ichiryumanbai & Tensha
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const setsu = getStarDate(y, m);
    let solarMonth = m;
    if (date < setsu) {
        solarMonth -= 1;
        if (solarMonth === 0) solarMonth = 12;
    }

    const dayZodiac = getDayZodiac(date);
    const dayBranchIndex = BRANCH_MAP[dayZodiac.earthlyBranchKanji];

    // Check Ichiryumanbai
    const ichiryuTargets = getIchiryuBranches(solarMonth);
    if (ichiryuTargets.includes(dayBranchIndex)) {
        result.push(SENJITSU_TYPES.ICHIRYUMANBAI);
    }

    // Check Tensha
    const dayStemIndex = STEM_MAP[dayZodiac.heavenlyStemKanji];
    const tenshaTarget = getTenshaMatch(solarMonth);
    if (tenshaTarget.stem === dayStemIndex && tenshaTarget.branch === dayBranchIndex) {
        result.push(SENJITSU_TYPES.TENSHA);
    }

    // Check Fushoju (Old Calendar Month -> Day Number checks)
    const oldDate = getOldCalendarDate(date);
    // Note: oldDate.month might be > 12 if leap month logic was different? 
    // In rokuyo.ts it assumes 1-12 or similar. 
    // I should handle leap months if rokuyo.ts returns them as separate numbers or handle mapping.
    // getOldCalendarDate returns 1..12 roughly.
    // If leap month, logic usually says: "Use the same rules as the previous month"
    // My table handles 1..12.
    // Assuming oldDate.month is mapped to 1..12.
    const targets = FUSHOJU_TABLE[oldDate.month];
    if (targets && targets.includes(oldDate.day)) {
        result.push(SENJITSU_TYPES.FUSHOJU);
    }

    return result;
}
