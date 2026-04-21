import { faqs } from "@/lib/site-data";

import { AnimatedSection } from "../ui/AnimatedSection";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  return (
    <AnimatedSection className="section">
      <div className="container">
        <SectionHeading
          align="center"
          description="Common questions for service response, project support, maintenance, and fire-system coordination."
          eyebrow="FAQs"
          title="Answers that reduce friction before the first call."
        />

        <div className={styles.list}>
          {faqs.map((faq) => (
            <details className={styles.item} key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
