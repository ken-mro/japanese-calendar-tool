import React from "react";

interface ResultCardProps {
  /**
   * Additional class names for the card container (e.g. "western-year")
   */
  className?: string;
  /**
   * Content to display in the icon area
   */
  icon: React.ReactNode;
  /**
   * Additional class names for the icon wrapper (e.g. "zodiac-icons")
   */
  iconClassName?: string;
  /**
   * Title of the card
   */
  title: string;
  /**
   * Main value content
   */
  value: React.ReactNode;
  /**
   * Inline styles for the value element
   */
  valueStyle?: React.CSSProperties;
  /**
   * Subtitle content
   */
  subtitle?: React.ReactNode;
  /**
   * Note content (displayed at the bottom)
   */
  note?: React.ReactNode;
  /**
   * Inline styles for the card container
   */
  style?: React.CSSProperties;
}

export function ResultCard({
  className,
  icon,
  iconClassName,
  title,
  value,
  valueStyle,
  subtitle,
  note,
  style,
}: ResultCardProps) {
  return (
    <div className={`result-card ${className || ""}`} style={style}>
      <div className={`card-icon ${iconClassName || ""}`}>{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-value" style={valueStyle}>
        {value}
      </p>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      {note && <p className="card-note">{note}</p>}
    </div>
  );
}
