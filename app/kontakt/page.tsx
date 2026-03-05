export default function KontaktPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-32"
      style={{ background: "#06060f" }}
    >
      {/* ── Wind Background Orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="wind-orb-1 absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(109,40,217,0.15) 55%, transparent 100%)",
            filter: "blur(85px)",
          }}
        />
        <div
          className="wind-orb-2 absolute bottom-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(14,165,233,0.15) 55%, transparent 100%)",
            filter: "blur(95px)",
          }}
        />
        <div
          className="wind-orb-3 absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-xl w-full flex flex-col items-center gap-10 text-center">

        {/* Tagline */}
        <div className="flex flex-col gap-4">
          <p
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "rgba(100,116,139,0.75)" }}
          >
            Kontakt
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #c4b5fd 45%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Gute Ideen entstehen im Gespräch.
          </h1>
          <p
            className="text-base leading-relaxed max-w-md mx-auto"
            style={{ color: "rgba(148,163,184,0.75)" }}
          >
            Systeme nicht nur nutzen – sondern verstehen, formen
            und mit Kontext zum Leben erwecken. Wenn du jemanden suchst,
            der mit Neugier und Biss an Probleme herangeht:{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 600,
              }}
            >
              Schreib mir.
            </span>
          </p>
        </div>

        {/* E-Mail Karte */}
        <a
          href="mailto:kevin.goetz.systeminjur@gmail.com"
          className="tech-card w-full rounded-2xl p-6 flex items-center justify-between gap-4 group"
          style={
            {
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(139,92,246,0.2)",
              backdropFilter: "blur(12px)",
              textDecoration: "none",
              "--glow-color": "rgba(139,92,246,0.32)",
            } as React.CSSProperties
          }
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))",
                border: "1px solid rgba(139,92,246,0.2)",
              }}
            >
              ✉
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <span
                className="text-xs font-medium uppercase tracking-widest"
                style={{ color: "rgba(100,116,139,0.7)" }}
              >
                E-Mail
              </span>
              <span className="text-sm font-semibold text-white">
                kevin.goetz.systeminjur@gmail.com
              </span>
            </div>
          </div>

          {/* Pfeil */}
          <span
            className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            style={{ color: "rgba(167,139,250,0.6)" }}
          >
            →
          </span>
        </a>

        {/* Zusatztext */}
        <p
          className="text-xs leading-relaxed max-w-sm"
          style={{ color: "rgba(100,116,139,0.6)" }}
        >
          Ich antworte so schnell ich kann – ob Kollaboration, Feedback
          oder einfach ein Hallo.
        </p>
      </div>
    </main>
  );
}
