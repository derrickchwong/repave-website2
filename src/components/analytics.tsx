"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// Get GA4 Measurement ID from environment variable or default
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-2FXGM4JHE4";

export function GoogleAnalytics() {
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    // Check initial consent state
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "accepted") {
      setConsentGiven(true);
    }

    // Listen for consent events
    const handleAccept = () => {
      setConsentGiven(true);
    };

    const handleReject = () => {
      setConsentGiven(false);
      // Disable GA if it was loaded
      if (window.gtag) {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
        });
      }
    };

    window.addEventListener("cookie-consent-accepted", handleAccept);
    window.addEventListener("cookie-consent-rejected", handleReject);

    return () => {
      window.removeEventListener("cookie-consent-accepted", handleAccept);
      window.removeEventListener("cookie-consent-rejected", handleReject);
    };
  }, []);

  if (!consentGiven) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'granted'
            });
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
