import { createWhatsAppHref } from "@/lib/utils";

import { Button } from "../ui/Button";
import styles from "./ContactCta.module.css";

type ContactCtaProps = {
  title: string;
  description: string;
};

export function ContactCta({ title, description }: ContactCtaProps) {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.banner}>
          <div>
            <span className={styles.eyebrow}>Need assistance?</span>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>

          <div className={styles.actions}>
            <Button href="/contact">Contact Us</Button>
            <Button
              href={createWhatsAppHref(
                "Hello MI Engineers, I would like to discuss a service requirement.",
              )}
              variant="secondary"
            >
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
