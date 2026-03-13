import React from "react";
import { MoonPhase } from "@/lib/calculations";
import Icon from "./Icon";

interface MoonPhaseIconProps {
  phase: MoonPhase;
  size?: number;
}

export const MoonPhaseIcon: React.FC<MoonPhaseIconProps> = ({ phase, size }) => {
  const { iconType } = phase;

  return (
    <div
      className="moon-phase-icon"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon src={`/images/moon/${iconType}.svg`} alt={phase.phase || iconType} size={size} />
    </div>
  );
};
