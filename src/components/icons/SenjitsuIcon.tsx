"use client";

import { Senjitsu } from "@/lib/calculations";

interface SenjitsuIconProps {
  senjitsu: Senjitsu;
}

export function SenjitsuIcon({ senjitsu }: SenjitsuIconProps) {
  return (
    <div
      className="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xl select-none shrink-0"
      style={{
        backgroundColor: senjitsu.isLucky
          ? "var(--accent-color, #d44d60)"
          : "var(--color-ginnezumi, #718096)",
      }}
    >
      {senjitsu.name[0]}
    </div>
  );
}
