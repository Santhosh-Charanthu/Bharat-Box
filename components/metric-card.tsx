import ProgressBar from "./ui-progress";

export default function MetricCard({
  title,
  id,
  unit,
  value,
  status,
  warning,
  critical,
  max,
  progress,
  icon = "dot",
}) {
  return (
    <article className="card metric-card">
      <div className="metric-header">
        <div className="metric-icon">{renderIcon(icon)}</div>
        <div className="metric-title">
          <div className="name">{title}</div>
          <div className="meta">Sensor ID: {id}</div>
        </div>
        <div className="metric-value">
          <span className="num">{value}</span>
          <span className="unit">{unit}</span>
        </div>
      </div>

      <div className="metric-body">
        <div className="scale">
          <span>0</span>
          <span className="status">Status: {status}</span>
          <span>{max}</span>
        </div>
        <ProgressBar value={progress} max={max} />
        <div className="warns">
          <span>
            Warning: <b className="warn">{warning}</b>
          </span>
          <span>
            Critical: <b className="crit">{critical}</b>
          </span>
        </div>
      </div>
    </article>
  );
}

function renderIcon(kind: string) {
  switch (kind) {
    case "wave":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M3 12c2-4 4-4 6 0s4 4 6 0s4-4 6 0" />
        </svg>
      );
    case "thermo":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M15 14.5a3.5 3.5 0 1 1-5 3.16V5a2.5 2.5 0 1 1 5 0v12.66a3.48 3.48 0 0 1 0-.16zM13 5a1 1 0 1 0-2 0v9.59a3.5 3.5 0 1 0 2 0z"
          />
        </svg>
      );
    case "gauge":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 6a8 8 0 0 0-8 8h2a6 6 0 1 1 12 0h2a8 8 0 0 0-8-8zm-1 8l-5 2l6-8l-1 6z"
          />
        </svg>
      );
    case "bolt":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M13 2L3 14h7l-1 8l10-12h-7z" />
        </svg>
      );
    case "drop": // Oil Quality
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"
          />
        </svg>
      );
    case "sound": // Acoustic
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 00-2.5-4v8a4.5 4.5 0 002.5-4z"
          />
        </svg>
      );
    case "cloud": // Humidity
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19 18H6a4 4 0 010-8 5.6 5.6 0 0110.9-1.5A4.5 4.5 0 0119 18z"
          />
        </svg>
      );
    default:
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="6" fill="currentColor" />
        </svg>
      );
  }
}
