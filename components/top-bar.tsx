"use client";

export default function TopBar({ onToggleMobileSidebar }) {
  return (
    <header className="topbar">
      <div className="left">
        {/* Only mobile hamburger remains */}
        <button
          className="hamburger mobile"
          onClick={onToggleMobileSidebar}
          aria-label="Open menu"
        >
          <BarsIcon />
        </button>
      </div>
    </header>
  );
}

function BarsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
    </svg>
  );
}
