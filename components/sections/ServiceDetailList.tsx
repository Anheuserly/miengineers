import { serviceItems } from "@/lib/site-data";

import styles from "./ServiceDetailList.module.css";

export function ServiceDetailList() {
  return (
    <div className={styles.list}>
      {serviceItems.map((item) => (
        <section className={styles.card} id={item.id} key={item.id}>
          <div className={styles.head}>
            <span>{item.shortTitle}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>

          <div className={styles.content}>
            <div>
              <h3>What we handle</h3>
              <ul>
                {item.bullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Common sectors</h3>
              <ul>
                {item.sectors.map((sector) => (
                  <li key={sector}>{sector}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
