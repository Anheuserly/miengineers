import Link from "next/link";

import { serviceItems } from "@/lib/site-data";

import { SectionHeading } from "../ui/SectionHeading";
import styles from "./ServicePreviewGrid.module.css";

export function ServicePreviewGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Services"
          title="Clear service categories for customers who want direct answers."
          description="The service structure is simplified into practical groups so visitors can quickly understand what MI Engineers handles and where to inquire."
        />

        <div className={styles.grid}>
          {serviceItems.slice(0, 3).map((item, index) => (
            <article className={styles.card} key={item.id}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <ul>
                {item.bullets.slice(0, 3).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className={styles.link} href={`/services#${item.id}`}>
                View details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
