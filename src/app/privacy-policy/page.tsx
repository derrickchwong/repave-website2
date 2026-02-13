import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Repave.ai",
  description: "Repave.ai's privacy policy and data handling practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-surface-600 hover:text-brand-600 transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-surface-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-surface-500 mb-8">
          Last updated: {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Introduction
          </h2>
          <p className="text-surface-600 leading-relaxed">
            Repave.ai ("we," "our," or "us") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you visit our website or use our
            services.
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Information We Collect
          </h2>
          <h3 className="text-xl font-semibold text-surface-900 mt-6 mb-3">
            Personal Information
          </h3>
          <p className="text-surface-600 leading-relaxed">
            We may collect personal information that you voluntarily provide to
            us when you:
          </p>
          <ul className="list-disc pl-6 text-surface-600 space-y-2">
            <li>Contact us via email or contact forms</li>
            <li>Request a demo or consultation</li>
            <li>Sign up for our services or newsletter</li>
            <li>Participate in surveys or provide feedback</li>
          </ul>

          <h3 className="text-xl font-semibold text-surface-900 mt-6 mb-3">
            Usage Data
          </h3>
          <p className="text-surface-600 leading-relaxed">
            We automatically collect certain information when you visit our
            website, including:
          </p>
          <ul className="list-disc pl-6 text-surface-600 space-y-2">
            <li>IP address and browser type</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Device and operating system information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-surface-600 leading-relaxed mb-3">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-surface-600 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send you updates, newsletters, and marketing communications</li>
            <li>Analyze usage patterns and optimize our website</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-surface-600 leading-relaxed">
            We implement appropriate technical and organizational security
            measures to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction. However, no method of
            transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Code and Data Confidentiality
          </h2>
          <p className="text-surface-600 leading-relaxed">
            When you use our modernization services, we treat your source code
            and business logic with the highest level of confidentiality:
          </p>
          <ul className="list-disc pl-6 text-surface-600 space-y-2">
            <li>
              Your code is processed securely and never shared with third parties
            </li>
            <li>We use encryption in transit and at rest</li>
            <li>Access is restricted to authorized personnel only</li>
            <li>We can sign custom NDAs and data processing agreements</li>
          </ul>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Third-Party Services
          </h2>
          <p className="text-surface-600 leading-relaxed">
            We may use third-party service providers to help us operate our
            website and services. These providers have access to your information
            only to perform specific tasks on our behalf and are obligated not to
            disclose or use it for other purposes.
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-surface-600 leading-relaxed mb-3">
            Depending on your location, you may have the following rights:
          </p>
          <ul className="list-disc pl-6 text-surface-600 space-y-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Correct inaccurate or incomplete information</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-surface-600 leading-relaxed mb-3">
            We use cookies and similar tracking technologies to analyze website
            traffic and improve your experience. You have full control over
            cookie preferences through our consent banner.
          </p>

          <h3 className="text-xl font-semibold text-surface-900 mt-6 mb-3">
            Types of Cookies We Use
          </h3>
          <ul className="list-disc pl-6 text-surface-600 space-y-2 mb-4">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function properly. These cannot be disabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Google Analytics helps us
              understand how visitors interact with our website. These cookies
              collect information about pages visited, time spent, and user
              behavior. We only use these with your explicit consent.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-surface-900 mt-6 mb-3">
            Google Analytics
          </h3>
          <p className="text-surface-600 leading-relaxed mb-3">
            When you consent to analytics cookies, we use Google Analytics 4 to
            collect information about your visit, including:
          </p>
          <ul className="list-disc pl-6 text-surface-600 space-y-2 mb-4">
            <li>Pages viewed and navigation patterns</li>
            <li>Time spent on pages</li>
            <li>Approximate geographic location (city/country level)</li>
            <li>Device type and browser information</li>
            <li>Referring website</li>
          </ul>
          <p className="text-surface-600 leading-relaxed">
            You can withdraw your consent at any time by clearing your browser's
            local storage or adjusting your browser cookie settings. Learn more
            about{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700 underline"
            >
              how Google uses data
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-surface-600 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page and
            updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold text-surface-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-surface-600 leading-relaxed">
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>
          <p className="text-surface-600">
            Email:{" "}
            <a
              href="mailto:info@repave.ai"
              className="text-brand-600 hover:text-brand-700"
            >
              info@repave.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
