import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#b42332",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#fbf7ef",
            borderRadius: "66px 66px 26px 26px",
            display: "flex",
            height: 138,
            justifyContent: "center",
            position: "relative",
            width: 128,
          }}
        >
          <div
            style={{
              color: "#b42332",
              display: "flex",
              fontSize: 52,
              fontWeight: 900,
              letterSpacing: "-0.11em",
              marginLeft: -4,
              marginTop: 12,
            }}
          >
            BH
          </div>
          <div
            style={{
              background: "#b42332",
              borderRadius: 999,
              height: 8,
              position: "absolute",
              right: 20,
              top: 20,
              width: 8,
            }}
          />
        </div>
      </div>
    ),
    size,
  )
}
