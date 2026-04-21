import { whyChooseUs } from "@/lib/site-data";

import { SectionHeading } from "../ui/SectionHeading";
import styles from "./WhyChooseSection.module.css";

export function WhyChooseSection() {
  return (
    <section className="section sectionMuted">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A more credible presentation for a service-led engineering business."
          description="The redesign shifts the website toward a lighter, structured, and practical experience that matches how customers evaluate a local technical service company."
        />

        <div className={styles.grid}>
          {whyChooseUs.map((item) => (
            <article className={styles.card} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
