import type { Metadata } from "next";

import { ContactCta } from "@/components/sections/ContactCta";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceDetailList } from "@/components/sections/ServiceDetailList";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HVAC, electrical, fire protection, AMC, and rental AC services offered by MI Engineers & Services across Delhi NCR.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        actions={
          <>
            <Button href="/contact">Request a Quote</Button>
            <Button href={`tel:+91${siteConfig.phones[0]}`} variant="secondary">
              Call Now
            </Button>
          </>
        }
        aside={
          <div className="pageGrid">
            <div className="stateCard">
              <h2>Service focus</h2>
              <p>
                The services page is structured for clarity so customers can identify
                the right category quickly and reach out with confidence.
              </p>
            </div>
          </div>
        }
        description="The website now presents services in a more standard, professional way: grouped clearly, explained simply, and linked to direct inquiry actions."
        eyebrow="Our Services"
        title="Technical services designed around practical client requirements."
      />

      <section className="section">
        <div className="container">
          <ServiceDetailList />
        </div>
      </section>

      <ProcessSection />

      <ContactCta
        description="If you already know the service category you need, the contact page is ready for direct inquiry and callback requests."
        title="Let’s discuss the service scope and site requirement."
      />
    </main>
  );
}
