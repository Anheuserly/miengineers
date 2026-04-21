import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { QuoteModal } from "@/components/layout/QuoteModal";
import { AppProviders } from "@/components/providers/AppProviders";
import { FloatingActionButtons } from "@/components/ui/FloatingActionButtons";
import { siteConfig } from "@/lib/site-data";

import "./globals.css";

const bodyFont = Source_Sans_3({
  variable: "--font-body",
  display: "swap",
  subsets: ["latin"],
});

const displayFont = Manrope({
  variable: "--font-display",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.companyName} | HVAC, Electrical and Fire Protection`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.companyName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.companyName,
    description: siteConfig.description,
    type: "website",
    siteName: siteConfig.companyName,
    url: siteConfig.siteUrl,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description: siteConfig.description,
  },
  category: "Business services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${bodyFont.variable} ${displayFont.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <AppProviders>
          <a className="skipLink" href="#main-content">
            Skip to content
          </a>
          <div className="pageShell">
            <Header />
            {children}
            <Footer />
          </div>
          <FloatingActionButtons />
          <QuoteModal />
        </AppProviders>
      </body>
    </html>
  );
}
