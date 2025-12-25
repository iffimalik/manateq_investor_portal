import Link from "next/link";
import { Navbar } from "../../../components/ui/Navbar";

export default function LoginPage() {
  return (
    <main>
      <Navbar />
      <div style={{ display: "grid", placeItems: "center", padding: "32px 24px 64px" }}>
        <div className="section-shell" style={{ width: "100%", maxWidth: 520 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p className="chip" style={{ margin: 0 }}>Secure entry</p>
              <h2 style={{ margin: "8px 0 4px" }}>Sign in to the portal</h2>
              <p className="lead" style={{ margin: 0 }}>
                Recreated authentication screen inspired by the Figma prototype.
              </p>
            </div>
            <div className="logo-mark">M</div>
          </div>

          <form style={{ marginTop: 18, display: "grid", gap: 14 }}>
            <div className="input-stack">
              <label htmlFor="email">Work email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="input-stack">
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" placeholder="••••••••" required />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--text-muted)" }}>
              <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <input type="checkbox" defaultChecked /> Remember me
              </label>
              <Link href="#" className="chip">Forgot password</Link>
            </div>
            <button type="submit" className="cta-button" style={{ width: "100%" }}>
              Continue
            </button>
            <button type="button" className="cta-button secondary" style={{ width: "100%" }}>
              Sign in with SSO
            </button>
          </form>

          <div style={{ marginTop: 16 }} className="section-shell">
            <h4 style={{ margin: "0 0 6px" }}>What to expect</h4>
            <p className="lead" style={{ margin: 0 }}>
              MFA prompts, role-based access, and personalized dashboards tailored to investor roles.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
