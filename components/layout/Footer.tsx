import Link from "next/link";

import { navItems, serviceItems, siteConfig } from "@/lib/site-data";
import { createWhatsAppHref, formatPhone } from "@/lib/utils";

import { Button } from "../ui/Button";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mainGrid}>
          <div className={styles.brandBlock}>
            <span className={styles.kicker}>MI Engineers & Services</span>
            <h2>Reliable technical support for cooling, power, and fire safety.</h2>
            <p>{siteConfig.description}</p>
            <div className={styles.ctaRow}>
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
          </div>

          <div>
            <h3>Pages</h3>
            <ul className={styles.linkList}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul className={styles.linkList}>
              {serviceItems.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <Link href={`/services#${item.id}`}>{item.title}</Link>
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
        </div>

        <div className={styles.bottomBar}>
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </span>
          <span>
            {siteConfig.businessHours} • {siteConfig.emergencyLine}
          </span>
        </div>
      </div>
    </footer>
  );
}
