"use client";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Diese Seite – mein erstes eigenes Projekt. Gebaut mit Next.js, Tailwind und shadcn/ui. Dokumentiert meinen Einstieg in die Webentwicklung.",
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    status: "live",
    accent: "#a78bfa",
    glow: "rgba(139,92,246,0.28)",
    border: "rgba(139,92,246,0.18)",
    href: "/",
  },
  {
    title: "Bella Vista – Ristorante & Café",
    description:
      "Restaurant-Website für ein fiktives italienisches Restaurant in Heidelberg. Dunkles, elegantes Design mit goldenen Akzenten und vollständiger Seitenstruktur.",
    features: [
      "Fullscreen Hero mit Gradient & Scroll-Indikator",
      "Speisekarten-Vorschau mit Preisen",
      "Highlights-Sektion mit Hover-Effekten",
      "Reservierungs-Banner & Footer mit Öffnungszeiten",
    ],
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    status: "live",
    accent: "#fbbf24",
    glow: "rgba(251,191,36,0.22)",
    border: "rgba(251,191,36,0.18)",
    href: "https://restaurant-bella-vista-sable.vercel.app/",
    demoLabel: "Live Demo",
  },
  {
    title: "IRONPEAK Fitness Studio",
    description:
      "Premium-Website für ein modernes Fitness-Studio. Dunkles, kraftvolles Design mit orangen Akzenten – gebaut um Mitglieder zu gewinnen und Stärke auszustrahlen.",
    features: [
      "Fullscreen Hero mit animiertem Slogan & Call-to-Action",
      "Kursplan-Übersicht mit Kategorien & Filterfunktion",
      "Mitgliedschafts-Pakete mit Preis-Vergleich",
      "Trainer-Team Sektion mit Profilkarten",
      "Kontaktformular & Gratis-Probetraining Banner",
    ],
    tags: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    status: "live",
    accent: "#f97316",
    glow: "rgba(249,115,22,0.22)",
    border: "rgba(249,115,22,0.18)",
    href: "https://fitness-studio-kevingoetzsysteminjur-del.vercel.app",
    demoLabel: "Live Demo",
  },
  {
    title: "Fullstack-App",
    description:
      "Eine CRUD-Anwendung mit Datenbankanbindung. In Planung – hier lerne ich PostgreSQL und API-Routes in Next.js kennen.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
    status: "planned",
    accent: "#60a5fa",
    glow: "rgba(59,130,246,0.28)",
    border: "rgba(59,130,246,0.15)",
    href: null,
  },
  {
    title: "Context Engineering Tool",
    description:
      "Ein Tool zum Erstellen und Verwalten von System Prompts. Mein Lernprojekt rund um AI und Prompt Design.",
    tags: ["Next.js", "AI", "Context Engineering"],
    status: "planned",
    accent: "#22d3ee",
    glow: "rgba(6,182,212,0.28)",
    border: "rgba(6,182,212,0.15)",
    href: null,
  },
];

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
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(14,165,233,0.15) 55%, transparent 100%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="wind-orb-1 absolute bottom-[-5%] left-[-10%] w-[550px] h-[550px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,92,246,0.45) 0%, rgba(109,40,217,0.15) 55%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="wind-orb-4 absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.2) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center gap-3 text-center mb-14">
        <h1
          className="text-5xl font-bold tracking-tight"
          style={{
            background:
              "linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #67e8f9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Projekte
        </h1>
        <p
          className="text-base max-w-md leading-relaxed"
          style={{ color: "rgba(148,163,184,0.75)" }}
        >
          Hier sammle ich alles, was ich gebaut habe und noch bauen werde.
          Jedes Projekt ist ein Lernschritt.
        </p>
      </div>

      {/* ── Projektliste ── */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col gap-5">
        {projects.map((project) => (
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
              <h2 className="text-lg font-semibold text-white">
                {project.title}
              </h2>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0"
                style={
                  project.status === "live"
                    ? {
                        background: "rgba(16,185,129,0.15)",
                        color: "#6ee7b7",
                        border: "1px solid rgba(16,185,129,0.2)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(148,163,184,0.5)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }
                }
              >
                {project.status === "live" ? "Live" : "In Planung"}
              </span>
            </div>

            {/* Beschreibung */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              {project.description}
            </p>

            {/* Feature-Liste (optional) */}
            {"features" in project && project.features && (
              <ul className="flex flex-col gap-1.5">
                {(project.features as string[]).map((f) => (
                  <li
                    key={f}
                    className="text-xs flex items-start gap-2"
                    style={{ color: "rgba(148,163,184,0.6)" }}
                  >
                    <span style={{ color: project.accent }} className="mt-0.5 shrink-0">
                      ✦
                    </span>
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

              {project.href && (
                "demoLabel" in project && project.demoLabel ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-4 py-1.5 rounded-full transition-all"
                    style={{
                      background: `rgba(251,191,36,0.12)`,
                      color: project.accent,
                      border: `1px solid rgba(251,191,36,0.3)`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(251,191,36,0.22)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(251,191,36,0.12)";
                    }}
                  >
                    {String(project.demoLabel)} →
                  </a>
                ) : (
                  <a
                    href={project.href}
                    className="text-xs font-medium transition-opacity hover:opacity-100"
                    style={{ color: project.accent, opacity: 0.7 }}
                  >
                    Ansehen →
                  </a>
                )
              )}
            </div>

            {/* Farbiger Akzent-Strich */}
            <div
              className="w-10 h-0.5 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${project.accent}, transparent)`,
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Footer ── */}
      <footer
        className="relative z-10 mt-24 text-xs"
        style={{ color: "rgba(71,85,105,0.65)" }}
      >
        Gebaut mit Next.js & Tailwind CSS
      </footer>
    </main>
  );
}
