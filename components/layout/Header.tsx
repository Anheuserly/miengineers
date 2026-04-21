"use client";

import { navItems, siteConfig } from "@/lib/site-data";
import { useUiStore } from "@/store/uiStore";
import { useScrollProgress } from "@/hooks/useScrollProgress";

import { Button } from "../ui/Button";
import styles from "./Header.module.css";

export function Header() {
  const progress = useScrollProgress();
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);
  const setQuoteModalOpen = useUiStore((state) => state.setQuoteModalOpen);

  return (
    <>
      <div
        aria-hidden="true"
        className={styles.progress}
        style={{ transform: `scaleX(${Math.max(progress, 0.02)})` }}
      />
      <header className={styles.header}>
        <div className={styles.brandLockup}>
          <span className={styles.brandMark}>MI</span>
          <div>
            <p className={styles.brandName}>{siteConfig.companyName}</p>
            <p className={styles.brandMeta}>{siteConfig.tagline}</p>
          </div>
        </div>

        <nav aria-label="Primary navigation" className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a className={styles.phone} href="tel:+919810842481">
            {siteConfig.phones[0]}
          </a>
          <Button onClick={() => setQuoteModalOpen(true)} variant="secondary">
            Request Callback
          </Button>
          <button
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
            className={styles.menuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className={styles.mobilePanel}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false);
                setQuoteModalOpen(true);
              }}
            >
              Request Callback
            </Button>
          </div>
        ) : null}
      </header>
    </>
  );
}
