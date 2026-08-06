import { ImageResponse } from "next/og";

export const alt = "Go Execution — Where Strategy Meets Execution";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0b1c2c 0%, #1a3a52 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: "-0.02em",
            }}
          >
            Go Execution
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 400,
              color: "#e0e7ef",
              textAlign: "center",
              maxWidth: 900,
            }}
          >
            Digital Marketing &amp; Web Design Agency
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 24,
              color: "#d4af37",
              fontWeight: 600,
            }}
          >
            Where Strategy Meets Execution
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
