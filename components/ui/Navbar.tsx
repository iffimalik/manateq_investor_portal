import Link from "next/link";

const navLinks = [
  { href: "/", label: "Overview" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/projects", label: "Projects" },
  { href: "/auth/login", label: "Login" }
];

export function Navbar() {
  return (
    <header className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div className="logo-mark">M</div>
        <div>
          <div style={{ fontWeight: 700 }}>Manateq Investor Portal</div>
          <small style={{ color: "var(--text-muted)" }}>
            Inspired by Shadcn UI and the official investor prototype
          </small>
        </div>
      </div>
      <div className="nav-actions">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="chip">
            {link.label}
          </Link>
        ))}
        <button className="cta-button">Launch Workspace</button>
      </div>
    </header>
  );
}
