import Link from "next/link";
import { Navbar } from "../../components/ui/Navbar";
import { Sidebar } from "../../components/ui/Sidebar";

const projects = [
  {
    slug: "qetaifan",
    name: "Qetaifan North Resort",
    status: "Construction",
    category: "Hospitality",
    highlight: "Waterfront destination with theme park",
    progress: 76,
    value: "$1.2B"
  },
  {
    slug: "industrial-hub",
    name: "Ras Bufontas Logistics",
    status: "Operational",
    category: "Industrial",
    highlight: "Strategic SEZ with bonded warehousing",
    progress: 100,
    value: "$640M"
  },
  {
    slug: "tech-campus",
    name: "QFZ Tech Campus",
    status: "Masterplanning",
    category: "Digital Infrastructure",
    highlight: "Tier III+ data center campus with green grid",
    progress: 34,
    value: "$220M"
  },
  {
    slug: "innovation-district",
    name: "Innovation District",
    status: "Design",
    category: "Mixed-use",
    highlight: "R&D labs, co-working, and learning spaces",
    progress: 48,
    value: "$410M"
  }
];

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="layout-grid">
        <Sidebar active="/projects" />
        <div style={{ display: "grid", gap: 16 }}>
          <div className="section-shell">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <div>
                <p className="chip" style={{ margin: 0 }}>Project pipeline</p>
                <h2 style={{ margin: "8px 0 4px" }}>Explore every page from the figma deck</h2>
                <p className="lead" style={{ margin: 0 }}>
                  Jump into detail views, status dashboards, and map overviews that mirror the prototype.
                </p>
              </div>
              <Link href="/projects/qetaifan" className="cta-button">
                Featured project
              </Link>
            </div>
          </div>

          <div className="card-grid">
            {projects.map((project) => (
              <div key={project.slug} className="section-shell" style={{ background: "var(--surface)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ margin: 0, color: "var(--text-muted)" }}>{project.category}</p>
                    <h3 style={{ margin: "4px 0" }}>{project.name}</h3>
                  </div>
                  <span className="chip badge-success">{project.status}</span>
                </div>
                <p className="lead" style={{ marginTop: 8 }}>{project.highlight}</p>
                <div className="progress-bar" style={{ marginTop: 10 }}>
                  <span style={{ width: `${project.progress}%` }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                  <span style={{ color: "var(--text-muted)" }}>{project.progress}% complete</span>
                  <span style={{ fontWeight: 700 }}>{project.value}</span>
                </div>
                <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
                  <Link href={`/projects/${project.slug}`} className="cta-button" style={{ flex: 1, textAlign: "center" }}>
                    View page
                  </Link>
                  <button className="cta-button secondary" style={{ flex: 1 }}>Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
