import "../../styles/maintenance.css";

export default function MaintenancePage() {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <h1>Machine Maintenance</h1>
        <p>
          BharatBox helps you keep your machines healthy with smart, predictive
          maintenance. No more costly breakdowns or unexpected downtime.
        </p>

        <section>
          <h2>🔍 Why Maintenance Matters</h2>
          <ul>
            <li>Reduce unexpected breakdowns and costly repairs.</li>
            <li>Extend the lifespan of machines and equipment.</li>
            <li>Improve efficiency and lower electricity bills.</li>
            <li>Keep production running smoothly with minimal downtime.</li>
          </ul>
        </section>

        <section>
          <h2>⚙️ How BharatBox Helps</h2>
          <ol>
            <li>
              <strong>Monitor in Real-Time</strong> – Track vibration,
              temperature, and energy usage continuously.
            </li>
            <li>
              <strong>Detect Issues Early</strong> – Get alerts before minor
              problems become major breakdowns.
            </li>
            <li>
              <strong>Plan Maintenance</strong> – Schedule servicing based on
              data, not guesswork.
            </li>
            <li>
              <strong>Save Costs</strong> – Reduce downtime and energy waste
              with AI-driven insights.
            </li>
          </ol>
        </section>

        <section>
          <h2>🛠 Maintenance Tips for MSMEs</h2>
          <ul>
            <li>Check and clean machine filters regularly.</li>
            <li>Lubricate moving parts to avoid wear and tear.</li>
            <li>Inspect belts and connections for damage.</li>
            <li>Use BharatBox dashboard to schedule timely service.</li>
          </ul>
        </section>

        <section>
          <h2>📞 Need Assistance?</h2>
          <p>
            Our support team is ready to help with your maintenance needs:
            <br />
            <strong>Call:</strong> +91-XXXXXXXXXX <br />
            <strong>Email:</strong> support@bharatbox.in
          </p>
        </section>
      </div>
    </div>
  );
}
