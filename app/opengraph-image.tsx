import { ImageResponse } from "next/og"

export const alt = "Bekzod Hoca — turk tili o'qituvchisi"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "linear-gradient(135deg, #fbf7ef 0%, #f4e4d2 58%, #b42332 58%, #8f1825 100%)",
          color: "#211815",
          display: "flex",
          height: "100%",
          overflow: "hidden",
          padding: "58px 64px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(180, 35, 50, 0.12)",
            borderRadius: 999,
            height: 420,
            left: -170,
            position: "absolute",
            top: -230,
            width: 420,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingRight: 34,
            width: 720,
            zIndex: "1",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.16em",
            }}
          >
            <div
              style={{
                background: "#b42332",
                borderRadius: 999,
                height: 12,
                marginRight: 14,
                width: 12,
              }}
            />
            BEKZOD HOCA
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 70,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.04,
              }}
            >
              <div style={{ display: "flex" }}>Turk tilini</div>
              <div style={{ display: "flex" }}>ishonch bilan</div>
              <div style={{ display: "flex" }}>o&apos;rganing</div>
            </div>

            <div
              style={{
                color: "#67544c",
                display: "flex",
                fontSize: 26,
                lineHeight: 1.35,
                marginTop: 26,
              }}
            >
              Bekzod Qosimov bilan Farg&apos;onada va onlayn
            </div>
          </div>

          <div
            style={{
              color: "#8f1825",
              display: "flex",
              fontSize: 21,
              fontWeight: 700,
            }}
          >
            bekzodhoca.uz
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.13)",
              border: "2px solid rgba(255, 255, 255, 0.35)",
              borderRadius: 999,
              display: "flex",
              height: 330,
              justifyContent: "center",
              width: 330,
            }}
          >
            <div
              style={{
                alignItems: "center",
                background: "#fbf7ef",
                borderRadius: 999,
                color: "#b42332",
                display: "flex",
                flexDirection: "column",
                height: 235,
                justifyContent: "center",
                width: 235,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 55,
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                }}
              >
                A1–C1
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  marginTop: 8,
                  textTransform: "uppercase",
                }}
              >
                Turk tili
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#fbf7ef",
              borderRadius: 999,
              bottom: 44,
              height: 20,
              opacity: 0.7,
              position: "absolute",
              right: 14,
              width: 20,
            }}
          />
          <div
            style={{
              border: "2px solid rgba(255, 255, 255, 0.5)",
              borderRadius: 999,
              height: 42,
              position: "absolute",
              right: -10,
              top: 54,
              width: 42,
            }}
          />
        </div>
      </div>
    ),
    size,
  )
}
