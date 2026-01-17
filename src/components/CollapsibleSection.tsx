"use client";

import { useState, ReactNode } from "react";

interface CollapsibleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  contentClassName?: string;
}

export function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
  contentClassName,
}: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="collapsible-section" style={{ width: "100%" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: "1rem 0 0.5rem",
          marginBottom: "1rem",
          borderBottom: "1px solid var(--card-border)",
          color: "var(--color-kogane)",
          fontWeight: "bold",
          fontSize: "1.2rem",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          userSelect: "none",
        }}
        role="button"
        aria-expanded={isOpen}
      >
        <span style={{ fontSize: "0.8em", opacity: 0.7 }}>
          {isOpen ? "▼" : "▶"}
        </span>
        {title}
      </div>
      {isOpen && <div className={contentClassName}>{children}</div>}
    </div>
  );
}
