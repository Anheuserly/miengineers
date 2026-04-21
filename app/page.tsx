import { ContactCta } from "@/components/sections/ContactCta";
import { FaqSection } from "@/components/sections/FaqSection";
import { HomeHero } from "@/components/sections/HomeHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicePreviewGrid } from "@/components/sections/ServicePreviewGrid";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { siteConfig } from "@/lib/site-data";

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

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <StatsStrip />
      <ServicePreviewGrid />
      <WhyChooseSection />
      <ProcessSection />
      <FaqSection />
      <ContactCta
        description="The new layout keeps the journey simple: understand the services, build confidence, and then contact MI Engineers without friction."
        title="Need dependable service support for your property or project?"
      />

      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        type="application/ld+json"
      />
    </main>
  );
}
