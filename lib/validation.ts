import { z } from "zod";

export const serviceTypeOptions = [
  "HVAC",
  "Electrical",
  "Fire Protection",
  "Rental AC",
  "AMC",
  "Other",
] as const;

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  phone: z
    .string()
    .min(10, "Enter a valid phone number.")
    .max(20, "Phone number looks too long."),
  email: z
    .string()
    .email("Enter a valid email address.")
    .or(z.literal(""))
    .optional(),
  serviceType: z.enum(serviceTypeOptions),
  message: z.string().max(2000, "Message is too long.").optional(),
});

export const quickQuoteSchema = contactFormSchema.pick({
  fullName: true,
  phone: true,
  serviceType: true,
});

export const feedbackFormSchema = z.object({
  customerName: z.string().min(2, "Enter your name."),
  serviceUsed: z.string().min(2, "Tell us which service you used."),
  rating: z.number().min(1, "Please select a rating.").max(5),
  comment: z.string().max(1000, "Comment is too long.").optional(),
  attachment: z
    .custom<File | undefined>((value) => {
      if (value === undefined) {
        return true;
      }

      if (typeof File === "undefined") {
        return true;
      }

      return value instanceof File;
    })
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type QuickQuoteValues = z.infer<typeof quickQuoteSchema>;
export type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;
