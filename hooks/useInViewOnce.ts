"use client";

import { useInView } from "framer-motion";
import { RefObject, useRef } from "react";

export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const isInView = useInView(ref as RefObject<T>, {
    once: true,
    margin: "-100px 0px",
  });

  return { ref, isInView };
}
