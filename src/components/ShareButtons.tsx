"use client";

import { useEffect, useState } from "react";
import { useI18n, useLanguage } from "@/lib/i18n/config";

declare global {
  interface Window {
    LineIt: {
      loadButton: () => void;
    };
  }
}

export const ShareButtons = () => {
  const { t } = useI18n();
  const language = useLanguage();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
    setTitle(document.title);
  }, []);

  // Load LINE script
  useEffect(() => {
    if (!url) return;

    const scriptId = "line-social-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    } else if (window.LineIt) {
      window.LineIt.loadButton();
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
              title
            )}&url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-btn-x"
            style={{ height: "100%", boxSizing: "border-box" }}
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
