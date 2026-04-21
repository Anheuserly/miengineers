import type { Metadata } from "next";

import { AboutOverview } from "@/components/sections/AboutOverview";
import { ContactCta } from "@/components/sections/ContactCta";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MI Engineers & Services, its service focus, sectors served, and the professional direction of the updated website.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        actions={
          <>
            <Button href="/services">Explore Services</Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </>
        }
        aside={
          <div className="stateCard">
            <h2>Company profile</h2>
            <p>
              A cleaner company page helps present MI Engineers as a serious local
              technical business rather than a visually overloaded one-page brand
              pitch.
            </p>
          </div>
        }
        description="This page gives the business a stronger company profile with clearer positioning, better readability, and content suited to a servicing-focused client base."
        eyebrow="About Us"
        title="A more balanced presentation for a real engineering and service company."
      />

      <AboutOverview />

      <ContactCta
        description="The new site direction is built to support stronger first impressions, more confidence in the company, and smoother inquiry flow."
        title="Discuss your service requirement with MI Engineers."
      />
    </main>
  );
}
