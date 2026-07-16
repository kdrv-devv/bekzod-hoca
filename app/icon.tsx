import { ImageResponse } from "next/og"

export const size = {
  width: 512,
  height: 512,
}
export const contentType = "image/png"

export default function Icon() {
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
            borderRadius: "190px 190px 74px 74px",
            display: "flex",
            height: 390,
            justifyContent: "center",
            position: "relative",
            width: 360,
          }}
        >
          <div
            style={{
              color: "#b42332",
              display: "flex",
              fontSize: 146,
              fontWeight: 900,
              letterSpacing: "-0.11em",
              marginLeft: -12,
              marginTop: 34,
            }}
          >
            BH
          </div>
          <div
            style={{
              background: "#b42332",
              borderRadius: 999,
              height: 22,
              position: "absolute",
              right: 56,
              top: 56,
              width: 22,
            }}
          />
        </div>
      </div>
    ),
    size,
  )
}
