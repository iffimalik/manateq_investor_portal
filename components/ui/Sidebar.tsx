import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Executive Dashboard", icon: "📊" },
  { href: "/projects", label: "Project Pipeline", icon: "🧭" },
  { href: "/projects/qetaifan", label: "Featured Project", icon: "⭐" },
  { href: "/auth/login", label: "Authentication", icon: "🔐" }
];

export function Sidebar({ active }: { active?: string }) {
  return (
    <nav className="sidebar">
      {links.map((link) => {
        const isActive = active && active === link.href;
        return (
          <Link key={link.href} href={link.href} className={isActive ? "active" : undefined}>
            <span aria-hidden>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        );
      })}
      <div className="section-shell" style={{ marginTop: "auto" }}>
        <h4 style={{ margin: "0 0 8px" }}>Help & Support</h4>
        <p style={{ margin: 0, color: "var(--text-muted)" }}>
          Access support resources, brand guidelines, and request concierge assistance.
        </p>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button className="cta-button" style={{ flex: 1 }}>
            Contact PMO
          </button>
          <button className="cta-button secondary" style={{ flex: 1 }}>
            Brand Kit
          </button>
        </div>
      </div>
    </nav>
  );
}
