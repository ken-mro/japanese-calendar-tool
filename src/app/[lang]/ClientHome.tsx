"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Header,
  DateInput,
  ResultDisplay,
  ShareButtons,
  ProtectedEmail,
  HomeDescription,
} from "@/components";
import { useI18n } from "@/lib/i18n/config";
import { InputState } from "@/components/DateInput";

interface AppState {
  resultData: {
    targetDate: Date;
    sourceDate: Date;
    offsetDays: number;
    monthType: "calendar" | "solar";
    inputState: InputState;
  } | null;
  activeTabIndex: number;
  scrollY: number;
}

export default function Home() {
  const { t } = useI18n();
  const [resultData, setResultData] = useState<AppState["resultData"]>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isRestored, setIsRestored] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Use a ref to hold the latest state for the cleanup function
  const stateRef = useRef({ resultData, activeTabIndex, scrollY: 0 });

  // Update ref when state changes
  useEffect(() => {
    stateRef.current.resultData = resultData;
    stateRef.current.activeTabIndex = activeTabIndex;
  }, [resultData, activeTabIndex]);

  // Track scroll position continuously to avoid unmount timing issues
  useEffect(() => {
    const handleScroll = () => {
      stateRef.current.scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Disable browser's default scroll restoration to prevent interference
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Check if we are coming from a language switch
    const pending = sessionStorage.getItem("languageSwitchPending");
    console.log("[ClientHome] Mount - Pending:", pending);

    if (pending) {
      try {
        const savedJson = sessionStorage.getItem("appState");
        console.log(
          "[ClientHome] Mount - Saved JSON length:",
          savedJson?.length,
        );
        if (savedJson) {
          const savedState: AppState = JSON.parse(savedJson);

          // Revive dates
          if (savedState.resultData) {
            savedState.resultData.targetDate = new Date(
              savedState.resultData.targetDate,
            );
            savedState.resultData.sourceDate = new Date(
              savedState.resultData.sourceDate,
            );
          }

          setResultData(savedState.resultData);
          setActiveTabIndex(savedState.activeTabIndex);

          // Initialize scroll ref
          stateRef.current.scrollY = savedState.scrollY;

          // Restore scroll position after a brief delay to allow layout to settle
          // Increased delay slightly to be safe
          setTimeout(() => {
            console.log("[ClientHome] Restoring scroll:", savedState.scrollY);
            window.scrollTo({ top: savedState.scrollY, behavior: "auto" });
          }, 100);
        }
      } catch (e) {
        console.error("Failed to restore state", e);
      }

      // Delay removal of the flag to handle React Strict Mode double-invocation in development
      setTimeout(() => {
        sessionStorage.removeItem("languageSwitchPending");
      }, 500);
    } else {
      console.log("[ClientHome] No pending switch. Resetting.");
      // If not a language switch (e.g. refresh), clear any stale state
      sessionStorage.removeItem("appState");
      // Force reset to top on refresh
      window.scrollTo(0, 0);
    }

    setIsRestored(true);

    // Save state on unmount (navigation or refresh)
    const handleSaveState = () => {
      console.log("[ClientHome] handleSaveState triggered");
      // Use the tracked scroll position instead of window.scrollY which might be 0 during unmount
      const currentScrollY = stateRef.current.scrollY;
      const stateToSave: AppState = {
        resultData: stateRef.current.resultData,
        activeTabIndex: stateRef.current.activeTabIndex,
        scrollY: currentScrollY,
      };
      if (stateRef.current.resultData) {
        console.log("[ClientHome] Saving non-null resultData");
      } else {
        console.log("[ClientHome] Saving NULL resultData");
      }
      sessionStorage.setItem("appState", JSON.stringify(stateToSave));
    };

    // Listen for custom event from I18nProvider
    window.addEventListener("beforeLanguageSwitch", handleSaveState);

    // Also save on unmount as backup (though race condition might make it unreliable for immediate navigation)
    return () => {
      window.removeEventListener("beforeLanguageSwitch", handleSaveState);
      // Removed handleSaveState() call here as it causes state overwrite in Strict Mode during restoration
    };
  }, []);

  const handleCalculate = (
    date: Date,
    offsetDays: number,
    monthType: "calendar" | "solar" = "solar",
    inputState: InputState,
  ) => {
    const target = new Date(date);
    target.setDate(date.getDate() + offsetDays);
    setResultData({
      targetDate: target,
      sourceDate: date,
      offsetDays,
      monthType,
      inputState,
    });

    // Auto-scroll to results logic
    // We only scroll if it's a NEW calculation interaction, not restoration
    // Implementation note: This function is only called by user interaction via DateInput
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  // Prevent flash of default state if we are restoring
  // BUT: blocking render completely might be bad for LCP.
  // Given that restoration is fast and "isRestored" is set in useEffect (client-side),
  // the first render will always be "blank" or "default".
  // If we return null, we get a white screen for a split second.
  // Ideally we render default skeleton or just render.
  // Since we rely on "key" to force DateInput re-render with restored state,
  // we can use `isRestored` to control the key.

  // Actually, DateInput needs the restored inputState.
  // resultData?.inputState holds it.

  return (
    <div className="app-container">
      <Header onToggleAbout={toggleAbout} />

      <main className="main-content">
        {isRestored && (
          <DateInput
            onCalculate={handleCalculate}
            initialState={resultData?.inputState}
            key={resultData?.inputState ? "restored" : "default"}
          />
        )}
        {!isRestored && <div style={{ height: "400px" }}></div>}

        <div ref={resultsRef} className="results-wrapper">
          {resultData && (
            <ResultDisplay
              targetDate={resultData.targetDate}
              sourceDate={resultData.sourceDate}
              offsetDays={resultData.offsetDays}
              monthType={resultData.monthType}
              activeTabIndex={activeTabIndex}
              onTabChange={setActiveTabIndex}
            />
          )}
        </div>
        <ShareButtons resultData={resultData} />
        <HomeDescription isOpen={isAboutOpen} onToggle={toggleAbout} />
      </main>
      <footer className="footer">
        <p className="footer-links">
          <Link href="/terms" className="footer-link">
            {t("common.terms")}
          </Link>
          <span className="footer-separator">|</span>
          <Link href="/privacy" className="footer-link">
            {t("common.privacy")}
          </Link>
        </p>
        <p className="footer-contact">
          {t("common.contact")}: <ProtectedEmail />
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Japanese Calendar Tool
        </p>
      </footer>
    </div>
  );
}
