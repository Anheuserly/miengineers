import { navItems, siteConfig } from "@/lib/site-data";
import { createWhatsAppHref, formatPhone } from "@/lib/utils";

import { Button } from "../ui/Button";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brandBlock}>
            <span className={styles.kicker}>Premium Field Support</span>
            <h2>{siteConfig.companyName}</h2>
            <p>{siteConfig.description}</p>
            <div className={styles.ctaRow}>
              <Button href="#contact">Get a Quote</Button>
              <Button
                href={createWhatsAppHref(
                  "Hello MI Engineers, I need support with a service request.",
                )}
                variant="whatsapp"
              >
                WhatsApp Chat
              </Button>
            </div>
          </div>

          <div>
            <h3>Navigate</h3>
            <ul className={styles.linkList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul className={styles.linkList}>
              {siteConfig.phones.map((phone) => (
                <li key={phone}>
                  <a href={`tel:+91${phone}`}>{formatPhone(phone)}</a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h3>Hours</h3>
            <p className={styles.meta}>{siteConfig.businessHours}</p>
            <h3>Coverage</h3>
            <p className={styles.meta}>{siteConfig.serviceAreas.join(" • ")}</p>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights
            reserved.
          </span>
          <span>Built for fast local discovery, lead capture, and service trust.</span>
        </div>
      </div>
    </footer>
  );
}
