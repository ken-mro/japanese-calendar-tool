import React from "react";
import { MoonPhase } from "@/lib/calculations";
import Icon from "./Icon";

interface MoonPhaseIconProps {
  phase: MoonPhase;
  size?: number;
}

export const MoonPhaseIcon: React.FC<MoonPhaseIconProps> = ({ phase }) => {
  const { iconType } = phase;

  // Map iconType to filename
  const getIconFilename = (type: string): string => {
    switch (type) {
      case "new-moon":
        return "new-moon.svg";
      case "waxing-crescent":
        return "waxing-crescent-moon.svg";
      case "first-quarter":
        return "first-quarter-moon.svg";
      case "waxing-gibbous":
        return "waxing-gibbous-moon.svg";
      case "full-moon":
        return "full-moon.svg";
      case "waning-gibbous":
        return "waning-gibbous-moon.svg";
      case "last-quarter":
        return "last-quarter-moon.svg";
      case "waning-crescent":
        return "waning-crescent-moon.svg";
      default:
        return "full-moon.svg"; // Fallback
    }
  };

  const filename = getIconFilename(iconType);

  return (
    <div
      className="moon-phase-icon"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon src={`/images/moon/${filename}`} alt={phase.phase || iconType} />
    </div>
  );
};
