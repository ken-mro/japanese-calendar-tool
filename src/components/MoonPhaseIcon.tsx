import React from "react";
import { MoonPhase } from "@/lib/calculations";

interface MoonPhaseIconProps {
  phase: MoonPhase;
  size?: number;
}

export const MoonPhaseIcon: React.FC<MoonPhaseIconProps> = ({
  phase,
  size = 48,
}) => {
  const { iconType } = phase;

  // Use simple SVG path logic for 8 phases
  // We can draw a circle and simulate the shadow stroke.

  // Colors: Moon is usually Kogane (#c6aa58) or White (#fcfaf2).
  // Background: Dark Blue (#1e2a4a).

  const width = size;
  const height = size;

  const moonColor = "#F6D365"; // Beautiful Moon Yellow
  const dark = "#1e2a4a";

  const renderIcon = () => {
    // Explicit SVGs for readability and reliability

    // Scale 0-24 viewbox.

    if (iconType === "new-moon") {
      return (
        <svg width={width} height={height} viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill={dark}
            stroke={moonColor}
            strokeWidth="1"
            opacity="0.8"
          />
        </svg>
      );
    }

    if (iconType === "full-moon") {
      return (
        <svg width={width} height={height} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill={moonColor} />
          <circle cx="12" cy="12" r="10" fill="url(#glow)" opacity="0.5" />
          <defs>
            <radialGradient id="glow">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      );
    }

    // For others, use paths.
    // Waxing = Right side lit.
    // Waning = Left side lit.

    // Crescent: Sliver.
    // Quarter: Half.
    // Gibbous: Bulge.

    let d = "";

    // Switch for paths
    switch (iconType) {
      case "waxing-crescent":
        // Right sliver
        // Path: M12,2 A10,10 0 0,1 12,22 A6,10 0 0,0 12,2 Z;
        d = "M12,2 A10,10 0 0,1 12,22 A6,10 0 0,0 12,2 Z";
        break;

      case "first-quarter":
        // Right half lit
        d = "M12,2 A10,10 0 0,1 12,22 L12,2 Z";
        break;

      case "waxing-gibbous":
        // Right half + Left bulge
        d = "M12,2 A10,10 0 0,1 12,22 A6,10 0 0,1 12,2 Z";
        break;

      case "waning-gibbous":
        // Left half + Right bulge
        d = "M12,2 A10,10 0 0,0 12,22 A6,10 0 0,0 12,2 Z";
        break;

      case "last-quarter":
        // Left half lit
        d = "M12,2 A10,10 0 0,0 12,22 L12,2 Z";
        break;

      case "waning-crescent":
        // Left sliver `(`
        d = "M12,2 A10,10 0 0,0 12,22 A6,10 0 0,1 12,2 Z";
        break;
    }

    return (
      <svg width={width} height={height} viewBox="0 0 24 24">
        {/* Background Shadow Circle */}
        <circle
          cx="12"
          cy="12"
          r="10"
          fill={dark}
          stroke={moonColor}
          strokeWidth="0.5"
        />
        {/* Lit Part */}
        <path d={d} fill={moonColor} />
      </svg>
    );
  };

  return (
    <div
      className="moon-phase-icon"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {renderIcon()}
    </div>
  );
};
