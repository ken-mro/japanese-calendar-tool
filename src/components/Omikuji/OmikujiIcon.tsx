import React from "react";

interface OmikujiIconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const OmikujiIcon: React.FC<OmikujiIconProps> = ({
  size = 24,
  className,
  color = "currentColor",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Hexagonal Box shape */}
      {/* Corrected path for a hexagonal prism standing vertically */}
      <path d="M12 2L4.5 6.5V17.5L12 22L19.5 17.5V6.5L12 2Z" />

      {/* Kanji '吉' (Fortune) simplified or a hole/stick representation 
          Since it's small, let's just add a small stick coming out or detail lines.
          Actually, let's make it look like the box with a small opening.
      */}
      <circle cx="12" cy="8" r="1.5" fill={color} stroke="none" />

      {/* Kanue/detail lines for the hex shape */}
      <path d="M4.5 6.5L12 11L19.5 6.5" />
      <path d="M12 11V22" />
    </svg>
  );
};
