
// Astronomical Constants and Helpers

const PI = Math.PI;
const PI2 = Math.PI * 2;
const RAD = Math.PI / 180.0;
const J2000 = 2451545.0;

function toRad(deg: number) { return deg * RAD; }
function normalizeRad(rad: number) {
    rad = rad % PI2;
    if (rad < 0) rad += PI2;
    return rad;
}

// Julian Day
function getJulianDay(date: Date): number {
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    const D = date.getDate();

    if (M <= 2) { Y -= 1; M += 12; }
    const A = Math.floor(Y / 100);
    const B = 2 - A + Math.floor(A / 4);

    return Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + D + B - 1524.5;
}

// Sun Position (Simplified VSOP87)
function getSunLongitude(jd: number): number {
    const T = (jd - J2000) / 36525.0;
    const L0 = normalizeRad(toRad(280.46646 + 36000.76983 * T + 0.0003032 * T * T));
    const M = normalizeRad(toRad(357.52911 + 35999.05029 * T - 0.0001537 * T * T));
    const C = toRad((1.914602 - 0.004817 * T - 0.000014 * T * T) * Math.sin(M)
        + (0.019993 - 0.000101 * T) * Math.sin(2 * M)
        + 0.000289 * Math.sin(3 * M));
    const trueLong = L0 + C;
    const Omega = toRad(125.04 - 1934.136 * T);
    const lambda = trueLong - toRad(0.00569) - toRad(0.00478) * Math.sin(Omega);

    return normalizeRad(lambda);
}

// Moon Position (Simplified ELP2000-82)
function getMoonLongitude(jd: number): number {
    const T = (jd - J2000) / 36525.0;
    const Lp = normalizeRad(toRad(218.31643 + 481267.88128 * T));
    const D = normalizeRad(toRad(297.85020 + 445267.11140 * T));
    const M = normalizeRad(toRad(357.52911 + 35999.05029 * T));
    const Mp = normalizeRad(toRad(134.96341 + 477198.86756 * T));
    const F = normalizeRad(toRad(93.27209 + 483202.01752 * T));

    const sin = Math.sin;
    const SumL = 6.288774 * sin(Mp)
        + 1.274027 * sin(2 * D - Mp)
        + 0.658314 * sin(2 * D)
        + 0.213618 * sin(2 * Mp)
        - 0.185116 * sin(M)
        - 0.114332 * sin(2 * F);

    return normalizeRad(Lp + toRad(SumL));
}

function searchNewMoon(approxJD: number): number {
    let t = approxJD;
    for (let i = 0; i < 5; i++) {
        const sl = getSunLongitude(t);
        const ml = getMoonLongitude(t);
        let diff = ml - sl;
        if (diff < 0) diff += PI2;
        if (diff > PI) diff -= PI2;
        const delta = diff / (PI2 / 29.53);
        t -= delta;
        if (Math.abs(delta) < 1e-5) break;
    }
    return t;
}

// --- Main Tenpo-reki Logic ---

// Timezone offset for JST (9 hours)
const TIME_ZONE_OFFSET = 9.0 / 24.0;

export interface Rokuyo {
    name: string;
    nameKanji: string;
    reading: string;
    readingHiragana: string;
    meaning: string;
    meaningJa: string;
}

export const ROKUYO_TYPES: Rokuyo[] = [
    { name: "Taian", nameKanji: "大安", reading: "taian", readingHiragana: "たいあん", meaning: "The most lucky day. Good for everything, especially weddings.", meaningJa: "大吉。万事において成功するとされる吉日。" },
    { name: "Shakko", nameKanji: "赤口", reading: "shakko", readingHiragana: "しゃっこう", meaning: "Good luck only at noon, otherwise bad. Be careful with knives and fire.", meaningJa: "正午のみ吉、それ以外は凶。刃物や火の元に注意。" },
    { name: "Sensho", nameKanji: "先勝", reading: "sensho", readingHiragana: "せんしょう", meaning: "Good luck in the morning, bad luck in the afternoon. Good for urgent business.", meaningJa: "午前は吉、午後は凶。急ぐことは吉。" },
    { name: "Tomobiki", nameKanji: "友引", reading: "tomobiki", readingHiragana: "ともびき", meaning: "Good luck in the morning and evening, bad luck at noon. Results in a draw.", meaningJa: "朝夕は吉、正午は凶。勝負事は引き分けになる。" },
    { name: "Senbu", nameKanji: "先負", reading: "senbu", readingHiragana: "せんぶ", meaning: "Bad luck in the morning, good luck in the afternoon. Better to keep calm.", meaningJa: "午前は凶、午後は吉。何事も控えめにするのが良い。" },
    { name: "Butsumetsu", nameKanji: "仏滅", reading: "butsumetsu", readingHiragana: "ぶつめつ", meaning: "Unlucky all day. Avoid celebrations. Appropriate for funerals.", meaningJa: "万事に凶。葬式や法事には適するが、祝い事は避ける。" },
];

export interface OldCalendarDate {
    month: number;
    day: number;
}

export function getOldCalendarDate(date: Date): OldCalendarDate {
    const Y = date.getFullYear();
    // const M = date.getMonth() + 1; // Unused

    const jdTarget = getJulianDay(date);

    let checkYear = Y;
    const approxToji = new Date(Y, 11, 22); // Dec 22
    // If target date is before Dec 22, the previous Toji was last year
    if (date < approxToji) {
        checkYear--;
    }

    // Search previous year Toji (approx Dec 22)
    const approxTojiJD = getJulianDay(new Date(checkYear, 11, 22));

    let tojiJD = approxTojiJD;
    for (let i = 0; i < 5; i++) {
        const l = getSunLongitude(tojiJD - TIME_ZONE_OFFSET);
        let diff = l - (3 * Math.PI / 2); // 270 deg
        while (diff < -PI) diff += PI2;
        while (diff > PI) diff -= PI2;
        tojiJD -= diff / (PI2 / 365.25);
    }

    // Search Saku (New Moon) on or before Toji
    const searchJD = tojiJD;
    let sakuJD_UT = searchNewMoon(searchJD);
    // Ensure Saku is on or before Toji (in JST days)
    // Add buffer of 1.5 days to be safe when checking day integers
    while (sakuJD_UT + TIME_ZONE_OFFSET > tojiJD + TIME_ZONE_OFFSET + 1.0) {
        sakuJD_UT = searchNewMoon(sakuJD_UT - 29);
    }

    // If Saku is WAY before (more than 1 month), move forward?
    // searchNewMoon seeks nearest using gradient.
    // If searchJD was Toji, it finds nearest New Moon.
    // That could be after Toji.
    // So the while loop moves it back.
    // It should be correct.

    const currentSakuUT = sakuJD_UT;

    const moons = [];
    let t = currentSakuUT;

    // Scan 20 moons to ensure coverage
    for (let k = 0; k < 20; k++) {
        moons.push(t);
        t = searchNewMoon(t + 29.53);
    }

    const monthData: { startJD: number; chuki: number[]; isLeap: boolean; monthNum: number }[] = [];

    for (let i = 0; i < moons.length - 1; i++) {
        const startUT = moons[i];
        const nextUT = moons[i + 1];

        const l1 = getSunLongitude(startUT);
        const l2 = getSunLongitude(nextUT);
        const deg1 = l1 * 180 / PI;
        let deg2 = l2 * 180 / PI;
        if (deg2 < deg1) deg2 += 360;

        const chukiList: number[] = [];
        // Scan for multiples of 30 degrees
        const startDeg = Math.ceil(deg1 / 30) * 30;
        const endDeg = Math.floor(deg2 / 30) * 30;

        for (let d = startDeg; d <= endDeg; d += 30) {
            const norm = d % 360;
            chukiList.push(norm);
        }

        monthData.push({
            startJD: startUT,
            chuki: chukiList,
            isLeap: false,
            monthNum: -1
        });
    }

    // Identify Month 11 (containing Toji/270)
    let m11Candidate = -1;
    for (let i = 0; i < monthData.length; i++) {
        if (monthData[i].chuki.includes(270)) {
            m11Candidate = i;
            break;
        }
    }

    // If we didn't find Toji Month (unlikely with this search), fallback to 0
    if (m11Candidate === -1) m11Candidate = 0;

    // JD is based on Noon UT. Midnight JST is JD x.125
    // To get integer day from Midnight JST, we need to shift/floor correctly.
    // jd + 0.5 (shifts to Midnight UT) + 9/24 (shifts to Midnight JST)
    const getDayInt = (jdUT: number) => Math.floor(jdUT + 0.5 + TIME_ZONE_OFFSET);
    const targetDayInt = getDayInt(jdTarget);

    let targetMonthIdx = -1;
    for (let i = 0; i < monthData.length - 1; i++) {
        const s1 = getDayInt(monthData[i].startJD);
        const s2 = getDayInt(monthData[i + 1].startJD);
        if (targetDayInt >= s1 && targetDayInt < s2) {
            targetMonthIdx = i;
            break;
        }
    }
    // Check last month
    if (targetMonthIdx === -1) {
        const lastIdx = monthData.length - 1;
        const sLast = getDayInt(monthData[lastIdx].startJD);
        // We don't have next start, but if it's >= start, assume it's this month?
        // Usually target won't be that far if we scan 20 moons.
        if (targetDayInt >= sLast) {
            targetMonthIdx = lastIdx;
        }
    }

    // If still -1 (target before start?), fallback to 0
    if (targetMonthIdx === -1) targetMonthIdx = 0;

    // Assign Month Numbers
    let prevNum = 11;
    monthData[m11Candidate].monthNum = 11;
    monthData[m11Candidate].isLeap = false; // Toji month is never leap

    // Assign forward
    for (let i = m11Candidate + 1; i <= targetMonthIdx; i++) {
        if (monthData[i].chuki.length === 0) {
            monthData[i].isLeap = true;
            monthData[i].monthNum = prevNum;
        } else {
            monthData[i].isLeap = false;
            prevNum = (prevNum % 12) + 1;
            monthData[i].monthNum = prevNum;
        }
    }

    // Also assign backward logic if target is BEFORE Toji month?
    // We started searching from Year-1 Toji. 01/11/2026 implies Toji was Dec 2025.
    // jdTarget > TojiJD. So targetMonthIdx >= m11Candidate usually.
    // But if target is Dec 1 2026. m11Candidate is Dec 2025. mNextToji is Dec 2026.
    // It should work.

    const finalMonth = monthData[targetMonthIdx];
    const sDate = getDayInt(finalMonth.startJD);
    const dayOfMon = targetDayInt - sDate + 1;

    return {
        month: finalMonth.monthNum,
        day: dayOfMon
    };
}

export function getRokuyo(date: Date): Rokuyo {
    const { month, day } = getOldCalendarDate(date);

    // Rokuyo formula: (Month + Day) % 6
    const index = (month + day) % 6;

    return ROKUYO_TYPES[index];
}
