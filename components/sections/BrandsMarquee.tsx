import { brandMarquee } from "@/lib/site-data";

import { AnimatedSection } from "../ui/AnimatedSection";
import styles from "./BrandsMarquee.module.css";

export function BrandsMarquee() {
  const repeated = [...brandMarquee, ...brandMarquee];

  return (
    <AnimatedSection className="section">
      <div className="container">
        <div className={styles.shell}>
          <span className={styles.label}>Brand Familiarity</span>
          <div className={styles.track}>
            <div className={styles.marquee}>
              {repeated.map((brand, index) => (
                <span key={`${brand}-${index}`}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
