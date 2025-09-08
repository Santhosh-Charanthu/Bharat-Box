import ProgressBar from "./ui-progress";

export default function HealthCard() {
  return (
    <article className="card health-card">
      <div className="health-header">
        <div className="shield" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2l8 4v6c0 5-3.6 9.4-8 10c-4.4-.6-8-5-8-10V6l8-4z"
            />
          </svg>
        </div>
        <div className="health-title">
          <div className="strong">STRONG</div>
          <div className="sub">Machine operating optimally</div>
        </div>
        <div className="score">
          <div className="big">91</div>
          <div className="small">Health Score</div>
        </div>
      </div>

      <div className="health-body">
        <div className="row">
          <span>Health Score</span>
          <span>91/100</span>
        </div>
        <ProgressBar value={91} max={100} />
        <div className="section">
          <div className="section-title">Condition Factors:</div>
          <div>Oil Quality critical</div>
        </div>
        <div className="updated">Last Updated: 7:18:33 AM</div>
      </div>
    </article>
  );
}
