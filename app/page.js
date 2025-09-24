// 'use client' enables interactive sidebar toggles.
"use client";

import { useMemo, useState, useEffect } from "react";

import Sidebar from "../components/sidebar";
import TopBar from "../components/top-bar";
import HealthCard from "../components/health-card";
import { Settings, Download, RefreshCw, Wifi } from "lucide-react";
import MetricCard from "../components/metric-card";
import StatCard from "../components/stat-card";
import { Lato } from "next/font/google";

import { getDatabase, ref, onValue } from "firebase/database";
import { initializeApp } from "firebase/app";

// 🔹 Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA2ouqEscvgcJEXWWkZP9r9u1y9XSsXuDE",
  authDomain: "bbox-651e8.firebaseapp.com",
  databaseURL:
    "https://bbox-651e8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bbox-651e8",
  storageBucket: "bbox-651e8.firebasestorage.app",
  messagingSenderId: "651971115518",
  appId: "1:651971115518:web:fe7c5d4aae8e415b6ea8af",
};

// Initialize Firebase once
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// 🔹 Sensor state

export default function Page() {
  const [sensors, setSensors] = useState({
    vibration: 0,
    temperature: 0,
    voltage: 0,
  });

  // 🔹 Listen to RTDB updates
  useEffect(() => {
    const deviceRef = ref(db, "devices/esp32_1");

    onValue(deviceRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setSensors({
          vibration: data.vibration ?? 0,
          temperature: data.temperature ?? 0,
          voltage: data.voltage ?? 0,
        });
      }
    });
  }, []);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const sidebarState = useMemo(
    () => ({ collapsed: sidebarCollapsed, mobileOpen: mobileSidebarOpen }),
    [sidebarCollapsed, mobileSidebarOpen]
  );

  return (
    <div
      className={`app-shell ${sidebarCollapsed ? "sidebar-collapsed" : ""} ${
        mobileSidebarOpen ? "sidebar-open" : ""
      }`}
    >
      <Sidebar collapsed={sidebarCollapsed} mobileOpen={mobileSidebarOpen} />

      <main className="content">
        <TopBar
          onToggleDesktopSidebar={() => setSidebarCollapsed((v) => !v)}
          onToggleMobileSidebar={() => setMobileSidebarOpen((v) => !v)}
          sidebar={sidebarState}
        />

        <section className="page-header">
          <div className="title-block">
            <h1>IoT Smart Box Kit</h1>
            <p>Real-time machine condition monitoring</p>
          </div>
          <div className="actions">
            <span className="badge badge-connected" role="status">
              <Wifi className="w-4 h-4 text-green-400 wifi-icon" />
              Connected
            </span>
            <button className="icon-btn" aria-label="Refresh">
              <RefreshCw className="icon" />
            </button>
            <button className="icon-btn" aria-label="Download">
              <Download className="icon" />
            </button>
            <button className="icon-btn" aria-label="Settings">
              <Settings className="icon" />
            </button>
          </div>
        </section>

        <section className="stats-row">
          <StatCard label="Normal Sensors" value="8" tone="ok" />
          <StatCard label="Warning Sensors" value="0" tone="warn" />
          <StatCard label="Critical Sensors" value="1" tone="critical" />
          <StatCard label="Total Sensors" value="9" tone="neutral" />
        </section>

        <section className="dashboard-grid">
          <HealthCard />

          <MetricCard
            title="Vibration"
            id="vibration"
            unit="mm/s"
            value={sensors.vibration}
            status="NORMAL"
            warning="5mm/s"
            critical="8mm/s"
            max={10}
            progress={2.65}
            icon="wave"
          />
          <MetricCard
            title="Temperature"
            id="temperature"
            unit="°C"
            value={sensors.temperature}
            status="NORMAL"
            warning="70°C"
            critical="85°C"
            max={100}
            progress={45.21}
            icon="thermo"
          />
          <MetricCard
            title="Pressure"
            id="pressure"
            unit="bar"
            value={15.03}
            status="NORMAL"
            warning="35bar"
            critical="45bar"
            max={50}
            progress={15.03}
            icon="gauge"
          />
          <MetricCard
            title="Current"
            id="current"
            unit="A"
            value={8.17}
            status="NORMAL"
            warning="15A"
            critical="18A"
            max={20}
            progress={8.17}
            icon="bolt"
          />
          {/* Voltage */}
          <MetricCard
            title="Voltage"
            id="voltage"
            unit="V"
            value={sensors.voltage}
            status="NORMAL"
            warning="250V"
            critical="280V"
            max={300}
            progress={218.93}
            icon="bolt"
          />

          {/* RPM / Speed */}
          <MetricCard
            title="RPM/Speed"
            id="rpm"
            unit="RPM"
            value={1741.33}
            status="NORMAL"
            warning="2500RPM"
            critical="2800RPM"
            max={3000}
            progress={1741.33}
            icon="gauge"
          />

          {/* Oil Quality */}
          <MetricCard
            title="Oil Quality"
            id="oil"
            unit="%"
            value={97.56}
            status="CRITICAL"
            warning="40%"
            critical="20%"
            max={100}
            progress={97.56}
            icon="drop"
          />

          {/* Acoustic */}
          <MetricCard
            title="Acoustic"
            id="acoustic"
            unit="dB"
            value={55.49}
            status="NORMAL"
            warning="85dB"
            critical="100dB"
            max={120}
            progress={55.49}
            icon="wave"
          />

          {/* Humidity */}
          <MetricCard
            title="Humidity"
            id="humidity"
            unit="%"
            value={50.22}
            status="NORMAL"
            warning="80%"
            critical="90%"
            max={100}
            progress={50.22}
            icon="thermo"
          />
        </section>

        {/* Floating AI Chatbot button */}
        <button className="chatbot-fab" aria-label="Open AI Chatbot">
          <span className="tooltip">Chat with AI</span>
          <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2a7 7 0 0 1 6.92 5.8A5 5 0 0 1 17 17h-1.2l-2.1 2.1a1 1 0 0 1-1.7-.7V17A5 5 0 0 1 5 12c0-1.8.93-3.4 2.33-4.3A7 7 0 0 1 12 2zm-1.25 6.5a.75.75 0 1 0 0 1.5h2.5a.75.75 0 1 0 0-1.5h-2.5zm-1.25 3.5a.75.75 0 1 0 0 1.5h5a.75.75 0 1 0 0-1.5h-5z"
            />
          </svg>
        </button>
      </main>

      {/* Click outside (mobile) to close sidebar */}
      <button
        className="overlay"
        aria-hidden={!mobileSidebarOpen}
        onClick={() => setMobileSidebarOpen(false)}
        tabIndex={mobileSidebarOpen ? 0 : -1}
      />
    </div>
  );
}
