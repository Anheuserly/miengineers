"use client";

import { useState } from "react";

import { specializations } from "@/lib/site-data";

import { AnimatedSection } from "../ui/AnimatedSection";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./SpecializationsShowcase.module.css";

export function SpecializationsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = specializations[activeIndex];

  return (
    <AnimatedSection className="section" id="specializations">
      <div className="container">
        <SectionHeading
          description="Focused execution across complex HVAC, fire safety, and electrical scopes, with attention to serviceability, reliability, and compliance readiness."
          eyebrow="Deep Expertise"
          title="Specializations built for system complexity, not just basic servicing."
        />

        <div className={styles.layout}>
          <div className={styles.list}>
            {specializations.map((item, index) => (
              <button
                key={item.name}
                className={index === activeIndex ? styles.activeItem : styles.item}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                type="button"
              >
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.certified ? "Certified capability" : "Execution-ready scope"}</p>
                </div>
                <span>{item.certified ? "Certified" : "Advanced"}</span>
              </button>
            ))}
          </div>

          <Card className={styles.detailCard}>
            <span className={styles.detailLabel}>Current Focus</span>
            <h3>{activeItem.name}</h3>
            <p>
              {activeItem.details ??
                "Certified partner-ready execution with careful commissioning and service continuity support."}
            </p>

            {activeItem.brands ? (
              <div className={styles.brandRow}>
                {activeItem.brands.map((brand) => (
                  <span key={brand}>{brand}</span>
                ))}
              </div>
            ) : null}
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}
