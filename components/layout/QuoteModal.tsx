"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useLeadForm } from "@/hooks/useLeadForm";
import type { QuickQuoteValues } from "@/lib/validation";
import { quickQuoteSchema, serviceTypeOptions } from "@/lib/validation";
import { useLeadStore } from "@/store/leadStore";
import { useUiStore } from "@/store/uiStore";

import { Button } from "../ui/Button";
import styles from "./QuoteModal.module.css";

export function QuoteModal() {
  const [message, setMessage] = useState("");
  const open = useUiStore((state) => state.quoteModalOpen);
  const setOpen = useUiStore((state) => state.setQuoteModalOpen);
  const formSubmitting = useLeadStore((state) => state.formSubmitting);
  const { submitContact } = useLeadForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuickQuoteValues>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      serviceType: "HVAC",
    },
  });

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, setOpen]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      const result = await submitContact(values);
      setMessage(result.message);
      reset();

      if (result.status === "success") {
        window.setTimeout(() => setOpen(false), 1200);
      }
    } catch (error) {
      const nextMessage =
        error instanceof Error ? error.message : "Unable to submit right now.";
      setMessage(nextMessage);
    }
  });

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          animate={{ opacity: 1 }}
          className={styles.overlay}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={styles.modal}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              aria-label="Close quote modal"
              className={styles.close}
              onClick={() => setOpen(false)}
              type="button"
            >
              ×
            </button>

            <span className={styles.eyebrow}>Fast Callback</span>
            <h2>Tell us what you need. We’ll get back quickly.</h2>
            <p>
              Quick quote requests are designed for urgent HVAC, electrical, fire
              protection, AMC, and rental AC support.
            </p>

            <form className={styles.form} onSubmit={onSubmit}>
              <label className={styles.field}>
                <span>Name</span>
                <input placeholder="Your full name" {...register("fullName")} />
                {errors.fullName ? (
                  <small>{errors.fullName.message}</small>
                ) : null}
              </label>

              <label className={styles.field}>
                <span>Phone</span>
                <input placeholder="10-digit mobile number" {...register("phone")} />
                {errors.phone ? <small>{errors.phone.message}</small> : null}
              </label>

              <label className={styles.field}>
                <span>Service Type</span>
                <select {...register("serviceType")}>
                  {serviceTypeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <Button fullWidth disabled={formSubmitting} type="submit">
                {formSubmitting ? "Submitting..." : "Request Callback"}
              </Button>
              {message ? <p className={styles.message}>{message}</p> : null}
            </form>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
