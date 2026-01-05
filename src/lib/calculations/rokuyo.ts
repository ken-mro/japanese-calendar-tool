

export interface Rokuyo {
  name: string;
  nameKanji: string;
  reading: string;
}

const ROKUYO_TYPES: Rokuyo[] = [
  { name: "Taian", nameKanji: "大安", reading: "taian" },             // 0
  { name: "Shakko", nameKanji: "赤口", reading: "shakko" },           // 1
  { name: "Sensho", nameKanji: "先勝", reading: "sensho" },           // 2
  { name: "Tomobiki", nameKanji: "友引", reading: "tomobiki" },       // 3
  { name: "Senbu", nameKanji: "先負", reading: "senbu" },             // 4
  { name: "Butsumetsu", nameKanji: "仏滅", reading: "butsumetsu" },   // 5
];

export function getRokuyo(date: Date): Rokuyo {
    const { month, day } = getOldCalendarDate(date);
    
    // Rokuyo formula: (Month + Day) % 6
    const index = (month + day) % 6;
    
    return ROKUYO_TYPES[index];
}

function getJulianDay(date: Date): number {
    let Y = date.getFullYear();
    let M = date.getMonth() + 1;
    const D = date.getDate();

    if (M <= 2) {
        Y -= 1;
        M += 12;
    }
    const A = Math.floor(Y / 100);
    const B = 2 - A + Math.floor(A / 4);
    return Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + D + B - 1524.5;
}

function getOldCalendarDate(date: Date): { month: number; day: number } {
    // A simplified "Old Calendar" calculator
    // This logic approximates the Tenpo-reki (Old Japanese Calendar)
    // capable of determining the lunar month and day for Rokuyo purposes.
    
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    
    // Convert to Julian Date
    const jd = getJulianDay(date);
    
    // Synodic period
    const synodic = 29.530588861;
    const baseNewMoon = 2440587.5; // 1970-01-07 roughly
    
    // Calc number of moons
    const n = Math.floor((jd - baseNewMoon) / synodic);
    const newMoonJD = baseNewMoon + (n * synodic);
    
    // Lunar Day (1-30)
    let lunarDay = Math.floor(jd - newMoonJD) + 1;
    if (lunarDay < 1) lunarDay = 1;
    
    // Lunar Month Calculation
    // Logic:
    // 1. Identify the Winter Solstice (Toji) of the relevant year.
    //    Winter Solstice is always in Month 11 of the Old Calendar.
    // 2. Count months from Month 11.

    let WS_Year = year;
    // If we are in Jan/Feb, we might need to look at previous year's Winter Solstice
    if (month < 3) WS_Year = year - 1; 
    
    // Winter Solstice Date (Approx Dec 21/22)
    // Simple approx: Dec 22
    const wsDate = new Date(WS_Year, 11, 22); 
    const wsJD = getJulianDay(wsDate);
    
    // Find the New Moon strictly BEFORE or ON the Winter Solstice.
    // This New Moon marks the start of Month 11.
    const k_ws_start_mon11 = Math.floor((wsJD - baseNewMoon) / synodic);
    
    // Current New Moon Index (calculated earlier as n)
    const k_curr = n;
    
    // Difference in months from Month 11
    const diffMonths = k_curr - k_ws_start_mon11;
    let calcMonth = 11 + diffMonths;
    
    // Adjust to 1-12 range
    while (calcMonth > 12) calcMonth -= 12;
    while (calcMonth < 1) calcMonth += 12;
     
    return { month: calcMonth, day: lunarDay };
}
