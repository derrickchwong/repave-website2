import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { GoogleAnalytics } from "@/components/analytics";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://repave.io"),
  title: {
    default: "Repave.ai - AI-Powered Legacy Software Modernization",
    template: "%s | Repave.ai",
  },
  description:
    "Transform your legacy codebase into modern, tested, production-ready software. AI-powered analysis, automated feature extraction, and BDD-driven implementation — running 24/7.",
  keywords: [
    "legacy modernization",
    "legacy software modernization",
    "software modernization",
    "AI code analysis",
    "legacy migration",
    "application rewrite",
    "legacy system replacement",
    "COBOL modernization",
    "mainframe migration",
    "technical debt",
    "BDD testing",
    "automated code migration",
  ],
  authors: [{ name: "Repave.ai" }],
  creator: "Repave.ai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://repave.io",
    siteName: "Repave.ai",
    title: "Repave.ai - AI-Powered Legacy Software Modernization",
    description:
      "Stop maintaining. Start modernizing. AI that transforms legacy codebases into modern, tested software — running 24/7 while your team rests.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Repave.ai - AI-Powered Legacy Software Modernization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Repave.ai - AI-Powered Legacy Software Modernization",
    description:
      "Stop maintaining. Start modernizing. AI that transforms legacy codebases into modern, tested software — running 24/7 while your team rests.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://repave.io",
  },
  icons: {
    icon: [{ url: "/repave-icon.svg", type: "image/svg+xml" }],
    shortcut: "/repave-icon.svg",
    apple: "/repave-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexSans.variable} ${plexMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
