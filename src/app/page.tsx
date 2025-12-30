"use client";

import { useState } from "react";
import { Header, DateInput, ResultDisplay } from "@/components";

export default function Home() {
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  const handleCalculate = (date: Date) => {
    setBirthDate(date);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <DateInput onCalculate={handleCalculate} />
        {birthDate && <ResultDisplay birthDate={birthDate} />}
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
