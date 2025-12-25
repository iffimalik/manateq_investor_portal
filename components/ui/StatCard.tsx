interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  tone?: "success" | "warning" | "danger";
}

export function StatCard({ label, value, delta, hint, tone = "success" }: StatCardProps) {
  return (
    <div className="stat-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{ margin: 0, color: "var(--text-muted)", fontWeight: 600 }}>{label}</p>
        {delta ? (
          <span className={`chip badge-${tone}`} style={{ fontWeight: 700 }}>
            {delta}
          </span>
        ) : null}
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, marginTop: 10 }}>{value}</div>
      {hint ? (
        <p style={{ margin: "6px 0 0", color: "var(--text-muted)" }}>{hint}</p>
      ) : null}
    </div>
  );
}
