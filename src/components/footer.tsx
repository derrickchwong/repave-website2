import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-card text-surface-600 border-t border-border/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-surface-600 text-sm max-w-md leading-relaxed">
              AI-powered legacy software modernization. Transform decades-old
              codebases into modern, maintainable applications.
            </p>
          </div>

          <div>
            <h4 className="text-surface-900 font-semibold mb-4 text-sm uppercase">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/platform" className="hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-surface-900 font-semibold mb-4 text-sm uppercase">
              Why Repave
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/use-cases" className="hover:text-primary transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/why-modernize" className="hover:text-primary transition-colors">
                  Why Modernize
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-surface-900 font-semibold mb-4 text-sm uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-surface-500">
          <p>&copy; {new Date().getFullYear()} Repave.ai PTE LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
