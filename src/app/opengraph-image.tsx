import { ImageResponse } from "next/og";

// Route segment config
export const alt = "Repave.ai - AI-Powered Legacy Software Modernization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand palette (mirrors globals.css / the Repave logo)
const DARK = "#13241F";
const TEAL = "#1E3A34";
const ACCENT = "#6FD0B3";
const LIGHT = "#F3F5EE";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "84px 88px",
          color: LIGHT,
          fontFamily: "sans-serif",
          backgroundColor: DARK,
          backgroundImage: `linear-gradient(135deg, ${DARK} 0%, ${TEAL} 100%)`,
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg width="60" height="66" viewBox="-34 -40 68 80" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,-36 -31,-18 0,0 31,-18" fill={ACCENT} fillOpacity="0.18" />
            <polygon points="-31,-18 -31,18 0,36 0,0" fill={ACCENT} fillOpacity="0.12" />
            <polygon points="0,0 0,36 31,18 31,-18" fill={ACCENT} fillOpacity="0.22" />
            <polygon
              points="0,-36 -31,-18 -31,18 0,36 31,18 31,-18"
              fill="none"
              stroke={ACCENT}
              strokeWidth="1.6"
            />
            <line x1="0" y1="-36" x2="0" y2="0" stroke={ACCENT} strokeWidth="0.8" opacity="0.5" />
            <line x1="-31" y1="18" x2="0" y2="0" stroke={ACCENT} strokeWidth="0.8" opacity="0.5" />
            <line x1="31" y1="18" x2="0" y2="0" stroke={ACCENT} strokeWidth="0.8" opacity="0.5" />
          </svg>
          <div style={{ display: "flex", fontSize: 46, fontWeight: 700, letterSpacing: 2, marginLeft: 22 }}>
            <span>Repave</span>
            <span style={{ color: ACCENT }}>.ai</span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1.5,
            }}
          >
            <span style={{ marginRight: 24 }}>Modernize legacy code</span>
            <span style={{ color: ACCENT }}>with AI.</span>
          </div>
          <div style={{ fontSize: 33, color: "#C7D3CC", marginTop: 26, maxWidth: 920 }}>
            Transform decades-old codebases into modern, tested, production-ready software — ship
            features in days, not weeks.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(243,245,238,0.16)",
            paddingTop: 26,
          }}
        >
          <div style={{ fontSize: 26, color: ACCENT, letterSpacing: 1 }}>repave.ai</div>
          <div style={{ fontSize: 22, color: "#9AA8A1" }}>
            AI Analysis · Automated Migration · BDD-Verified
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
