import { create } from "zustand";

type SubmissionState = "idle" | "success" | "error" | "queued";

type LeadState = {
  formSubmitting: boolean;
  lastSubmissionStatus: SubmissionState;
  setFormSubmitting: (submitting: boolean) => void;
  setLastSubmissionStatus: (status: SubmissionState) => void;
};

export const useLeadStore = create<LeadState>((set) => ({
  formSubmitting: false,
  lastSubmissionStatus: "idle",
  setFormSubmitting: (formSubmitting) => set({ formSubmitting }),
  setLastSubmissionStatus: (lastSubmissionStatus) => set({ lastSubmissionStatus }),
}));
