import Link from "next/link";
import "../../styles/admin.css";

export default function AdminPage() {
  return (
    <div className="admin-container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/" className="backLink">
          &larr; Back
        </Link>
      </nav>
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <p>
          Welcome to the BharatBox Admin Panel. From here, you can manage users,
          monitor machines, view analytics, and configure system settings.
        </p>

        <section>
          <h2>🔑 Key Admin Features</h2>
          <ul>
            <li>👥 Manage Users – Add, edit, or remove user accounts.</li>
            <li>
              🛠 Manage Machines – Register new machines, update details, and
              track performance.
            </li>
            <li>
              📊 Analytics & Reports – View energy usage, downtime stats, and
              predictive maintenance alerts.
            </li>
            <li>
              ⚙️ System Settings – Configure alerts, language preferences, and
              subscription plans.
            </li>
          </ul>
        </section>

        <section>
          <h2>⚡ Quick Actions</h2>
          <div className="admin-cards">
            <div className="admin-card">👥 Manage Users</div>
            <div className="admin-card">🛠 Manage Machines</div>
            <div className="admin-card">📊 View Reports</div>
            <div className="admin-card">⚙️ Settings</div>
          </div>
        </section>

        <section>
          <h2>📞 Need Help?</h2>
          <p>
            For admin-related support, please contact our team:
            <br />
            <strong>Email:</strong> admin-support@bharatbox.in <br />
            <strong>Phone:</strong> +91-XXXXXXXXXX
          </p>
        </section>
      </div>
    </div>
  );
}
