import Link from "next/link";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-surface-900 text-surface-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo variant="light" />
            </Link>
            <p className="text-surface-400 text-sm max-w-md leading-relaxed">
              AI-powered legacy software modernization. Transform decades-old
              codebases into modern, maintainable applications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/platform" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Why Repave
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/use-cases" className="hover:text-white transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="/why-modernize" className="hover:text-white transition-colors">
                  Why Modernize
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-700 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Repave.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
