import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Daily Calendar - 日めくりカレンダー";
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
        background:
          "linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #581c87 100%)",
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
            fontSize: 80,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #1e3a8a 0%, #581c87 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          日めくりカレンダー
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#4a5568",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Daily Calendar
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#2d3748",
            textAlign: "center",
            lineHeight: 1.6,
            display: "flex",
            gap: "20px",
          }}
        >
          <span>🌙</span>
          <span>干支 · 九星 · 六曜 · 選日</span>
          <span>🌙</span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
