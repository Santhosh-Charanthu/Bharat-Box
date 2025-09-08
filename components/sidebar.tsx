"use client";
import Link from "next/link";
import {
  CreditCard,
  Shield,
  Search,
  HelpCircle,
  Wrench,
  LogOut,
} from "lucide-react";

export default function Sidebar({ collapsed, mobileOpen }) {
  const items = [
    {
      key: "subscription",
      label: "Subscription",
      icon: SubIcon,
      href: "/subscription",
    },
    { key: "admin", label: "Admin", icon: AdminIcon, href: "/admin" },
    { key: "find", label: "Find Labour", icon: FindIcon, href: "/labours" },
    { key: "help", label: "Help", icon: HelpIcon, href: "/help" },
    {
      key: "maintenance",
      label: "Maintenance",
      icon: WrenchIcon,
      href: "/maintenance",
    },
  ];

  return (
    <aside
      className={`sidebar ${collapsed ? "collapsed" : ""} ${
        mobileOpen ? "open" : ""
      }`}
      aria-label="Primary"
    >
      <div className="brand">
        <Logo />
        <span className="brand-text">SmartBox</span>
      </div>

      <nav className="menu" role="navigation">
        {items.map(({ key, label, icon: Icon, href }) => (
          <Link className="menu-item" href={href} key={key}>
            <Icon />
            <span className="label">{label}</span>
          </Link>
        ))}
      </nav>

      <div className="spacer" />

      <button className="logout-btn">
        <LogoutIcon />
        <span className="label">Logout</span>
      </button>
    </aside>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7zm3 0v10h10V7H7z"
      />
    </svg>
  );
}
function SubIcon() {
  return <CreditCard className="icon" />;
}
function AdminIcon() {
  return <Shield className="icon" />;
}
function FindIcon() {
  return <Search className="icon" />;
}
function HelpIcon() {
  return <HelpCircle className="icon" />;
}
function WrenchIcon() {
  return <Wrench className="icon" />;
}
function LogoutIcon() {
  return <LogOut className="icon" />;
}
