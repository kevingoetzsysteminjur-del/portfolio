"use client";

import { useEffect, useState } from "react";

/* ── Daten ── */
const WORDS = ["Context Engineer", "Website-Entwickler", "AI-Integrator"];

const PARTICLE_COLORS = [
  "#a78bfa", "#22d3ee", "#34d399",
  "#f472b6", "#fb923c", "#facc15",
];

const techStack = [
  { name: "Next.js",      description: "React-Framework für Fullstack-Apps", icon: "▲", accent: "#e2e8f0", glow: "rgba(226,232,240,0.3)"  },
  { name: "Tailwind CSS", description: "Utility-first CSS-Framework",         icon: "◈", accent: "#22d3ee", glow: "rgba(6,182,212,0.4)"    },
  { name: "shadcn/ui",    description: "Elegante UI-Komponenten",              icon: "◉", accent: "#a78bfa", glow: "rgba(139,92,246,0.4)"   },
  { name: "PostgreSQL",   description: "Relationale Datenbank",                icon: "◆", accent: "#60a5fa", glow: "rgba(59,130,246,0.4)"   },
  { name: "Docker",       description: "Containerisierung & Deployment",       icon: "⬡", accent: "#38bdf8", glow: "rgba(14,165,233,0.4)"   },
];

const leistungen = [
  {
    icon: "◈",
    title: "Website-Entwicklung",
    description: "Moderne, schnelle Websites mit Next.js und Tailwind CSS. Maßgeschneidert für dein Business – von der Landingpage bis zur komplexen Webanwendung.",
    accent: "#22d3ee",
    glow: "rgba(6,182,212,0.35)",
    punkte: ["Next.js & React", "Responsive Design", "SEO-optimiert", "Schnelle Ladezeiten"],
  },
  {
    icon: "◉",
    title: "Context Engineering",
    description: "Ich designe präzise Prompts und System-Kontexte für AI-Anwendungen. Damit deine KI nicht halluziniert, sondern liefert.",
    accent: "#a78bfa",
    glow: "rgba(139,92,246,0.35)",
    punkte: ["System Prompt Design", "AI-Workflow-Optimierung", "Prompt-Testing", "Dokumentation"],
  },
  {
    icon: "✦",
    title: "AI-Integration",
    description: "Claude, GPT und andere AI-Modelle direkt in deine Website oder App integrieren. Chatbots, Automationen und intelligente Features.",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.35)",
    punkte: ["Claude API", "Chatbot-Entwicklung", "Prozessautomatisierung", "AI-Beratung"],
  },
];

const preise = [
  {
    name: "Landingpage",
    preis: "ab 500 €",
    sub: "Einmalige Zahlung",
    accent: "#22d3ee",
    glow: "rgba(6,182,212,0.25)",
    border: "rgba(6,182,212,0.2)",
    highlight: false,
    leistungen: [
      "1 Seite (Landingpage)",
      "Responsives Design",
      "Kontaktformular",
      "SEO-Grundlagen",
      "Lieferung in 7 Tagen",
    ],
  },
  {
    name: "Business Website",
    preis: "ab 1.000 €",
    sub: "Einmalige Zahlung",
    accent: "#a78bfa",
    glow: "rgba(139,92,246,0.3)",
    border: "rgba(139,92,246,0.35)",
    highlight: true,
    leistungen: [
      "Bis zu 5 Unterseiten",
      "Individuelles Design",
      "Animationen & Effekte",
      "Performance-Optimierung",
      "Lieferung in 14 Tagen",
    ],
  },
  {
    name: "Premium Website",
    preis: "ab 2.000 €",
    sub: "Einmalige Zahlung",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.25)",
    border: "rgba(52,211,153,0.2)",
    highlight: false,
    leistungen: [
      "Unbegrenzte Seiten",
      "AI-Integration möglich",
      "CMS / Datenbank",
      "Persönlicher Support",
      "Individuelle Vereinbarung",
    ],
  },
];

const roadmap = [
  { title: "Grundlagen der Webentwicklung", description: "HTML, CSS, JavaScript – die Basis für alles.",               status: "done"    },
  { title: "Next.js & React lernen",         description: "Komponenten, Routing, App Router.",                          status: "done"    },
  { title: "Erste Kundenprojekte",           description: "Plan A Immobilien – Live-Website für echten Kunden.",        status: "done"    },
  { title: "Fullstack-App mit Datenbank",    description: "PostgreSQL, CRUD-Operationen, API-Routes.",                  status: "active"  },
  { title: "Context Engineering vertiefen",  description: "System Prompts, Prompt Design, eigene AI-Workflows.",        status: "planned" },
  { title: "Deployment mit Docker",          description: "App containerisieren, Server-Deployment, CI/CD.",            status: "planned" },
] as const;

/* ── Typen ── */
type Particle = {
  id: number; x: number; y: number; size: number;
  duration: number; delay: number; color: string; opacity: number;
};

/* ── Komponente ── */
export default function Home() {
  const [wordIndex, setWordIndex]   = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [deleting, setDeleting]     = useState(false);
  const [particles, setParticles]   = useState<Particle[]>([]);
  const [lightbox, setLightbox]     = useState(false);

  /* Typewriter */
  useEffect(() => {
    const word = WORDS[wordIndex];
    if (!deleting) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDeleting(true), 2400);
      return () => clearTimeout(t);
    }
    if (displayed.length > 0) {
      const t = setTimeout(() => setDisplayed((d) => d.slice(0, -1)), 38);
      return () => clearTimeout(t);
    }
    setDeleting(false);
    setWordIndex((i) => (i + 1) % WORDS.length);
  }, [displayed, deleting, wordIndex]);

  /* ESC zum Schließen des Lightbox */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* Partikel nur auf dem Client generieren */
  useEffect(() => {
    setParticles(
      Array.from({ length: 38 }, (_, i) => ({
        id:       i,
        x:        Math.random() * 100,
        y:        Math.random() * 100,
        size:     Math.random() * 3 + 0.8,
        duration: Math.random() * 22 + 14,
        delay:    -(Math.random() * 20),
        color:    PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        opacity:  Math.random() * 0.55 + 0.15,
      }))
    );
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden flex flex-col items-center px-6 py-24"
      style={{ background: "#030309" }}
    >
      {/* ── Floating Particles ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left:      `${p.x}%`,
              top:       `${p.y}%`,
              width:     p.size,
              height:    p.size,
              background: p.color,
              opacity:   p.opacity,
              filter:    `blur(${p.size > 2 ? "1px" : "0px"})`,
              boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
              animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* ── Wind Orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="wind-orb-1 absolute top-[-20%] left-[-15%] w-[750px] h-[750px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.75) 0%, rgba(109,40,217,0.28) 45%, transparent 100%)", filter: "blur(68px)" }} />
        <div className="wind-orb-2 absolute top-[-5%] right-[-20%] w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.65) 0%, rgba(14,165,233,0.22) 45%, transparent 100%)", filter: "blur(78px)" }} />
        <div className="wind-orb-3 absolute bottom-[-18%] left-[-5%] w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.6) 0%, rgba(5,150,105,0.2) 45%, transparent 100%)", filter: "blur(72px)" }} />
        <div className="wind-orb-4 absolute top-[35%] left-[25%] w-[550px] h-[550px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(236,72,153,0.45) 0%, rgba(168,85,247,0.16) 50%, transparent 100%)", filter: "blur(62px)" }} />
        <div className="wind-orb-2 absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)", filter: "blur(70px)", animationDelay: "-9s" }} />
        <div className="wind-orb-3 absolute top-[5%] left-[35%] w-[420px] h-[420px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(250,204,21,0.28) 0%, transparent 70%)", filter: "blur(60px)", animationDelay: "-15s" }} />
      </div>

      {/* ── Hero ── */}
      <div className="relative z-10 max-w-2xl w-full flex flex-col items-center gap-7 text-center">

        {/* Contexflow AI Badge */}
        <div
          className="fade-up-1 flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider"
          style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", color: "#c4b5fd" }}
        >
          <span style={{ color: "#a78bfa", fontSize: "10px" }}>✦</span>
          CONTEXFLOW AI
        </div>

        {/* Avatar mit Spinning Rainbow Ring */}
        <div className="fade-up-2 float-anim" style={{ position: "relative", width: "112px", height: "112px" }}>
          <div
            className="spin-ring absolute rounded-full"
            style={{
              inset: "-4px",
              background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #10b981, #ec4899, #f97316, #facc15, #7c3aed)",
            }}
          />
          <div className="absolute rounded-full" style={{ inset: "2px", background: "#030309", zIndex: 1 }} />
          <img
            src="/watermarked-887996bc-6304-400d-8ae5-3b8a1133692f.jpg"
            alt="Kevin Götz – Contexflow AI"
            onClick={() => setLightbox(true)}
            className="absolute rounded-full object-cover cursor-zoom-in"
            style={{ inset: "6px", zIndex: 2, width: "calc(100% - 12px)", height: "calc(100% - 12px)" }}
          />
        </div>

        {/* Name + Verfuegbar-Badge */}
        <div className="fade-up-3 flex flex-col gap-3">
          <h1
            className="text-6xl font-bold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #fff 0%, #c4b5fd 25%, #67e8f9 55%, #34d399 80%, #facc15 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kevin Götz
          </h1>

          {/* Status Badge */}
          <div className="flex justify-center">
            <div
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", color: "#6ee7b7" }}
            >
              <span className="blink w-2 h-2 rounded-full inline-block" style={{ background: "#34d399", boxShadow: "0 0 8px #34d399" }} />
              Verfügbar für neue Projekte · Mosbach
            </div>
          </div>

          {/* Typewriter */}
          <p className="text-xl font-medium" style={{ color: "rgba(203,213,225,0.9)", minHeight: "2rem" }}>
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa, #22d3ee, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
              }}
            >
              {displayed}
            </span>
            <span className="blink" style={{ color: "#a78bfa" }}>|</span>
          </p>
        </div>

        {/* Beschreibung */}
        <p className="fade-up-4 leading-relaxed max-w-lg" style={{ color: "rgba(148,163,184,0.85)" }}>
          Ich baue moderne Websites für kleine und mittelständische Unternehmen –
          und integriere KI dort, wo sie echten Mehrwert schafft.
          Aus Mosbach. Für ganz Deutschland.
        </p>

        {/* CTA Buttons */}
        <div className="fade-up-4 flex gap-3 flex-wrap justify-center">
          <a
            href="/kontakt"
            className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
            style={{
              background: "linear-gradient(135deg, rgba(139,92,246,0.8), rgba(6,182,212,0.8))",
              color: "#fff",
              boxShadow: "0 0 24px rgba(139,92,246,0.3)",
            }}
          >
            Projekt anfragen →
          </a>
          <a
            href="/projekte"
            className="px-6 py-2.5 rounded-full text-sm font-medium transition-all"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(203,213,225,0.85)",
            }}
          >
            Projekte ansehen
          </a>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="animated-line relative z-10 w-full max-w-2xl my-16" />

      {/* ── Leistungen ── */}
      <section id="leistungen" className="relative z-10 max-w-2xl w-full flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-center" style={{ color: "rgba(100,116,139,0.75)" }}>
          Leistungen
        </p>
        <div className="grid grid-cols-1 gap-4">
          {leistungen.map((l) => (
            <div
              key={l.title}
              className="tech-card rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid rgba(255,255,255,0.07)`,
                borderLeft: `3px solid ${l.accent}`,
                backdropFilter: "blur(12px)",
                "--glow-color": l.glow,
              } as React.CSSProperties}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl mt-0.5 shrink-0" style={{ color: l.accent, filter: `drop-shadow(0 0 8px ${l.accent})` }}>
                  {l.icon}
                </span>
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-white font-semibold text-base">{l.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.7)" }}>
                    {l.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {l.punkte.map((p) => (
                      <span
                        key={p}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: `1px solid rgba(255,255,255,0.08)`,
                          color: l.accent,
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="animated-line relative z-10 w-full max-w-2xl my-16" />

      {/* ── Preise ── */}
      <section id="preise" className="relative z-10 max-w-2xl w-full flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-center" style={{ color: "rgba(100,116,139,0.75)" }}>
          Preise
        </p>
        <p className="text-center text-sm" style={{ color: "rgba(148,163,184,0.6)" }}>
          Faire Preise. Kein Stundensatz-Chaos. Einmalige Zahlung, fertige Website.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {preise.map((p) => (
            <div
              key={p.name}
              className="tech-card rounded-2xl p-6 flex flex-col gap-4 relative"
              style={{
                background: p.highlight ? "rgba(139,92,246,0.08)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${p.border}`,
                backdropFilter: "blur(12px)",
                "--glow-color": p.glow,
              } as React.CSSProperties}
            >
              {p.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: "rgba(139,92,246,0.9)", color: "#fff" }}
                >
                  Beliebt
                </div>
              )}
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: p.accent }}>
                  {p.name}
                </p>
                <p className="text-3xl font-bold text-white">{p.preis}</p>
                <p className="text-xs" style={{ color: "rgba(100,116,139,0.7)" }}>{p.sub}</p>
              </div>
              <div className="w-full h-px" style={{ background: `linear-gradient(90deg, ${p.accent}40, transparent)` }} />
              <ul className="flex flex-col gap-2">
                {p.leistungen.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "rgba(148,163,184,0.75)" }}>
                    <span style={{ color: p.accent }} className="shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/kontakt"
                className="mt-auto text-center text-xs font-semibold py-2 rounded-full transition-all"
                style={{
                  background: p.highlight ? "rgba(139,92,246,0.3)" : "rgba(255,255,255,0.05)",
                  border: `1px solid ${p.border}`,
                  color: p.accent,
                }}
              >
                Anfragen →
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs" style={{ color: "rgba(100,116,139,0.5)" }}>
          Alle Preise zzgl. MwSt. · Individuelle Projekte auf Anfrage
        </p>
      </section>

      {/* ── Divider ── */}
      <div className="animated-line relative z-10 w-full max-w-2xl my-16" />

      {/* ── Tech Stack ── */}
      <section className="relative z-10 max-w-2xl w-full flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-center" style={{ color: "rgba(100,116,139,0.75)" }}>
          Tech-Stack
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="tech-card rounded-xl p-5 flex flex-col gap-3 cursor-default"
              style={{
                background:    "rgba(255,255,255,0.04)",
                border:        "1px solid rgba(255,255,255,0.07)",
                borderLeft:    `3px solid ${tech.accent}`,
                backdropFilter: "blur(12px)",
                "--glow-color": tech.glow,
              } as React.CSSProperties}
            >
              <div className="flex items-center gap-2">
                <span
                  className="text-xl"
                  style={{ color: tech.accent, filter: `drop-shadow(0 0 7px ${tech.accent})` }}
                >
                  {tech.icon}
                </span>
                <span className="font-semibold text-sm text-white">{tech.name}</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.7)" }}>
                {tech.description}
              </p>
              <div
                className="w-8 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, ${tech.accent}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="animated-line relative z-10 w-full max-w-2xl my-16" />

      {/* ── Roadmap ── */}
      <section className="relative z-10 max-w-2xl w-full flex flex-col gap-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-center" style={{ color: "rgba(100,116,139,0.75)" }}>
          Roadmap
        </p>
        <div className="flex flex-col gap-3">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: `1px solid ${
                  item.status === "done"   ? "rgba(16,185,129,0.25)" :
                  item.status === "active" ? "rgba(139,92,246,0.35)" :
                  "rgba(255,255,255,0.07)"
                }`,
              }}
            >
              <div className="mt-0.5 flex-shrink-0 flex flex-col items-center gap-1">
                <div
                  className={`w-3 h-3 rounded-full ${item.status === "active" ? "blink" : ""}`}
                  style={{
                    background:
                      item.status === "done"   ? "#10b981" :
                      item.status === "active" ? "#a78bfa" :
                      "rgba(255,255,255,0.12)",
                    boxShadow:
                      item.status === "done"   ? "0 0 10px rgba(16,185,129,0.8)"  :
                      item.status === "active" ? "0 0 14px rgba(167,139,250,1)"   :
                      "none",
                  }}
                />
                {index < roadmap.length - 1 && (
                  <div className="w-px h-6" style={{ background: "rgba(255,255,255,0.07)" }} />
                )}
              </div>
              <div className="flex flex-col gap-1 pb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-white">{item.title}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      background:
                        item.status === "done"   ? "rgba(16,185,129,0.15)"  :
                        item.status === "active" ? "rgba(139,92,246,0.22)"  :
                        "rgba(255,255,255,0.06)",
                      color:
                        item.status === "done"   ? "#6ee7b7" :
                        item.status === "active" ? "#c4b5fd" :
                        "rgba(148,163,184,0.5)",
                    }}
                  >
                    {item.status === "done" ? "Abgeschlossen" : item.status === "active" ? "In Arbeit" : "Geplant"}
                  </span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(148,163,184,0.65)" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="animated-line relative z-10 w-full max-w-2xl my-16" />

      {/* ── Bio ── */}
      <section className="relative z-10 max-w-2xl w-full flex flex-col gap-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-center" style={{ color: "rgba(100,116,139,0.75)" }}>
          Über mich
        </p>

        <div
          className="rounded-2xl p-6"
          style={{
            background: "rgba(139,92,246,0.07)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderLeft: "3px solid #a78bfa",
          }}
        >
          <p className="text-lg font-semibold leading-relaxed" style={{ color: "#c4b5fd" }}>
            "Ich baue nicht nur Websites – ich baue digitale Präsenzen, die Kunden gewinnen."
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "rgba(148,163,184,0.85)" }}>
          <p>
            Ich bin <span className="text-white font-semibold">Kevin Götz, 22 Jahre alt</span> aus Mosbach – Gründer von{" "}
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>Contexflow AI</span>. Ich helfe kleinen und mittelständischen Unternehmen dabei, professionell im Netz aufzutreten.
          </p>
          <p>
            In einer Zeit, in der <span style={{ color: "#22d3ee", fontWeight: 600 }}>Künstliche Intelligenz</span> und digitale Systeme die Welt neu ordnen, sehe ich keine Bedrohung – ich sehe eine Bühne. Als Context Engineer weiß ich nicht nur, wie man Technologie benutzt, sondern wie man sie <span style={{ color: "#a78bfa", fontWeight: 600 }}>denkt, formt und mit Bedeutung füllt</span>.
          </p>
          <p>
            Mein Ziel: Jedes Kundenprojekt besser zu machen als das letzte – mit echter Qualität, modernem Design und Technologie, die wirklich hilft.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { value: "1",     label: "Kunde (Live)"        },
            { value: "3",     label: "Projekte gebaut"     },
            { value: "100%",  label: "Lernbereitschaft"    },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-4 flex flex-col items-center gap-1 text-center"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <span
                className="text-2xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #c4b5fd, #67e8f9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span className="text-xs" style={{ color: "rgba(100,116,139,0.8)" }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(false)}
          className="fixed inset-0 z-50 flex items-center justify-center cursor-zoom-out"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)", animation: "fade-up 0.2s ease both" }}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-5 right-6 text-2xl font-light"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            ✕
          </button>
          <img
            src="/watermarked-887996bc-6304-400d-8ae5-3b8a1133692f.jpg"
            alt="Kevin Götz – Contexflow AI"
            onClick={(e) => e.stopPropagation()}
            className="rounded-2xl object-cover cursor-default"
            style={{
              maxWidth: "min(480px, 90vw)",
              maxHeight: "80vh",
              boxShadow: "0 0 80px rgba(139,92,246,0.4), 0 40px 80px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.1)",
              animation: "fade-up 0.25s cubic-bezier(0.22,1,0.36,1) both",
            }}
          />
          <p className="absolute bottom-6 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Klick oder ESC zum Schließen
          </p>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="relative z-10 mt-24 flex flex-col items-center gap-2">
        <p className="text-xs font-semibold" style={{ color: "rgba(139,92,246,0.6)" }}>CONTEXFLOW AI</p>
        <p className="text-xs" style={{ color: "rgba(71,85,105,0.65)" }}>
          Kevin Götz · Context Engineer · Mosbach · kevin.goetz.systeminjur@gmail.com
        </p>
        <p className="text-xs" style={{ color: "rgba(71,85,105,0.4)" }}>
          Gebaut mit Next.js & Tailwind CSS
        </p>
      </footer>
    </main>
  );
}
