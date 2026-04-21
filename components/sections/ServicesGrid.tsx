"use client";

import { services } from "@/lib/site-data";
import { useUiStore } from "@/store/uiStore";

import { AnimatedSection } from "../ui/AnimatedSection";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./ServicesGrid.module.css";

export function ServicesGrid() {
  const activeServiceTab = useUiStore((state) => state.activeServiceTab);
  const setActiveServiceTab = useUiStore((state) => state.setActiveServiceTab);

  const activeCategory =
    services.find((service) => service.name === activeServiceTab) ?? services[0];

  return (
    <AnimatedSection className="section" id="services">
      <div className="container">
        <SectionHeading
          description="Integrated mechanical, electrical, and fire protection support with premium site coordination, maintenance planning, and field-ready execution."
          eyebrow="Service Matrix"
          title="One engineering partner across cooling, power, and protection."
        />

        <div className={styles.tabs}>
          {services.map((service) => (
            <button
              key={service.name}
              className={
                activeCategory.name === service.name ? styles.activeTab : styles.tab
              }
              onClick={() => setActiveServiceTab(service.name)}
              type="button"
            >
              <span>{service.icon}</span>
              <span>{service.name}</span>
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {activeCategory.items.map((item, index) => (
            <Card className={styles.card} key={item.title}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Card>
          ))}
        </div>

        <Card className={styles.rentalBanner}>
          <div>
            <span className={styles.bannerLabel}>Rental Support</span>
            <h3>Need fast cooling capacity without a full install cycle?</h3>
          </div>
          <p>
            AC on rent is available for offices, event venues, temporary cabins,
            retail launches, and urgent stop-gap cooling requirements.
          </p>
        </Card>
      </div>
    </AnimatedSection>
  );
}
