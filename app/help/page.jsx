import Link from "next/link";
import "../../styles/help.css";

export default function HelpPage() {
  return (
    <div className="help-container">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/" className="backLink">
          &larr; Back
        </Link>
      </nav>
      <div className="help-content">
        <h1>Help & Support</h1>
        <p>
          Welcome to the BharatBox Help Center 👋
          <br />
          We’re here to make sure you get the best out of your smart kit.
        </p>

        <section>
          <h2>🔧 Getting Started</h2>
          <ol>
            <li>
              <strong>Unbox & Connect</strong> – Plug BharatBox into your
              machine, attach sensors, and power it on.
            </li>
            <li>
              <strong>Install the Mobile App</strong> – Download the BharatBox
              app and connect via Wi-Fi or mobile data.
            </li>
            <li>
              <strong>View Your Dashboard</strong> – Monitor machine health,
              energy usage, and alerts in real time.
            </li>
          </ol>
        </section>

        <section>
          <h2>❓ Frequently Asked Questions</h2>
          <ul>
            <li>
              <strong>Do I need internet?</strong> – No, BharatBox works offline
              and syncs when internet is available.
            </li>
            <li>
              <strong>Can I install it myself?</strong> – Yes! It’s
              plug-and-sense, no engineers required.
            </li>
            <li>
              <strong>Which languages are supported?</strong> – Multiple
              regional languages.
            </li>
            <li>
              <strong>Does it work on old machines?</strong> – Yes, BharatBox
              supports legacy machines.
            </li>
            <li>
              <strong>Any maintenance cost?</strong> – Minimal, it’s built to be
              affordable.
            </li>
          </ul>
        </section>

        <section>
          <h2>🛠 Troubleshooting</h2>
          <ul>
            <li>
              <strong>Device not turning on?</strong> – Check power connection
              and cables.
            </li>
            <li>
              <strong>Data not showing?</strong> – Enable Wi-Fi/Bluetooth and
              restart the app.
            </li>
            <li>
              <strong>Alerts not in your language?</strong> – Go to Settings →
              Language → Select preference.
            </li>
          </ul>
        </section>

        <section>
          <h2>📞 Need More Help?</h2>
          <p>
            We’re always here for you:
            <br />
            <strong>Call:</strong> +91-XXXXXXXXXX <br />
            <strong>Email:</strong> support@bharatbox.in <br />
            <strong>WhatsApp:</strong> Available 9 AM – 8 PM
          </p>
        </section>
      </div>
    </div>
  );
}
