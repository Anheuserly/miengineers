"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems, siteConfig } from "@/lib/site-data";
import { useUiStore } from "@/store/uiStore";

import { Button } from "../ui/Button";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const mobileMenuOpen = useUiStore((state) => state.mobileMenuOpen);
  const setMobileMenuOpen = useUiStore((state) => state.setMobileMenuOpen);
  const setQuoteModalOpen = useUiStore((state) => state.setQuoteModalOpen);

  return (
    <>
      <div className={styles.topBar}>
        <div className={`container ${styles.topBarInner}`}>
          <p>
            {siteConfig.emergencyLine} • Serving {siteConfig.serviceAreas.join(", ")}
          </p>
          <div className={styles.topLinks}>
            <a href={`tel:+91${siteConfig.phones[0]}`}>Call: {siteConfig.phones[0]}</a>
            <a href={siteConfig.whatsappUrl} rel="noreferrer" target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <Link className={styles.brand} href="/">
            <span className={styles.brandMark}>MI</span>
            <span>
              <strong>{siteConfig.companyName}</strong>
              <small>{siteConfig.tagline}</small>
            </span>
          </Link>

          <nav aria-label="Primary navigation" className={styles.nav}>
            {navItems.map((item) => (
              <Link
                className={isActive(pathname, item.href) ? styles.activeLink : styles.link}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <a className={styles.phone} href={`tel:+91${siteConfig.phones[0]}`}>
              {siteConfig.phones[0]}
            </a>
            <Button onClick={() => setQuoteModalOpen(true)} variant="primary">
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
              <span />
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className={`container ${styles.mobilePanel}`}>
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
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
