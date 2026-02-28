"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/logo";

const navMenus = [
  {
    label: "Platform",
    items: [
      { label: "How It Works", href: "/platform" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    label: "Why Repave",
    items: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "Why Modernize", href: "/why-modernize" },
    ],
  },
  {
    label: "Company",
    items: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

function DropdownMenu({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 text-sm text-surface-600 hover:text-brand-600 transition-colors"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg border border-surface-200 shadow-lg py-1 z-50">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-2.5 text-sm text-surface-600 hover:text-brand-600 hover:bg-surface-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-surface-200">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navMenus.map((menu) => (
            <DropdownMenu
              key={menu.label}
              label={menu.label}
              items={menu.items}
            />
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-surface-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-surface-200 px-6 py-4 space-y-4">
          {navMenus.map((menu) => (
            <div key={menu.label}>
              <p className="text-xs font-semibold text-surface-400 uppercase tracking-wider mb-2">
                {menu.label}
              </p>
              <div className="space-y-1">
                {menu.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm text-surface-600 hover:text-brand-600 transition-colors py-1"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/contact"
            className="block px-5 py-2 text-sm font-medium text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
