import { workProcess } from "@/lib/site-data";

import { SectionHeading } from "../ui/SectionHeading";
import styles from "./ProcessSection.module.css";

export function ProcessSection() {
  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <div>
          <SectionHeading
            eyebrow="How We Work"
            title="Simple flow, clear expectations, and practical service coordination."
            description="The website now reflects a business process customers understand easily: discuss requirement, assess the work, and execute with proper follow-up."
          />
        </div>

        <div className={styles.list}>
          {workProcess.map((item) => (
            <article className={styles.item} key={item.step}>
              <span>{item.step}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
