import "../../styles/subscription.css";

export default function SubscriptionPage() {
  return (
    <div className="subscription-container">
      <h1 className="title">Choose Your Plan</h1>
      <p className="subtitle">
        Pick the subscription that fits your business needs.
      </p>

      <div className="cards">
        {/* Basic Plan */}
        <div className="subscription-card">
          <h2>Basic</h2>
          <p className="price">₹499 / month</p>
          <ul>
            <li>✔ Machine Health Monitoring</li>
            <li>✔ Energy Usage Reports</li>
            <li>✔ Regional Language Support</li>
            <li>✖ Predictive Maintenance</li>
            <li>✖ Priority Support</li>
          </ul>
          <button className="btn">Get Started</button>
        </div>

        {/* Standard Plan */}
        <div className="subscription-card featured">
          <h2>Standard</h2>
          <p className="price">₹999 / month</p>
          <ul>
            <li>✔ Everything in Basic</li>
            <li>✔ Predictive Maintenance Alerts</li>
            <li>✔ Offline Mode Support</li>
            <li>✔ Mobile & Web Dashboard</li>
            <li>✖ Dedicated Support</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="subscription-card">
          <h2>Premium</h2>
          <p className="price">₹1,999 / month</p>
          <ul>
            <li>✔ Everything in Standard</li>
            <li>✔ Dedicated 24/7 Support</li>
            <li>✔ Unlimited Machines</li>
            <li>✔ Advanced AI Analytics</li>
            <li>✔ Custom Reports</li>
          </ul>
          <button className="btn">Go Premium</button>
        </div>
      </div>
    </div>
  );
}
