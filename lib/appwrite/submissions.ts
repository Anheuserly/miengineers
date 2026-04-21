import { ID } from "appwrite";

import { enqueueSubmission } from "@/lib/offline-queue";
import type {
  ContactFormValues,
  FeedbackFormValues,
  QuickQuoteValues,
} from "@/lib/validation";

import { appwriteIds } from "./collections";
import { getDatabases, getStorage, isAppwriteConfigured } from "./client";

export type SubmissionResult = {
  status: "success" | "queued";
  message: string;
};

function ensureOnline() {
  if (typeof navigator === "undefined") {
    return true;
  }

  return navigator.onLine;
}

export async function submitContactLead(
  values: ContactFormValues | QuickQuoteValues,
): Promise<SubmissionResult> {
  const payload = {
    fullName: values.fullName,
    phone: values.phone,
    email: "email" in values ? values.email ?? "" : "",
    serviceType: values.serviceType,
    message: "message" in values ? values.message ?? "" : "Quick quote request",
    status: "new",
    source: "website_contact_form",
    createdAt: new Date().toISOString(),
  };

  if (!ensureOnline() || !isAppwriteConfigured()) {
    enqueueSubmission({
      kind: "contact",
      payload,
      createdAt: payload.createdAt,
    });

    return {
      status: "queued",
      message:
        "Your request was safely queued on this device. Add Appwrite env vars to send live leads.",
    };
  }

  const databases = getDatabases();

  if (!databases) {
    enqueueSubmission({
      kind: "contact",
      payload,
      createdAt: payload.createdAt,
    });

    return {
      status: "queued",
      message:
        "Appwrite client is not ready yet, so this lead was queued locally.",
    };
  }

  await databases.createDocument(
    appwriteIds.databaseId,
    appwriteIds.contactsCollectionId,
    ID.unique(),
    payload,
  );

  return {
    status: "success",
    message: "We'll call you within 30 minutes.",
  };
}

export async function submitFeedback(
  values: FeedbackFormValues,
): Promise<SubmissionResult> {
  const payload = {
    customerName: values.customerName,
    serviceUsed: values.serviceUsed,
    rating: values.rating,
    comment: values.comment ?? "",
    approved: false,
    submittedAt: new Date().toISOString(),
  };

  if (!ensureOnline() || !isAppwriteConfigured()) {
    enqueueSubmission({
      kind: "feedback",
      payload,
      createdAt: payload.submittedAt,
    });

    return {
      status: "queued",
      message:
        "Feedback was saved locally. Configure Appwrite storage and database env vars to enable live submissions.",
    };
  }

  const databases = getDatabases();
  const storage = getStorage();

  if (!databases || !storage) {
    enqueueSubmission({
      kind: "feedback",
      payload,
      createdAt: payload.submittedAt,
    });

    return {
      status: "queued",
      message:
        "Feedback was queued because Appwrite storage is not fully configured yet.",
    };
  }

  let attachmentId = "";

  if (values.attachment) {
    const response = await storage.createFile(
      appwriteIds.feedbackBucketId,
      ID.unique(),
      values.attachment,
    );

    attachmentId = response.$id;
  }

  await databases.createDocument(
    appwriteIds.databaseId,
    appwriteIds.feedbacksCollectionId,
    ID.unique(),
    {
      ...payload,
      attachmentId,
    },
  );

  return {
    status: "success",
    message: "Thank you for the feedback. Our team will review it shortly.",
  };
}
