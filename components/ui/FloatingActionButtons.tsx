"use client";

import { useUiStore } from "@/store/uiStore";

import styles from "./FloatingActionButtons.module.css";

export function FloatingActionButtons() {
  const setQuoteModalOpen = useUiStore((state) => state.setQuoteModalOpen);

  return (
    <div className={styles.root}>
      <a
        aria-label="Call MI Engineers"
        className={styles.action}
        href="tel:+919810842481"
      >
        <span>📞</span>
        <span>Call</span>
      </a>
      <a
        aria-label="Chat on WhatsApp"
        className={styles.action}
        href="https://wa.me/919810842481?text=Hello%20MI%20Engineers%2C%20I%20need%20support."
        rel="noreferrer"
        target="_blank"
      >
        <span>💬</span>
        <span>WhatsApp</span>
      </a>
      <button
        className={`${styles.action} ${styles.quote}`}
        onClick={() => setQuoteModalOpen(true)}
        type="button"
      >
        <span>⚙️</span>
        <span>Quote</span>
      </button>
    </div>
  );
}
