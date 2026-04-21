import { ContactForm } from "@/components/sections/ContactForm";
import { BrandsMarquee } from "@/components/sections/BrandsMarquee";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeedbackForm } from "@/components/sections/FeedbackForm";
import { Hero } from "@/components/sections/Hero";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { SpecializationsShowcase } from "@/components/sections/SpecializationsShowcase";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-data";

import styles from "./page.module.css";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.companyName,
  description: siteConfig.description,
  telephone: `+91${siteConfig.phones[0]}`,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address,
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110025",
    addressCountry: "IN",
  },
  areaServed: siteConfig.serviceAreas,
  openingHours: "Mo-Sa 09:00-19:00",
  url: siteConfig.siteUrl,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you handle both commercial and residential HVAC projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. MI Engineers supports residential, commercial, retail, and office HVAC execution and maintenance.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide AMC and emergency breakdown support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AMC coverage and urgent service response are part of the operating model for HVAC, electrical, and fire systems.",
      },
    },
    {
      "@type": "Question",
      name: "Is rental AC available for short-term requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Rental AC support is available for events, offices, temporary facilities, and other urgent cooling requirements.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <BrandsMarquee />
      <TrustIndicators />
      <ServicesGrid />
      <SpecializationsShowcase />

      <section className="section" id="contact">
        <div className="container">
          <SectionHeading
            description="Designed for speed-to-lead today, with enough structure for Appwrite-backed workflows, admin tools, and customer feedback operations later."
            eyebrow="Contact & Conversion"
            title="Capture leads, callback requests, and field feedback in one place."
          />

          <div className={styles.formGrid}>
            <ContactForm />
            <FeedbackForm />
          </div>

          <div className={styles.mapWrap}>
            <MapEmbed />
          </div>
        </div>
      </section>

      <FaqSection />

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        type="application/ld+json"
      />
    </main>
  );
}
