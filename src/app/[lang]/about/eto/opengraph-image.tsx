import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Eto (Sexagenary Cycle) - 干支について";
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
        background: "linear-gradient(135deg, #dc2626 0%, #ea580c 100%)",
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
            fontSize: 96,
            marginBottom: "30px",
          }}
        >
          🐉
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            background: "linear-gradient(135deg, #dc2626 0%, #ea580c 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          干支（十干十二支）
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#4a5568",
            textAlign: "center",
          }}
        >
          Sexagenary Cycle (Eto)
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
