"use client";

import { getSekkiColor } from "@/lib/calculations";

// 24 unique SVG icons for each solar term
// Each returns SVG paths/elements drawn in a 24x24 viewBox
function getSekkiSvg(index: number): React.ReactNode {
  switch (index) {
    case 0: // 小寒 Shokan - Minor Cold: small snowflake
      return (
        <g>
          <line x1="12" y1="4" x2="12" y2="20" stroke="white" strokeWidth="1.5" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="1.5" />
          <line x1="6.5" y1="6.5" x2="17.5" y2="17.5" stroke="white" strokeWidth="1" />
          <line x1="17.5" y1="6.5" x2="6.5" y2="17.5" stroke="white" strokeWidth="1" />
          <circle cx="12" cy="12" r="2" fill="white" />
        </g>
      );
    case 1: // 大寒 Daikan - Major Cold: large ice crystal
      return (
        <g>
          <line x1="12" y1="3" x2="12" y2="21" stroke="white" strokeWidth="2" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" />
          <line x1="6" y1="6" x2="18" y2="18" stroke="white" strokeWidth="1.5" />
          <line x1="18" y1="6" x2="6" y2="18" stroke="white" strokeWidth="1.5" />
          <line x1="12" y1="3" x2="9" y2="6" stroke="white" strokeWidth="1.5" />
          <line x1="12" y1="3" x2="15" y2="6" stroke="white" strokeWidth="1.5" />
          <line x1="12" y1="21" x2="9" y2="18" stroke="white" strokeWidth="1.5" />
          <line x1="12" y1="21" x2="15" y2="18" stroke="white" strokeWidth="1.5" />
        </g>
      );
    case 2: // 立春 Risshun - Start of Spring: cherry blossom
      return (
        <g>
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx="12"
              cy="7"
              rx="2.5"
              ry="4"
              fill="white"
              opacity="0.85"
              transform={`rotate(${angle} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="2.5" fill="white" />
        </g>
      );
    case 3: // 雨水 Usui - Rain Water: raindrops
      return (
        <g>
          <path d="M8 5 Q8 2, 8 5 Q6 9, 8 11 Q10 9, 8 5Z" fill="white" opacity="0.9" />
          <path d="M14 8 Q14 5, 14 8 Q12 12, 14 14 Q16 12, 14 8Z" fill="white" opacity="0.9" />
          <path d="M9 14 Q9 11, 9 14 Q7 18, 9 20 Q11 18, 9 14Z" fill="white" opacity="0.7" />
        </g>
      );
    case 4: // 啓蟄 Keichitsu - Insects Awaken: butterfly
      return (
        <g>
          <line x1="12" y1="6" x2="12" y2="19" stroke="white" strokeWidth="1.5" />
          <ellipse cx="8.5" cy="10" rx="4" ry="3.5" fill="white" opacity="0.85" />
          <ellipse cx="15.5" cy="10" rx="4" ry="3.5" fill="white" opacity="0.85" />
          <ellipse cx="9" cy="15.5" rx="3" ry="2.5" fill="white" opacity="0.65" />
          <ellipse cx="15" cy="15.5" rx="3" ry="2.5" fill="white" opacity="0.65" />
          <line x1="12" y1="6" x2="9" y2="4" stroke="white" strokeWidth="1" />
          <line x1="12" y1="6" x2="15" y2="4" stroke="white" strokeWidth="1" />
        </g>
      );
    case 5: // 春分 Shumbun - Spring Equinox: flower (6 petals)
      return (
        <g>
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={angle}
              cx="12"
              cy="7.5"
              rx="2.2"
              ry="3.5"
              fill="white"
              opacity="0.8"
              transform={`rotate(${angle} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="2.5" fill="white" />
        </g>
      );
    case 6: // 清明 Seimei - Clear and Bright: young leaf/sprout
      return (
        <g>
          <path d="M12 20 Q12 12, 12 8" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M12 12 Q6 6, 5 4 Q9 5, 12 12" fill="white" opacity="0.85" />
          <path d="M12 10 Q18 4, 19 3 Q15 5, 12 10" fill="white" opacity="0.85" />
          <path d="M12 15 Q7 11, 5 10 Q8 12, 12 15" fill="white" opacity="0.7" />
        </g>
      );
    case 7: // 穀雨 Kokuu - Grain Rain: grain stalk with rain
      return (
        <g>
          <path d="M12 20 L12 8" stroke="white" strokeWidth="1.5" />
          <ellipse cx="10" cy="7" rx="1.5" ry="2.5" fill="white" opacity="0.8" transform="rotate(-20 10 7)" />
          <ellipse cx="14" cy="6" rx="1.5" ry="2.5" fill="white" opacity="0.8" transform="rotate(20 14 6)" />
          <ellipse cx="12" cy="5" rx="1.5" ry="2.5" fill="white" opacity="0.8" />
          <line x1="5" y1="14" x2="5" y2="17" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="19" y1="12" x2="19" y2="15" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="7" y1="18" x2="7" y2="20" stroke="white" strokeWidth="1" opacity="0.6" />
        </g>
      );
    case 8: // 立夏 Rikka - Start of Summer: sun
      return (
        <g>
          <circle cx="12" cy="12" r="4.5" fill="white" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="12"
              y1="5"
              x2="12"
              y2="3"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              transform={`rotate(${angle} 12 12)`}
            />
          ))}
        </g>
      );
    case 9: // 小満 Shoman - Grain Buds: budding plant
      return (
        <g>
          <path d="M12 21 L12 10" stroke="white" strokeWidth="1.5" />
          <circle cx="12" cy="7" r="3.5" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="12" cy="7" r="1.5" fill="white" />
          <path d="M12 14 Q8 12, 6 10" stroke="white" strokeWidth="1" fill="none" />
          <path d="M12 16 Q16 14, 18 12" stroke="white" strokeWidth="1" fill="none" />
        </g>
      );
    case 10: // 芒種 Boshu - Grain in Ear: wheat ear
      return (
        <g>
          <path d="M12 21 L12 6" stroke="white" strokeWidth="1.5" />
          <path d="M12 6 L9 3" stroke="white" strokeWidth="1" />
          <path d="M12 6 L15 3" stroke="white" strokeWidth="1" />
          <path d="M12 8 L8 5" stroke="white" strokeWidth="1" />
          <path d="M12 8 L16 5" stroke="white" strokeWidth="1" />
          <path d="M12 10 L8 8" stroke="white" strokeWidth="1" />
          <path d="M12 10 L16 8" stroke="white" strokeWidth="1" />
          <path d="M12 13 L9 11" stroke="white" strokeWidth="1" />
          <path d="M12 13 L15 11" stroke="white" strokeWidth="1" />
          <path d="M12 16 L10 14" stroke="white" strokeWidth="1" />
          <path d="M12 16 L14 14" stroke="white" strokeWidth="1" />
        </g>
      );
    case 11: // 夏至 Geshi - Summer Solstice: blazing sun
      return (
        <g>
          <circle cx="12" cy="12" r="5" fill="white" />
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <line
              key={angle}
              x1="12"
              y1="4.5"
              x2="12"
              y2="2.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${angle} 12 12)`}
            />
          ))}
        </g>
      );
    case 12: // 小暑 Shosho - Minor Heat: heat waves
      return (
        <g>
          <path d="M6 8 Q8 6, 10 8 Q12 10, 14 8 Q16 6, 18 8" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M6 12 Q8 10, 10 12 Q12 14, 14 12 Q16 10, 18 12" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M6 16 Q8 14, 10 16 Q12 18, 14 16 Q16 14, 18 16" stroke="white" strokeWidth="1.5" fill="none" />
        </g>
      );
    case 13: // 大暑 Taisho - Major Heat: intense sun with waves
      return (
        <g>
          <circle cx="12" cy="8" r="4" fill="white" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="12"
              y1="2"
              x2="12"
              y2="0.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              transform={`rotate(${angle} 12 8)`}
            />
          ))}
          <path d="M5 17 Q8 15, 11 17 Q14 19, 17 17" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M5 20 Q8 18, 11 20 Q14 22, 17 20" stroke="white" strokeWidth="1.5" fill="none" />
        </g>
      );
    case 14: // 立秋 Risshu - Start of Autumn: maple leaf
      return (
        <g>
          <path d="M12 21 L12 13" stroke="white" strokeWidth="1.5" />
          <path d="M12 13 L8 5 L10 10 L5 8 L10 12 L4 14 L10 13 L12 13" fill="white" opacity="0.85" />
          <path d="M12 13 L16 5 L14 10 L19 8 L14 12 L20 14 L14 13 L12 13" fill="white" opacity="0.85" />
          <path d="M12 13 L12 4" stroke="white" strokeWidth="1" />
        </g>
      );
    case 15: // 処暑 Shosho - End of Heat: wind
      return (
        <g>
          <path d="M4 8 Q10 6, 16 8 Q19 9, 20 7" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M3 12 Q9 10, 15 12 Q18 13, 19 11" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M5 16 Q11 14, 17 16 Q20 17, 21 15" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>
      );
    case 16: // 白露 Hakuro - White Dew: dew drops on leaf
      return (
        <g>
          <path d="M4 18 Q12 4, 20 18" stroke="white" strokeWidth="1.5" fill="none" />
          <line x1="12" y1="6" x2="12" y2="18" stroke="white" strokeWidth="1" />
          <circle cx="9" cy="12" r="1.5" fill="white" opacity="0.9" />
          <circle cx="14" cy="10" r="1.2" fill="white" opacity="0.8" />
          <circle cx="11" cy="15" r="1" fill="white" opacity="0.7" />
        </g>
      );
    case 17: // 秋分 Shubun - Autumn Equinox: harvest moon
      return (
        <g>
          <circle cx="12" cy="10" r="6" fill="white" opacity="0.9" />
          <circle cx="15" cy="10" r="5.5" fill="currentColor" opacity="0.3" />
          <path d="M6 19 Q8 17, 10 19 Q12 21, 14 19 Q16 17, 18 19" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
        </g>
      );
    case 18: // 寒露 Kanro - Cold Dew: dewdrop
      return (
        <g>
          <path d="M12 4 Q7 12, 7 15 Q7 20, 12 20 Q17 20, 17 15 Q17 12, 12 4Z" fill="white" opacity="0.85" />
          <ellipse cx="10.5" cy="14" rx="1.5" ry="2" fill="currentColor" opacity="0.2" transform="rotate(-15 10.5 14)" />
        </g>
      );
    case 19: // 霜降 Soko - Frost Falls: frost/crystal pattern
      return (
        <g>
          <line x1="12" y1="3" x2="12" y2="21" stroke="white" strokeWidth="1" />
          <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="1" />
          <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" stroke="white" strokeWidth="1" />
          <line x1="18.5" y1="5.5" x2="5.5" y2="18.5" stroke="white" strokeWidth="1" />
          <circle cx="12" cy="3" r="1" fill="white" />
          <circle cx="12" cy="21" r="1" fill="white" />
          <circle cx="3" cy="12" r="1" fill="white" />
          <circle cx="21" cy="12" r="1" fill="white" />
          <circle cx="5.5" cy="5.5" r="0.8" fill="white" />
          <circle cx="18.5" cy="5.5" r="0.8" fill="white" />
          <circle cx="5.5" cy="18.5" r="0.8" fill="white" />
          <circle cx="18.5" cy="18.5" r="0.8" fill="white" />
        </g>
      );
    case 20: // 立冬 Ritto - Start of Winter: bare tree
      return (
        <g>
          <line x1="12" y1="21" x2="12" y2="8" stroke="white" strokeWidth="2" />
          <line x1="12" y1="12" x2="7" y2="7" stroke="white" strokeWidth="1.5" />
          <line x1="12" y1="12" x2="17" y2="7" stroke="white" strokeWidth="1.5" />
          <line x1="12" y1="9" x2="8" y2="4" stroke="white" strokeWidth="1" />
          <line x1="12" y1="9" x2="16" y2="4" stroke="white" strokeWidth="1" />
          <line x1="12" y1="16" x2="8" y2="13" stroke="white" strokeWidth="1" />
          <line x1="12" y1="16" x2="16" y2="13" stroke="white" strokeWidth="1" />
        </g>
      );
    case 21: // 小雪 Shosetsu - Minor Snow: light snowfall
      return (
        <g>
          <circle cx="8" cy="6" r="1.5" fill="white" opacity="0.7" />
          <circle cx="15" cy="4" r="1.2" fill="white" opacity="0.6" />
          <circle cx="6" cy="12" r="1.8" fill="white" opacity="0.8" />
          <circle cx="17" cy="10" r="1.3" fill="white" opacity="0.7" />
          <circle cx="12" cy="9" r="1" fill="white" opacity="0.5" />
          <circle cx="10" cy="17" r="1.5" fill="white" opacity="0.8" />
          <circle cx="16" cy="16" r="1.2" fill="white" opacity="0.6" />
          <circle cx="7" cy="20" r="1" fill="white" opacity="0.5" />
        </g>
      );
    case 22: // 大雪 Taisetsu - Major Snow: heavy snowfall
      return (
        <g>
          <circle cx="7" cy="5" r="2" fill="white" opacity="0.8" />
          <circle cx="15" cy="4" r="2.2" fill="white" opacity="0.85" />
          <circle cx="5" cy="11" r="2.5" fill="white" opacity="0.9" />
          <circle cx="12" cy="9" r="1.8" fill="white" opacity="0.75" />
          <circle cx="18" cy="10" r="2" fill="white" opacity="0.8" />
          <circle cx="8" cy="17" r="2.2" fill="white" opacity="0.85" />
          <circle cx="16" cy="16" r="2.5" fill="white" opacity="0.9" />
          <circle cx="11" cy="20" r="1.5" fill="white" opacity="0.7" />
        </g>
      );
    case 23: // 冬至 Toji - Winter Solstice: crescent moon (longest night)
      return (
        <g>
          <circle cx="12" cy="12" r="7" fill="white" />
          <circle cx="16" cy="10" r="6.5" fill="currentColor" />
          <circle cx="8" cy="6" r="0.8" fill="white" opacity="0.4" />
          <circle cx="5" cy="14" r="0.5" fill="white" opacity="0.3" />
          <circle cx="18" cy="18" r="0.6" fill="white" opacity="0.3" />
        </g>
      );
    default:
      return <circle cx="12" cy="12" r="6" fill="white" />;
  }
}

interface SekkiIconProps {
  termIndex: number;
  isExactDate?: boolean;
  /** Size of the square in px. Defaults to 48. */
  size?: number;
}

export function SekkiIcon({ termIndex, isExactDate, size = 48 }: SekkiIconProps) {
  const bgColor = getSekkiColor(termIndex);
  const svgSize = Math.round(size * 0.75);

  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        flexShrink: 0,
        userSelect: "none",
        overflow: "hidden",
        color: bgColor,
        boxShadow: isExactDate ? `0 0 0 3px ${bgColor}40, 0 0 8px ${bgColor}60` : undefined,
      }}
    >
      <svg
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", flexShrink: 0 }}
      >
        {getSekkiSvg(termIndex)}
      </svg>
    </div>
  );
}
