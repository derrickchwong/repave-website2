import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Repave.ai",
  description:
    "Get in touch with Repave.ai to learn how we can help modernize your legacy software systems.",
};

export default function ContactPage() {
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

        <h1 className="text-4xl font-bold text-surface-900 mb-6">
          Contact Us
        </h1>

        <p className="text-xl text-surface-600 leading-relaxed mb-12">
          Ready to modernize your legacy systems? We'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-surface-50 border border-surface-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-brand-600" size={24} />
            </div>
            <h2 className="text-xl font-semibold text-surface-900 mb-2">
              Email Us
            </h2>
            <p className="text-surface-600 mb-4">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:info@repave.ai"
              className="text-brand-600 hover:text-brand-700 font-medium"
            >
              info@repave.ai
            </a>
          </div>

          <div className="bg-surface-50 border border-surface-200 rounded-lg p-8">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="text-brand-600" size={24} />
            </div>
            <h2 className="text-xl font-semibold text-surface-900 mb-2">
              Schedule a Demo
            </h2>
            <p className="text-surface-600 mb-4">
              Book a personalized demo to see Repave.ai in action.
            </p>
            <a
              href="mailto:info@repave.ai?subject=Demo Request"
              className="text-brand-600 hover:text-brand-700 font-medium"
            >
              Request a demo
            </a>
          </div>
        </div>

        <div className="bg-white border border-surface-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-surface-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">
                What types of projects do you work with?
              </h3>
              <p className="text-surface-600">
                We specialize in modernizing enterprise legacy systems,
                particularly COBOL, Java, C++, and older frameworks. If you have
                a critical system running on outdated technology, we can help.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">
                How long does a typical modernization take?
              </h3>
              <p className="text-surface-600">
                Our AI-powered approach reduces timelines from years to weeks or
                months, depending on the size and complexity of your codebase.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">
                Do you offer custom solutions?
              </h3>
              <p className="text-surface-600">
                Yes, we tailor our approach to your specific needs, tech stack,
                and business requirements. Contact us to discuss your unique
                situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
