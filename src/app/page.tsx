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
        <p>© 2024 Japanese Calendar Tool</p>
      </footer>
    </div>
  );
}
