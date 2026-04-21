"use client";

import { useMutation } from "@tanstack/react-query";
import { startTransition } from "react";

import {
  submitContactLead,
  submitFeedback,
  type SubmissionResult,
} from "@/lib/appwrite/submissions";
import type {
  ContactFormValues,
  FeedbackFormValues,
  QuickQuoteValues,
} from "@/lib/validation";
import { useLeadStore } from "@/store/leadStore";

export function useLeadForm() {
  const setFormSubmitting = useLeadStore((state) => state.setFormSubmitting);
  const setLastSubmissionStatus = useLeadStore(
    (state) => state.setLastSubmissionStatus,
  );

  const onMutate = () => {
    startTransition(() => {
      setFormSubmitting(true);
      setLastSubmissionStatus("idle");
    });
  };

  const onSettled = (result?: SubmissionResult, error?: Error | null) => {
    startTransition(() => {
      setFormSubmitting(false);

      if (error) {
        setLastSubmissionStatus("error");
        return;
      }

      setLastSubmissionStatus(result?.status ?? "idle");
    });
  };

  const contactMutation = useMutation({
    mutationFn: (values: ContactFormValues | QuickQuoteValues) =>
      submitContactLead(values),
    onMutate,
    onSettled,
  });

  const feedbackMutation = useMutation({
    mutationFn: (values: FeedbackFormValues) => submitFeedback(values),
    onMutate,
    onSettled,
  });

  return {
    submitContact: contactMutation.mutateAsync,
    submitFeedback: feedbackMutation.mutateAsync,
    contactState: contactMutation,
    feedbackState: feedbackMutation,
  };
}
