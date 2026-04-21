import { ReactNode } from "react";

import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  aside?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          {actions ? <div className={styles.actions}>{actions}</div> : null}
        </div>

        {aside ? <div className={styles.aside}>{aside}</div> : null}
      </div>
    </section>
  );
}
