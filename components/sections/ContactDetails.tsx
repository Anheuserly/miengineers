import { siteConfig } from "@/lib/site-data";
import { formatPhone } from "@/lib/utils";

import styles from "./ContactDetails.module.css";

export function ContactDetails() {
  return (
    <div className={styles.grid}>
      <article className={styles.card}>
        <h3>Call us</h3>
        <ul>
          {siteConfig.phones.map((phone) => (
            <li key={phone}>
              <a href={`tel:+91${phone}`}>{formatPhone(phone)}</a>
            </li>
          ))}
        </ul>
      </article>

      <article className={styles.card}>
        <h3>Email</h3>
        <p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
        <small>Suitable for quotations, site coordination, and general inquiries.</small>
      </article>

      <article className={styles.card}>
        <h3>Office address</h3>
        <p>{siteConfig.address}</p>
        <small>Serving Delhi, Noida, Ghaziabad, Faridabad, and Gurugram.</small>
      </article>
    </div>
  );
}
