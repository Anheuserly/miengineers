import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "outline" | "whatsapp";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  href?: string;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  className,
  fullWidth = false,
  href,
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    styles.button,
    styles[variant],
    fullWidth && styles.fullWidth,
    className,
  );

  if (href) {
    if (href.startsWith("/") || href.startsWith("#")) {
      return (
        <Link className={buttonClassName} href={href}>
          {children}
        </Link>
      );
    }

    return (
      <a
        className={buttonClassName}
        href={href}
        rel="noreferrer"
        target="_blank"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}
