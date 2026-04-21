"use client";

import { motion, type Transition } from "framer-motion";

import { siteConfig } from "@/lib/site-data";
import { createWhatsAppHref } from "@/lib/utils";
import { useUiStore } from "@/store/uiStore";

import { Button } from "../ui/Button";
import styles from "./Hero.module.css";

const floatingTransition: Transition = {
  duration: 3,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "reverse" as const,
  ease: "easeInOut",
};

export function Hero() {
  const setQuoteModalOpen = useUiStore((state) => state.setQuoteModalOpen);

  return (
    <section className={`${styles.hero} container`} id="top">
      <motion.div
        animate="visible"
        className={styles.copy}
        initial="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.span
          className={styles.eyebrow}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
          MEP Engineering • HVAC • Fire Safety
        </motion.span>
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
          Precision-engineered comfort, power, and fire protection for Delhi NCR.
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
          MI Engineers & Services delivers installation, repair, AMC coverage,
          emergency breakdown response, and code-conscious fire system execution
          for homes, offices, commercial spaces, and project sites.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
          <Button onClick={() => setQuoteModalOpen(true)}>Request Callback</Button>
          <Button
            href={createWhatsAppHref(
              "Hello MI Engineers, I need help with HVAC, electrical, or fire protection services.",
            )}
            variant="whatsapp"
          >
            WhatsApp Chat
          </Button>
          <Button href="#services" variant="outline">
            Explore Services
          </Button>
        </motion.div>

        <motion.ul
          className={styles.quickMeta}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
        >
          <li>24/7 emergency support</li>
          <li>AMC and rental AC available</li>
          <li>Serving {siteConfig.serviceAreas.join(", ")}</li>
        </motion.ul>
      </motion.div>

      <div className={styles.visual}>
        <div className={styles.orb} />
        <motion.div
          animate={{ y: [-10, 10] }}
          className={styles.panel}
          transition={floatingTransition}
        >
          <span className={styles.panelLabel}>Live Capability Matrix</span>
          <h2>Field-ready teams for HVAC, power, and fire-critical systems.</h2>
          <ul>
            <li>VRV / VRF installations and retrofits</li>
            <li>Hydrant, sprinkler, alarm, and extinguisher systems</li>
            <li>Residential, office, and multi-site service dispatch</li>
          </ul>
        </motion.div>

        <motion.div
          animate={{ y: [10, -10] }}
          className={`${styles.floatingCard} ${styles.topRight}`}
          transition={{ ...floatingTransition, duration: 3.4 }}
        >
          <strong>30 min</strong>
          <span>Lead response target</span>
        </motion.div>

        <motion.div
          animate={{ y: [-8, 8] }}
          className={`${styles.floatingCard} ${styles.bottomLeft}`}
          transition={{ ...floatingTransition, duration: 2.8 }}
        >
          <strong>Rental AC</strong>
          <span>Short and long-term deployment</span>
        </motion.div>

        <motion.div
          animate={{ y: [8, -8] }}
          className={`${styles.floatingCard} ${styles.bottomRight}`}
          transition={{ ...floatingTransition, duration: 3.2 }}
        >
          <strong>Delhi NCR</strong>
          <span>Operational coverage footprint</span>
        </motion.div>
      </div>
    </section>
  );
}
