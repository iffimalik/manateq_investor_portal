import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/ui/Navbar";
import { Sidebar } from "../../../components/ui/Sidebar";
import { StatCard } from "../../../components/ui/StatCard";

const projectMap = {
  qetaifan: {
    name: "Qetaifan North Resort",
    location: "Lusail, Qatar",
    status: "Construction",
    description:
      "Premium waterfront destination with leisure attractions, entertainment districts, and hospitality clusters.",
    metrics: [
      { label: "CapEx", value: "$1.2B", delta: "+12%", tone: "success" as const },
      { label: "Jobs created", value: "9,300", delta: "+640", tone: "success" as const },
      { label: "ESG score", value: "91/100", delta: "+3", tone: "success" as const }
    ],
    milestones: [
      { title: "Phase 1 handover", status: "Completed", period: "Q3 2024" },
      { title: "Marina district", status: "In progress", period: "Q1 2025" },
      { title: "Entertainment park", status: "Planned", period: "Q3 2025" }
    ]
  },
  "industrial-hub": {
    name: "Ras Bufontas Logistics",
    location: "Hamad International Zone",
    status: "Operational",
    description: "Integrated logistics hub with bonded warehousing and airside connectivity.",
    metrics: [
      { label: "Occupancy", value: "94%", delta: "+2%", tone: "success" as const },
      { label: "Operators", value: "62 tenants", delta: "+4", tone: "success" as const },
      { label: "Throughput", value: "2.1M tons", delta: "+6%", tone: "success" as const }
    ],
    milestones: [
      { title: "Cold storage expansion", status: "Live", period: "Q4 2024" },
      { title: "New expressway access", status: "Commissioning", period: "Q1 2025" },
      { title: "Customs digitization", status: "In rollout", period: "Q2 2025" }
    ]
  },
  "tech-campus": {
    name: "QFZ Tech Campus",
    location: "Umm Alhoul",
    status: "Masterplanning",
    description: "Green, scalable data centre campus aligned with national digital ambitions.",
    metrics: [
      { label: "Power envelope", value: "120MW", delta: "+20MW", tone: "warning" as const },
      { label: "Fiber rings", value: "3 providers", delta: "New", tone: "success" as const },
      { label: "PUE target", value: "1.25", delta: "Design", tone: "warning" as const }
    ],
    milestones: [
      { title: "Concept masterplan", status: "Complete", period: "Q4 2024" },
      { title: "Anchor tenant LOIs", status: "In progress", period: "Q1 2025" },
      { title: "Grid tie-in", status: "Planned", period: "Q4 2025" }
    ]
  },
  "innovation-district": {
    name: "Innovation District",
    location: "Education City",
    status: "Design",
    description: "Mixed-use destination blending labs, co-working, academic partnerships, and cultural venues.",
    metrics: [
      { label: "Gross floor area", value: "310k sqm", delta: "+20k", tone: "warning" as const },
      { label: "R&D partners", value: "14", delta: "+3", tone: "success" as const },
      { label: "Community", value: "5K residents", delta: "Projected", tone: "success" as const }
    ],
    milestones: [
      { title: "Urban realm concept", status: "Complete", period: "Q2 2024" },
      { title: "Phase 1 leasing", status: "Upcoming", period: "Q2 2025" },
      { title: "Mobility pods", status: "Planned", period: "Q3 2025" }
    ]
  }
} as const;

type ProjectKey = keyof typeof projectMap;

function getProject(slug: string) {
  return projectMap[slug as ProjectKey];
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  const activePath = `/projects/${params.slug}`;

  return (
    <main>
      <Navbar />
      <div className="layout-grid">
        <Sidebar active={activePath} />
        <div style={{ display: "grid", gap: 16 }}>
          <div className="section-shell">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p className="chip" style={{ margin: 0 }}>{project.status}</p>
                <h2 style={{ margin: "8px 0 4px" }}>{project.name}</h2>
                <p className="lead" style={{ margin: 0 }}>{project.location}</p>
              </div>
              <Link href="/projects" className="cta-button secondary">
                Back to projects
              </Link>
            </div>
            <p className="lead" style={{ marginTop: 12 }}>{project.description}</p>
            <div className="card-grid" style={{ marginTop: 12 }}>
              {project.metrics.map((metric) => (
                <StatCard
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                  delta={metric.delta}
                  tone={metric.tone}
                />
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 16 }}>
            <div className="section-shell">
              <h3 style={{ margin: "0 0 8px" }}>Milestone schedule</h3>
              <div className="timeline">
                {project.milestones.map((item) => (
                  <div key={item.title} className="timeline-item">
                    <div>
                      <div className="chip" style={{ marginBottom: 4 }}>{item.status}</div>
                      <strong>{item.title}</strong>
                    </div>
                    <p style={{ margin: 0, color: "var(--text-muted)" }}>{item.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-shell">
              <h3 style={{ margin: "0 0 8px" }}>Engagements</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Workstream</th>
                    <th>Owner</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Design management</td>
                    <td>Hyder Consulting</td>
                    <td>
                      <span className="chip badge-success">On track</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Digital twin</td>
                    <td>PMO Innovation</td>
                    <td>
                      <span className="chip badge-warning">Building</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Utilities</td>
                    <td>Kahramaa</td>
                    <td>
                      <span className="chip badge-success">Secured</span>
                    </td>
                  </tr>
                  <tr>
                    <td>Operations partner</td>
                    <td>To be announced</td>
                    <td>
                      <span className="chip badge-danger">Pending</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
