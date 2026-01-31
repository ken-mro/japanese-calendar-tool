
export interface MoonPhase {
  phase: string;      // English name (e.g. "Full Moon")
  phaseKanji: string; // Japanese name (e.g. "満月")
  age: number;        // Moon Age (0.0 - 29.5)
  iconType: string;   // Identifier for icon (0-7 for 8 phases)
}

// 8 Phases
const MOON_PHASES = [
  { name: "New Moon", kanji: "新月", id: "new-moon" },        // 0
  { name: "Waxing Crescent", kanji: "三日月", id: "waxing-crescent-moon" }, // 1
  { name: "First Quarter", kanji: "上弦の月", id: "first-quarter-moon" },   // 2
  { name: "Waxing Gibbous", kanji: "十三夜月", id: "waxing-gibbous-moon" }, // 3 (Approx name)
  { name: "Full Moon", kanji: "満月", id: "full-moon" },          // 4
  { name: "Waning Gibbous", kanji: "寝待月", id: "waning-gibbous-moon" }, // 5 (Approx name)
  { name: "Last Quarter", kanji: "下弦の月", id: "last-quarter-moon" },    // 6
  { name: "Waning Crescent", kanji: "有明月", id: "waning-crescent-moon" }, // 7
];

export function getMoonPhase(date: Date): MoonPhase {
    // Calculate Moon Age
    const age = getMoonAge(date);
    
    // Determine Phase Index (0-7)
    // 8 phases over 29.53 days => 3.69 days per phase approx?
    // Or strictly by angle?
    // Using simple mapping based on Age for display icons.
    
    // New Moon: 28.5 - 1.0 (Center 0)
    // Waxing Crescent: 1.0 - 6.4
    // First Quarter: 6.4 - 8.4 (Center 7.4)
    // Waxing Gibbous: 8.4 - 13.8
    // Full Moon: 13.8 - 15.8 (Center 14.8)
    // Waning Gibbous: 15.8 - 21.1
    // Last Quarter: 21.1 - 23.1 (Center 22.1)
    // Waning Crescent: 23.1 - 28.5
    
    const synodic = 29.53059;
    
    // Clean normalized age for phase calculation (center new moon at 0)
    // Age 0 = New Moon.
    
    // Define centers:
    // 0: 0
    // 1: 3.7
    // 2: 7.4
    // 3: 11.1
    // 4: 14.8 (Full)
    // 5: 18.5
    // 6: 22.1
    // 7: 25.8
    
    // Let's divide the circle into 8 slices of 45 degrees.
    // 29.53 / 8 = 3.69 days per slice.
    
    // Shift ag by half a slice to center "New Moon" at 0.
    const slice = synodic / 8;
    const shiftedAge = (age + slice / 2) % synodic;
    const phaseIndex = Math.floor(shiftedAge / slice);
    
    const phaseInfo = MOON_PHASES[phaseIndex];
    
    return {
        phase: phaseInfo.name,
        phaseKanji: phaseInfo.kanji,
        age: parseFloat(age.toFixed(1)), // 1 decimal
        iconType: phaseInfo.id
    };
}

function getMoonAge(date: Date): number {
    // Based on known New Moon
    // 2000-01-06 18:14 UTC
    
    // Convert input date (which is usually local midnight or specific time) to UTC comparison?
    // App passes `targetDate`. Usually user considers "The Day".
    // We treat it as 12:00 PM for average moon age of the day? 
    // Or 00:00?
    // Usually Moon Age is displayed for Noon.
    
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    
    // Use Noon for calculation
    const target = new Date(y, m, d, 12, 0, 0);
    const knownNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14, 0)); // UTC
    
    const diff = target.getTime() - knownNewMoon.getTime();
    const synodic = 29.530588861;
    const days = diff / (1000 * 60 * 60 * 24);
    
    let age = days % synodic;
    if (age < 0) age += synodic;
    
    return age;
}
