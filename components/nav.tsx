"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 pt-5">
      <div
        className="flex items-center gap-1 rounded-full px-2 py-1.5"
        style={{
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        {/* Logo */}
        <span
          className="px-3 py-1.5 text-xs font-bold tracking-wider mr-1"
          style={{ color: "rgba(167,139,250,0.7)" }}
        >
          CF
        </span>

        <NavLink href="/" active={pathname === "/"}>Home</NavLink>
        <NavLink href="/#leistungen" active={false}>Leistungen</NavLink>
        <NavLink href="/#preise" active={false}>Preise</NavLink>
        <NavLink href="/projekte" active={pathname === "/projekte"}>Projekte</NavLink>
        <NavLink href="/kontakt" active={pathname === "/kontakt"}>Kontakt</NavLink>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-250"
      style={
        active
          ? {
              background: "linear-gradient(135deg, rgba(139,92,246,0.5) 0%, rgba(6,182,212,0.5) 100%)",
              color: "#fff",
              boxShadow: "0 0 16px rgba(139,92,246,0.3)",
            }
          : {
              color: "rgba(148,163,184,0.7)",
            }
      }
    >
      {children}
    </Link>
  );
}
