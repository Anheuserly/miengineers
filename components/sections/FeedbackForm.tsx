"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { useLeadForm } from "@/hooks/useLeadForm";
import { useLeadStore } from "@/store/leadStore";
import { feedbackFormSchema, type FeedbackFormValues } from "@/lib/validation";

import { Button } from "../ui/Button";
import styles from "./FeedbackForm.module.css";

const ratings = [1, 2, 3, 4, 5];

export function FeedbackForm() {
  const [message, setMessage] = useState("");
  const formSubmitting = useLeadStore((state) => state.formSubmitting);
  const { submitFeedback } = useLeadForm();

  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      customerName: "",
      serviceUsed: "",
      rating: 5,
      comment: "",
      attachment: undefined,
    },
  });

  const rating = useWatch({
    control,
    name: "rating",
  });

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setValue("attachment", file, { shouldValidate: true });
  };

  const onSubmit = handleSubmit(async (values) => {
    try {
      const result = await submitFeedback(values);
      setMessage(result.message);
      reset({
        customerName: "",
        serviceUsed: "",
        rating: 5,
        comment: "",
        attachment: undefined,
      });
    } catch (error) {
      const nextMessage =
        error instanceof Error ? error.message : "Unable to submit feedback.";
      setMessage(nextMessage);
    }
  });

  return (
    <div className={styles.card}>
      <span className={styles.eyebrow}>Customer Feedback</span>
      <h3>Capture testimonials and post-service experience.</h3>
      <p>
        The upload flow is ready for an Appwrite bucket and feedback collection so
        approved stories can feed a future testimonial section or admin dashboard.
      </p>

      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.field}>
          <span>Name</span>
          <input placeholder="Your name" {...register("customerName")} />
          {errors.customerName ? (
            <small>{errors.customerName.message}</small>
          ) : null}
        </label>

        <label className={styles.field}>
          <span>Service Used</span>
          <input placeholder="Example: VRV service / AC repair" {...register("serviceUsed")} />
          {errors.serviceUsed ? <small>{errors.serviceUsed.message}</small> : null}
        </label>

        <div className={styles.ratingRow}>
          <span>Rating</span>
          <div className={styles.stars}>
            {ratings.map((value) => (
              <button
                key={value}
                className={value <= rating ? styles.activeStar : styles.star}
                onClick={() => setValue("rating", value, { shouldValidate: true })}
                type="button"
              >
                ★
              </button>
            ))}
          </div>
          {errors.rating ? <small>{errors.rating.message}</small> : null}
        </div>

        <label className={styles.field}>
          <span>Comment</span>
          <textarea
            placeholder="Share how the team helped."
            rows={4}
            {...register("comment")}
          />
          {errors.comment ? <small>{errors.comment.message}</small> : null}
        </label>

        <label className={styles.field}>
          <span>Attachment</span>
          <input accept=".jpg,.jpeg,.png,.pdf" onChange={onFileChange} type="file" />
          {errors.attachment ? <small>Attachment must be a valid file.</small> : null}
        </label>

        <Button fullWidth disabled={formSubmitting} type="submit" variant="secondary">
          {formSubmitting ? "Uploading..." : "Submit Feedback"}
        </Button>
        {message ? <p className={styles.message}>{message}</p> : null}
      </form>
    </div>
  );
}
