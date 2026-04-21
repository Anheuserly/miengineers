"use client";

import { useEffect, useState } from "react";

import { useInViewOnce } from "@/hooks/useInViewOnce";
import { trustMetrics } from "@/lib/site-data";

import { AnimatedSection } from "../ui/AnimatedSection";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./TrustIndicators.module.css";

function Counter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [value, setValue] = useState(0);
  const { isInView, ref } = useInViewOnce<HTMLSpanElement>();

  useEffect(() => {
    if (!isInView) {
      return;
    }

    let frame = 0;
    const duration = 1800;
    const start = performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.round(target * progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <span className={styles.value} ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

export function TrustIndicators() {
  return (
    <AnimatedSection className="section" id="trust">
      <div className="container">
        <SectionHeading
          description="Local credibility grows when engineering quality is matched with responsive service, clear communication, and reliable maintenance execution."
          eyebrow="Why MI Engineers"
          title="Built for confidence from the first site visit to long-term support."
        />

        <div className={styles.grid}>
          {trustMetrics.map((metric) => (
            <Card className={styles.card} key={metric.label}>
              <Counter suffix={metric.suffix} target={metric.value} />
              <p>{metric.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
