"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useLeadForm } from "@/hooks/useLeadForm";
import { useLeadStore } from "@/store/leadStore";
import {
  contactFormSchema,
  serviceTypeOptions,
  type ContactFormValues,
} from "@/lib/validation";

import { Button } from "../ui/Button";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const formSubmitting = useLeadStore((state) => state.formSubmitting);
  const { submitContact } = useLeadForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceType: "HVAC",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    try {
      const result = await submitContact(values);
      setMessage(result.message);
      reset();
    } catch (error) {
      const nextMessage =
        error instanceof Error ? error.message : "Unable to submit right now.";
      setMessage(nextMessage);
    }
  });

  return (
    <div className={styles.card}>
      <span className={styles.eyebrow}>Request A Callback</span>
      <h3>Tell us your requirement and our team will get in touch.</h3>
      <p>
        Share your service type, contact details, and basic requirement so MI
        Engineers can respond with the right support.
      </p>

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.field}>
          <span>Full Name</span>
          <input placeholder="Your full name" {...register("fullName")} />
          {errors.fullName ? <small>{errors.fullName.message}</small> : null}
        </label>

        <div className={styles.twoColumn}>
          <label className={styles.field}>
            <span>Phone</span>
            <input placeholder="Phone number" {...register("phone")} />
            {errors.phone ? <small>{errors.phone.message}</small> : null}
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input placeholder="Email address" {...register("email")} />
            {errors.email ? <small>{errors.email.message}</small> : null}
          </label>
        </div>

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

        <label className={styles.field}>
          <span>Message</span>
          <textarea
            placeholder="Tell us about the issue, project, site type, or urgency."
            rows={5}
            {...register("message")}
          />
          {errors.message ? <small>{errors.message.message}</small> : null}
        </label>

        <Button fullWidth disabled={formSubmitting} type="submit">
          {formSubmitting ? "Submitting..." : "Send Inquiry"}
        </Button>
        {message ? <p className={styles.message}>{message}</p> : null}
      </form>
    </div>
  );
}
