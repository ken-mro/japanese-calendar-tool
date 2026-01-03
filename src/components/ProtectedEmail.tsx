"use client";

import { useState, useEffect } from "react";

export const ProtectedEmail = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Reconstruct email client-side to prevent scraping
    const user = "bacon.dev.6396";
    const domain = "gmail.com";
    // Use setTimeout to avoid synchronous state update warning
    const timer = setTimeout(() => {
      setEmail(`${user}@${domain}`);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!email) return <span>...</span>;

  return (
    <a href={`mailto:${email}`} className={`content-link ${className || ""}`}>
      {email}
    </a>
  );
};
