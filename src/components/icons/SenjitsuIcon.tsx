"use client";

import { Senjitsu } from "@/lib/calculations";

interface SenjitsuIconProps {
  senjitsu: Senjitsu;
  size?: number;
}

export function SenjitsuIcon({ senjitsu, size = 48 }: SenjitsuIconProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
        fontSize: `${size * 0.45}px`,
        lineHeight: 1,
        userSelect: "none",
        flexShrink: 0,
        backgroundColor: senjitsu.isLucky
          ? "var(--accent-color, #d44d60)"
          : "var(--color-ginnezumi, #718096)",
      }}
    >
      {senjitsu.name[0]}
    </div>
  );
}
