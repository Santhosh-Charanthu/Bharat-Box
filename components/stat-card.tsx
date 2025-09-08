export default function StatCard({ label, value, tone = "neutral" }) {
  return (
    <div className={`stat-card tone-${tone}`} role="status" aria-live="polite">
      <div className="value">{value}</div>
      <div className="label">{label}</div>
    </div>
  );
}
