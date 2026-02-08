import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Contentful Next.js Campaign";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 60, fontWeight: "bold", color: "#000" }}>
        Contentful Next.js
      </div>
      <div style={{ fontSize: 40, marginTop: 20, color: "#666" }}>Campaign</div>
    </div>,
    {
      ...size,
    },
  );
}
