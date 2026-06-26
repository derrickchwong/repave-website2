"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";

// The single site header, used by every page (homepage included) via the
// root layout — so it can never drift between pages.
const navItems = [
  { label: "Problem", href: "/#problem" },
  { label: "Solution", href: "/#solution" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "5D Framework", href: "/platform/define" },
  { label: "Benefits", href: "/#benefits" },
  { label: "Why Now", href: "/#why-now" },
  { label: "Careers", href: "/careers" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-[20px] border-b border-border/70">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Repave.ai home" className="inline-flex items-center">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-surface-500 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2.5 text-[0.9rem] font-semibold text-white bg-primary rounded-md hover:bg-brand-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-surface-500"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-[0.9rem] font-medium text-surface-500 hover:text-primary transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-2 px-5 py-2.5 text-[0.9rem] font-semibold text-white bg-primary rounded-md hover:bg-brand-700 transition-colors text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
