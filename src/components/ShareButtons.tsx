"use client";

import { useEffect, useState } from "react";
import { useI18n, useLanguage } from "@/lib/i18n/config";
import { generateShareText } from "@/lib/shareHelper";

declare global {
  interface Window {
    LineIt: {
      loadButton: () => void;
    };
  }
}

interface ShareButtonsProps {
  resultData?: {
    targetDate: Date;
    sourceDate: Date;
    offsetDays: number;
  } | null;
}

export const ShareButtons = ({ resultData }: ShareButtonsProps) => {
  const { t } = useI18n();
  const language = useLanguage();
  const [url, setUrl] = useState("");
  const [shareText, setShareText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setUrl(window.location.href);
      if (resultData) {
        setShareText(
          generateShareText({
            targetDate: resultData.targetDate,
            sourceDate: resultData.sourceDate,
            offsetDays: resultData.offsetDays,
            language,
          }),
        );
      } else {
        setShareText(document.title);
      }
    }, 0);
  }, [resultData, t, language]);

  // Load LINE script
  useEffect(() => {
    if (!url) return;

    const scriptId = "line-social-script";
    const script = document.getElementById(scriptId) as HTMLScriptElement;

    const initLine = () => {
      if (window.LineIt) {
        window.LineIt.loadButton();
      }
    };

    if (!script) {
      const newScript = document.createElement("script");
      newScript.id = scriptId;
      newScript.src =
        "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
      newScript.async = true;
      newScript.defer = true;
      newScript.onload = initLine;
      document.body.appendChild(newScript);
    } else {
      if (window.LineIt) {
        window.LineIt.loadButton();
      } else {
        // Retry if script exists but LineIt is not ready yet
        const timer = setInterval(() => {
          if (window.LineIt) {
            window.LineIt.loadButton();
            clearInterval(timer);
          }
        }, 500);

        // Cleanup timer after 5 seconds to avoid infinite polling
        setTimeout(() => clearInterval(timer), 5000);

        // Also attach load listener if it's still loading (for safety)
        script.addEventListener("load", initLine);
        return () => {
          clearInterval(timer);
          script.removeEventListener("load", initLine);
        };
      }
    }
  }, [url, language]);

  // Load Hatena script
  useEffect(() => {
    if (!url) return;
    const scriptId = "hatena-social-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://b.st-hatena.com/js/bookmark_button.js";
      script.async = true;
      script.defer = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
  }, [url]);

  if (!url) return null;

  // Hatena Bookmark URL generation (converts https://... to s/...)
  const getHatenaUrl = (u: string) => {
    return `https://b.hatena.ne.jp/entry/${u
      .replace("https://", "s/")
      .replace("http://", "")}`;
  };

  return (
    <div className="share-section">
      <h3 className="share-title">{t("common.shareNetwork")}</h3>
      <div className="share-buttons-grid">
        {/* Hatena Bookmark (Official Button) */}
        <div style={{ height: "20px", display: "flex", alignItems: "center" }}>
          <a
            href={getHatenaUrl(url)}
            className="hatena-bookmark-button"
            data-hatena-bookmark-layout="basic-label-counter"
            data-hatena-bookmark-lang={language}
            title={t("common.share")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
              alt={t("common.share")}
              width="20"
              height="20"
              style={{ border: "none" }}
            />
          </a>
        </div>

        {/* X (Twitter) */}
        <div style={{ height: "20px", display: "flex", alignItems: "center" }}>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              shareText,
            )}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-btn-x"
            style={{ boxSizing: "border-box" }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {t("common.post")}
          </a>
        </div>

        {/* LINE (Official Button) */}
        <div style={{ height: "20px", display: "flex", alignItems: "center" }}>
          <div
            className="line-it-button"
            data-lang={language}
            data-type="share-a"
            data-env="PROD"
            data-url={url}
            data-color="default"
            data-size="small"
            data-count="true"
            data-ver="3"
            style={{ display: "none" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
