import { siteConfig } from "@/lib/site-data";
import { createWhatsAppHref } from "@/lib/utils";

import { Button } from "../ui/Button";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Delhi NCR Service Partner</span>
          <h1>Professional HVAC, electrical, and fire protection support for real site needs.</h1>
          <p>
            MI Engineers & Services is positioned as a dependable servicing and
            project-support company for homes, offices, retail spaces, and
            commercial requirements across Delhi NCR.
          </p>

          <div className={styles.actions}>
            <Button href="/contact">Get a Quote</Button>
            <Button
              href={createWhatsAppHref(
                "Hello MI Engineers, I want to discuss a service requirement.",
              )}
              variant="secondary"
            >
              WhatsApp Chat
            </Button>
          </div>

          <ul className={styles.highlights}>
            <li>HVAC installation, repair, AMC, and rental support</li>
            <li>Electrical service and project-related works</li>
            <li>Fire fighting and fire alarm system execution</li>
          </ul>
        </div>

        <div className={styles.panel}>
          <div className={styles.panelTop}>
            <span className={styles.panelLabel}>Quick Service Summary</span>
            <strong>{siteConfig.emergencyLine}</strong>
          </div>

          <div className={styles.panelGrid}>
            <div>
              <span>Primary Services</span>
              <strong>HVAC • Electrical • Fire Protection</strong>
            </div>
            <div>
              <span>Working Hours</span>
              <strong>{siteConfig.businessHours}</strong>
            </div>
            <div>
              <span>Coverage</span>
              <strong>{siteConfig.serviceAreas.join(", ")}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
