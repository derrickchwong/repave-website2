import Link from "next/link";
import { Logo } from "@/components/logo";

// The single site footer, used by every page (homepage included) via the
// root layout — so it can never drift between pages.
const columns = [
  {
    heading: "Platform",
    links: [
      { label: "How It Works", href: "/#how-it-works" },
      { label: "5D Framework", href: "/platform/define" },
      { label: "Features", href: "/features" },
    ],
  },
  {
    heading: "Why Repave",
    links: [
      { label: "Use Cases", href: "/use-cases" },
      { label: "Why Modernize", href: "/why-modernize" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-card text-surface-500 border-t border-border pt-[60px] pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-start md:justify-between gap-10 mb-10">
          <div className="max-w-[320px]">
            <Link href="/" className="inline-flex items-center">
              <Logo />
            </Link>
            <p className="text-surface-500 text-[0.9rem] mt-3 leading-[1.7]">
              AI-powered application modernization. Transform legacy code into a
              high-quality, modern codebase your team loves to work with.
            </p>
          </div>

          <div className="flex gap-10 md:gap-16">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-[0.8rem] font-bold uppercase text-surface-900 mb-4">
                  {col.heading}
                </h4>
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-[0.9rem] text-surface-500 mb-2.5 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-border text-[0.8rem] text-surface-500">
          &copy; {new Date().getFullYear()} Repave.ai PTE LTD. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
