import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";
import { StatCard } from "../../components/ui/StatCard";

const activities = [
  {
    title: "Qetaifan North Resort",
    status: "Construction",
    progress: 76,
    budget: "$1.2B",
    delta: "+12%",
    tone: "success" as const
  },
  {
    title: "Logistics Village", // placeholder name
    status: "Enabling works",
    progress: 54,
    budget: "$420M",
    delta: "+6%",
    tone: "warning" as const
  },
  {
    title: "Data Centre Campus",
    status: "Masterplanning",
    progress: 31,
    budget: "$160M",
    delta: "-2%",
    tone: "danger" as const
  }
];

const updates = [
  { label: "Contracts", value: "42 active", detail: "7 pending approvals" },
  { label: "Sustainability", value: "Net-zero ready", detail: "All projects track emissions" },
  { label: "Stakeholders", value: "18 investors", detail: "5 new in the last 30 days" }
];

export default function DashboardPage() {
  return (
    <main>
      <Navbar />
      <div className="layout-grid">
        <Sidebar active="/dashboard" />
        <div style={{ display: "grid", gap: 16 }}>
          <div className="section-shell">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <div>
                <p className="chip" style={{ margin: 0 }}>Executive Dashboard</p>
                <h2 style={{ margin: "8px 0 4px" }}>Investment health overview</h2>
                <p className="lead" style={{ margin: 0 }}>
                  Monitor economic zones, investor performance, and ESG targets in one place.
                </p>
              </div>
              <button className="cta-button">Export report</button>
            </div>
            <div className="card-grid" style={{ marginTop: 12 }}>
              <StatCard label="Live opportunities" value="34" delta="+3" hint="Since last update" />
              <StatCard label="Average IRR" value="18.6%" delta="+0.8%" hint="Weighted portfolio" />
              <StatCard label="On-time delivery" value="94%" delta="+4%" hint="Projects meeting milestones" />
              <StatCard label="Community impact" value="12K jobs" delta="+520" hint="Projected employment" />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 16 }}>
            <div className="section-shell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0 }}>Flagship projects</h3>
                <span className="chip">Weighted progress</span>
              </div>
              <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
                {activities.map((item) => (
                  <div key={item.title} className="section-shell" style={{ background: "var(--surface)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <p style={{ margin: 0, color: "var(--text-muted)" }}>{item.status}</p>
                        <h4 style={{ margin: "4px 0" }}>{item.title}</h4>
                      </div>
                      <span className={`chip badge-${item.tone}`}>{item.delta}</span>
                    </div>
                    <div className="progress-bar" style={{ marginTop: 8 }}>
                      <span style={{ width: `${item.progress}%` }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "var(--text-muted)", marginTop: 8 }}>
                      <span>{item.progress}% complete</span>
                      <span>{item.budget} budget</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-shell">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 style={{ margin: 0 }}>Latest communications</h3>
                <span className="chip">Auto-published</span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 16, display: "grid", gap: 12 }}>
                {updates.map((item) => (
                  <li key={item.label} className="section-shell" style={{ background: "var(--surface)", margin: 0 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <p style={{ margin: 0, color: "var(--text-muted)" }}>{item.label}</p>
                        <strong>{item.value}</strong>
                        <p style={{ margin: "4px 0 0", color: "var(--text-muted)" }}>{item.detail}</p>
                      </div>
                      <button className="cta-button secondary">View</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="section-shell" style={{ background: "var(--surface)", marginTop: 8 }}>
                <h4 style={{ margin: "0 0 4px" }}>Concierge workflow</h4>
                <p className="lead" style={{ margin: 0 }}>
                  Built-in approvals, investor check-ins, and weekly digest templates match the figma storyline.
                </p>
                <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                  <button className="cta-button">Create digest</button>
                  <button className="cta-button secondary">Schedule call</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
