import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import styles from "./Card.module.css";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <div className={cn(styles.card, className)}>{children}</div>;
}
