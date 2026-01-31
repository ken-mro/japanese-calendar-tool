import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Japanese Calendar Tool - 和暦・干支・九星 計算ツール";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.95)",
          borderRadius: "24px",
          padding: "60px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          暦計算ツール
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#4a5568",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Japanese Calendar Tool
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#2d3748",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          和暦 · 干支 · 九星 · 六曜
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#718096",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Wareki · Eto · Nine Star Ki · Rokuyo
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
