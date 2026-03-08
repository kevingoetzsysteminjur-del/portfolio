"use client";

const projects = [
  {
    title: "Plan A Immobilien & Finanzierung",
    description:
      "Professionelle Website für Ali Artun, Immobilien- und Finanzierungsberater aus Heidelberg. Modernes Design, das Vertrauen aufbaut und Kunden gewinnt.",
    features: [
      "Professionelles Corporate Design",
      "Leistungsübersicht mit Immobilien & Finanzierung",
      "Kontaktbereich mit direkter Anfragemöglichkeit",
      "Responsive & SEO-optimiert",
    ],
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    status: "live",
    kunde: "Ali Artun",
    budget: "1.500 €",
    accent: "#22d3ee",
    glow: "rgba(6,182,212,0.22)",
    border: "rgba(6,182,212,0.2)",
    href: null,
    demoLabel: null,
  },
  {
    title: "Bella Vista – Ristorante & Café",
    description:
      "Demo-Website für ein italienisches Restaurant. Dunkles, elegantes Design mit goldenen Akzenten – so sieht eine moderne Gastronomie-Website aus.",
    features: [
      "Fullscreen Hero mit Gradient & Scroll-Indikator",
      "Speisekarten-Vorschau mit Preisen",
      "Highlights-Sektion mit Hover-Effekten",
      "Reservierungs-Banner & Footer mit Öffnungszeiten",
    ],
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    status: "demo",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.22)",
    border: "rgba(251,191,36,0.18)",
    href: "https://restaurant-bella-vista-sable.vercel.app/",
    demoLabel: "Live Demo ansehen",
  },
  {
    title: "IRONPEAK Fitness Studio",
    description:
      "Demo-Website für ein modernes Fitness-Studio. Dunkles, kraftvolles Design mit orangen Akzenten – gebaut um Mitglieder zu gewinnen und Stärke auszustrahlen.",
    features: [
      "Fullscreen Hero mit animiertem Slogan & Call-to-Action",
      "Kursplan-Übersicht mit Kategorien & Filterfunktion",
      "Mitgliedschafts-Pakete mit Preis-Vergleich",
      "Trainer-Team Sektion mit Profilkarten",
    ],
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    status: "demo",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.22)",
    border: "rgba(249,115,22,0.18)",
    href: "https://fitness-studio-mauve.vercel.app",
    demoLabel: "Live Demo ansehen",
  },
];

const statusConfig = {
  live: { label: "Live · Echtes Projekt", bg: "rgba(16,185,129,0.15)", color: "#6ee7b7", border: "rgba(16,185,129,0.2)" },
  demo: { label: "Demo", bg: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "rgba(251,191,36,0.2)" },
  planned: { label: "In Planung", bg: "rgba(255,255,255,0.05)", color: "rgba(148,163,184,0.5)", border: "rgba(255,255,255,0.07)" },
};

export default function ProjektePage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center px-6 py-32"
      style={{ background: "#06060f" }}
    >
      {/* ── Wind Background Orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="wind-orb-2 absolute top-[-10%] right-[-15%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(14,165,233,0.15) 55%, transparent 100%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="wind-orb-1 absolute bottom-[-5%] left-[-10%] w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(109,40,217,0.15) 55%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="wind-orb-4 absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center gap-4 text-center mb-14">
        <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "rgba(139,92,246,0.6)" }}>
          CONTEXFLOW AI
        </p>
        <h1
          className="text-5xl font-bold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #67e8f9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projekte
        </h1>
        <p className="text-base max-w-md leading-relaxed" style={{ color: "rgba(148,163,184,0.75)" }}>
          Echte Projekte für echte Kunden – und Demos, die zeigen was möglich ist.
          Jedes Projekt ist ein Beweis für modernes Webdesign.
        </p>
      </div>

      {/* ── Projektliste ── */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col gap-6">
        {projects.map((project) => {
          const st = statusConfig[project.status as keyof typeof statusConfig];
          return (
            <div
              key={project.title}
              className="tech-card rounded-2xl p-6 flex flex-col gap-4"
              style={
                {
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${project.border}`,
                  backdropFilter: "blur(12px)",
                  "--glow-color": project.glow,
                } as React.CSSProperties
              }
            >
              {/* Titel + Status */}
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-semibold text-white">{project.title}</h2>
                  {"kunde" in project && project.kunde && (
                    <p className="text-xs" style={{ color: "rgba(100,116,139,0.7)" }}>
                      Kunde: {project.kunde}
                      {"budget" in project && project.budget && (
                        <span style={{ color: project.accent }}> · {project.budget}</span>
                      )}
                    </p>
                  )}
                </div>
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0"
                  style={{ background: st.bg, color: st.color, border: `1px solid ${st.border}` }}
                >
                  {st.label}
                </span>
              </div>

              {/* Beschreibung */}
              <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.7)" }}>
                {project.description}
              </p>

              {/* Feature-Liste */}
              {"features" in project && project.features && (
                <ul className="flex flex-col gap-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="text-xs flex items-start gap-2" style={{ color: "rgba(148,163,184,0.6)" }}>
                      <span style={{ color: project.accent }} className="mt-0.5 shrink-0">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags + Link */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: project.accent,
                        border: `1px solid ${project.border}`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.href && project.demoLabel && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-4 py-1.5 rounded-full transition-all"
                    style={{
                      background: `rgba(255,255,255,0.05)`,
                      color: project.accent,
                      border: `1px solid ${project.border}`,
                    }}
                  >
                    {project.demoLabel} →
                  </a>
                )}
              </div>

              {/* Farbiger Akzent-Strich */}
              <div
                className="w-10 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
              />
            </div>
          );
        })}
      </div>

      {/* ── CTA ── */}
      <div className="relative z-10 max-w-2xl w-full mt-12 rounded-2xl p-8 flex flex-col items-center gap-4 text-center"
        style={{
          background: "rgba(139,92,246,0.07)",
          border: "1px solid rgba(139,92,246,0.2)",
        }}
      >
        <p className="text-white font-semibold text-lg">Auch eine Website für dein Unternehmen?</p>
        <p className="text-sm" style={{ color: "rgba(148,163,184,0.7)" }}>
          Lass uns reden. Ich erstelle dir ein unverbindliches Angebot.
        </p>
        <a
          href="/kontakt"
          className="px-6 py-2.5 rounded-full text-sm font-semibold"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.8), rgba(6,182,212,0.8))",
            color: "#fff",
            boxShadow: "0 0 20px rgba(139,92,246,0.3)",
          }}
        >
          Projekt anfragen →
        </a>
      </div>

      {/* ── Footer ── */}
      <footer className="relative z-10 mt-16 flex flex-col items-center gap-2">
        <p className="text-xs font-semibold" style={{ color: "rgba(139,92,246,0.6)" }}>CONTEXFLOW AI</p>
        <p className="text-xs" style={{ color: "rgba(71,85,105,0.65)" }}>
          Kevin Götz · Context Engineer · Mosbach
        </p>
      </footer>
    </main>
  );
}
