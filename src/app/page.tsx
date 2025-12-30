"use client";

import { useState, useRef, useEffect } from "react";
import { Header, DateInput, ResultDisplay } from "@/components";

export default function Home() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (birthDate && resultsRef.current) {
      // Small timeout to ensure DOM is ready and layout is stable
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [birthDate]);

  const handleCalculate = (date: Date) => {
    setBirthDate(date);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <DateInput onCalculate={handleCalculate} />
        <div ref={resultsRef} className="results-wrapper">
          {birthDate && <ResultDisplay birthDate={birthDate} />}
        </div>
      </main>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Japanese Calendar Tool | Contact:{" "}
          <a
            href="#"
            className="contact-link"
            onClick={(e) => {
              e.preventDefault();
              const email = `mailto:${"bacon.dev.6396"}@${"gmail.com"}`;
              const subject = "?subject=Japanese Calendar Tool - Inquiry";
              window.location.href = email + subject;
            }}
          >
            bacon.dev.6396@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
