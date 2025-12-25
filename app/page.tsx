import Link from "next/link";
import { Navbar } from "../components/ui/Navbar";
import { StatCard } from "../components/ui/StatCard";

const achievements = [
  {
    title: "Smart Industrial Cities",
    body: "Build, monitor, and report on Special Economic Zones across Qatar with interactive dashboards and concierge onboarding.",
    badge: "Live"
  },
  {
    title: "Investor Relations",
    body: "Keep investors aligned with milestone tracking, document vaults, and automated notifications for every stage of the journey.",
    badge: "Premium"
  },
  {
    title: "Sustainability",
    body: "Highlight ESG commitments with emission baselines, smart metering, and rich progress storytelling for stakeholders.",
    badge: "ESG"
  }
];

const timeline = [
  { label: "Q1 2025", title: "Launch alpha", description: "Initial investor cohort experiences the unified workspace." },
  { label: "Q2 2025", title: "Smart metering", description: "Live energy data surfaces inside project narratives." },
  { label: "Q3 2025", title: "AI concierge", description: "Automated summarization and proactive investor updates." },
  { label: "Q4 2025", title: "Global rollout", description: "Regional partners onboard with localized experiences." }
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div style={{ padding: "0 24px 48px" }}>
        <div className="section-shell" style={{ position: "relative", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 24, alignItems: "center" }}>
            <div>
              <div className="chip badge-success" style={{ marginBottom: 12 }}>Prototype walkthrough</div>
              <h1 className="hero-heading">Investor Portal inspired by the Manateq figma story</h1>
              <p className="lead">
                Explore every page of the concept without leaving this workspace. The UI leans on Shadcn principles,
                crisp typography, and layered glassmorphism to match the original art direction.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/dashboard" className="cta-button">
                  View Dashboard
                </Link>
                <Link href="/projects" className="cta-button secondary">
                  Browse Projects
                </Link>
              </div>
              <div className="card-grid" style={{ marginTop: 20 }}>
                <StatCard label="Opportunities tracked" value="128" delta="+12%" hint="Active investors this quarter" />
                <StatCard label="Funding committed" value="$284M" delta="+8.2%" hint="Across six flagship zones" />
                <StatCard label="Sustainability score" value="92/100" delta="+3" hint="Aligned with national targets" />
              </div>
            </div>
            <div className="section-shell" style={{ background: "rgba(255,255,255,0.04)", borderStyle: "dashed" }}>
              <h3 style={{ margin: "0 0 8px" }}>Prototype coverage</h3>
              <p className="lead" style={{ marginBottom: 16 }}>
                We recreated the full navigation system, dashboard widgets, project galleries, and authentication flows
                showcased in the Figma reference. Jump into any page using the quick links below.
              </p>
              <div className="timeline">
                {timeline.map((item) => (
                  <div className="timeline-item" key={item.label}>
                    <div>
                      <div className="chip" style={{ marginBottom: 6 }}>{item.label}</div>
                      <strong>{item.title}</strong>
                    </div>
                    <p style={{ margin: 0, color: "var(--text-muted)" }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="section-shell" style={{ marginTop: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <div>
              <p className="chip" style={{ margin: 0 }}>Experience highlights</p>
              <h2 style={{ margin: "8px 0 4px" }}>Pages rebuilt for the walkthrough</h2>
              <p className="lead" style={{ margin: 0 }}>
                Each surface mirrors the layout grid and spacing defined in the figma prototype.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href="/dashboard" className="cta-button">
                Dashboard
              </Link>
              <Link href="/auth/login" className="cta-button secondary">
                Sign-in
              </Link>
            </div>
          </div>
          <div className="card-grid" style={{ marginTop: 16 }}>
            {achievements.map((item) => (
              <div key={item.title} className="section-shell" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h3 style={{ margin: 0 }}>{item.title}</h3>
                  <span className="chip badge-success">{item.badge}</span>
                </div>
                <p className="lead" style={{ marginTop: 8 }}>{item.body}</p>
                <div className="progress-bar" aria-hidden>
                  <span style={{ width: "82%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="footer-note">Built for pixel-perfect walkthroughs and investor storytelling.</p>
      </div>
    </main>
  );
}
