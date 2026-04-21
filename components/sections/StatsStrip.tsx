import { stats } from "@/lib/site-data";

import styles from "./StatsStrip.module.css";

export function StatsStrip() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {stats.map((item) => (
          <div className={styles.card} key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
