"use client";

import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", betreff: "", nachricht: "" });
  const [status, setStatus] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.nachricht) return;

    setStatus("sending");

    // Mailto-Link aufbauen
    const subject = encodeURIComponent(form.betreff || `Projektanfrage von ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nE-Mail: ${form.email}\n\nNachricht:\n${form.nachricht}`
    );
    const mailto = `mailto:kevin.goetz.systeminjur@gmail.com?subject=${subject}&body=${body}`;

    // Kurz warten, dann E-Mail-Client öffnen
    setTimeout(() => {
      window.location.href = mailto;
      setStatus("sent");
    }, 800);
  }

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
            background: "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(109,40,217,0.15) 55%, transparent 100%)",
            filter: "blur(85px)",
          }}
        />
        <div
          className="wind-orb-2 absolute bottom-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(14,165,233,0.15) 55%, transparent 100%)",
            filter: "blur(95px)",
          }}
        />
        <div
          className="wind-orb-3 absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-xl w-full flex flex-col gap-10">

        {/* Header */}
        <div className="flex flex-col gap-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "rgba(139,92,246,0.6)" }}>
            CONTEXFLOW AI
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 45%, #67e8f9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Lass uns reden.
          </h1>
          <p className="text-base leading-relaxed max-w-md mx-auto" style={{ color: "rgba(148,163,184,0.75)" }}>
            Du hast ein Projekt im Kopf? Schreib mir – ich melde mich innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
          </p>
        </div>

        {/* Kontaktkarte (E-Mail direkt) */}
        <a
          href="mailto:kevin.goetz.systeminjur@gmail.com"
          className="tech-card rounded-2xl p-5 flex items-center justify-between gap-4 group"
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
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-base flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(6,182,212,0.3))",
                border: "1px solid rgba(139,92,246,0.2)",
              }}
            >
              ✉
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "rgba(100,116,139,0.7)" }}>
                Direktkontakt
              </span>
              <span className="text-sm font-semibold text-white">
                kevin.goetz.systeminjur@gmail.com
              </span>
            </div>
          </div>
          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" style={{ color: "rgba(167,139,250,0.6)" }}>
            →
          </span>
        </a>

        {/* Trennlinie */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          <span className="text-xs" style={{ color: "rgba(100,116,139,0.5)" }}>oder Formular ausfüllen</span>
          <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Kontaktformular */}
        {status === "sent" ? (
          <div
            className="rounded-2xl p-8 flex flex-col items-center gap-4 text-center"
            style={{
              background: "rgba(16,185,129,0.07)",
              border: "1px solid rgba(16,185,129,0.2)",
            }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-2xl"
              style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }}
            >
              ✓
            </div>
            <p className="text-white font-semibold text-lg">Dein E-Mail-Client wurde geöffnet.</p>
            <p className="text-sm" style={{ color: "rgba(148,163,184,0.7)" }}>
              Schick die vorbereitete E-Mail ab – ich melde mich so schnell wie möglich.
            </p>
            <button
              onClick={() => { setStatus("idle"); setForm({ name: "", email: "", betreff: "", nachricht: "" }); }}
              className="text-xs px-4 py-2 rounded-full"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(148,163,184,0.7)" }}
            >
              Neues Formular
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Name + E-Mail nebeneinander */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "rgba(100,116,139,0.8)" }}>
                  Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Max Mustermann"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(139,92,246,0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: "rgba(100,116,139,0.8)" }}>
                  E-Mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="max@firma.de"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid rgba(139,92,246,0.5)")}
                  onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
                />
              </div>
            </div>

            {/* Betreff */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "rgba(100,116,139,0.8)" }}>
                Betreff
              </label>
              <input
                type="text"
                placeholder="Website für mein Unternehmen"
                value={form.betreff}
                onChange={(e) => setForm({ ...form, betreff: e.target.value })}
                className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid rgba(139,92,246,0.5)")}
                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
              />
            </div>

            {/* Nachricht */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium" style={{ color: "rgba(100,116,139,0.8)" }}>
                Nachricht *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Erzähl mir von deinem Projekt – was brauchst du, was ist dein Budget, wann soll es fertig sein?"
                value={form.nachricht}
                onChange={(e) => setForm({ ...form, nachricht: e.target.value })}
                className="rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all resize-none"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => (e.target.style.border = "1px solid rgba(139,92,246,0.5)")}
                onBlur={(e) => (e.target.style.border = "1px solid rgba(255,255,255,0.08)")}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                background: status === "sending"
                  ? "rgba(139,92,246,0.3)"
                  : "linear-gradient(135deg, rgba(139,92,246,0.85), rgba(6,182,212,0.85))",
                color: "#fff",
                boxShadow: status === "sending" ? "none" : "0 0 24px rgba(139,92,246,0.3)",
                cursor: status === "sending" ? "not-allowed" : "pointer",
              }}
            >
              {status === "sending" ? "Wird vorbereitet..." : "Nachricht senden →"}
            </button>

            <p className="text-xs text-center" style={{ color: "rgba(100,116,139,0.5)" }}>
              * Pflichtfelder · Kein Spam · Antwort innerhalb von 24 Stunden
            </p>
          </form>
        )}
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
