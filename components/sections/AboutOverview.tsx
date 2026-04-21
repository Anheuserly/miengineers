import { aboutPoints, brands, sectors, siteConfig } from "@/lib/site-data";

import styles from "./AboutOverview.module.css";

export function AboutOverview() {
  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div className={styles.story}>
          <span className={styles.eyebrow}>About The Company</span>
          <h2>Built for dependable service, not unnecessary design noise.</h2>
          <p>
            The updated website positions MI Engineers & Services as a practical
            technical partner for HVAC, electrical, and fire protection work. The
            focus is on credibility, direct communication, and service clarity.
          </p>
          <p>
            Led by {siteConfig.owner}, the business is presented with a cleaner
            structure that works better for customer trust, local discovery, and
            everyday lead generation.
          </p>
          <ul className={styles.points}>
            {aboutPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className={styles.sideGrid}>
          <div className={styles.card}>
            <h3>Common sectors served</h3>
            <ul>
              {sectors.map((sector) => (
                <li key={sector}>{sector}</li>
              ))}
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Brands and system familiarity</h3>
            <div className={styles.brandCloud}>
              {brands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
