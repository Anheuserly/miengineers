import type { Metadata } from "next";

import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { FeedbackForm } from "@/components/sections/FeedbackForm";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-data";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact MI Engineers & Services for HVAC, electrical, fire protection, AMC, and rental AC requirements across Delhi NCR.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageHero
        actions={
          <>
            <Button href={`tel:+91${siteConfig.phones[0]}`}>Call Now</Button>
            <Button href={siteConfig.whatsappUrl} variant="secondary">
              WhatsApp
            </Button>
          </>
        }
        description="The contact experience is separated into its own page so customers can focus on direct inquiry, callback requests, location, and contact details without scrolling through unrelated sections."
        eyebrow="Contact"
        title="Reach MI Engineers for service inquiries, quotes, and callback requests."
      />

      <section className="section">
        <div className={`container pageBlock ${styles.detailsSection}`}>
          <ContactDetails />

          <div className={styles.formGrid}>
            <ContactForm />
            <MapEmbed />
          </div>

          <div className={styles.feedbackWrap}>
            <FeedbackForm />
          </div>
        </div>
      </section>
    </main>
  );
}
