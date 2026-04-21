export const appwriteIds = {
  databaseId:
    process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "mi_engineers_db",
  contactsCollectionId:
    process.env.NEXT_PUBLIC_APPWRITE_CONTACTS_COLLECTION_ID ?? "contacts",
  feedbacksCollectionId:
    process.env.NEXT_PUBLIC_APPWRITE_FEEDBACKS_COLLECTION_ID ?? "feedbacks",
  feedbackBucketId:
    process.env.NEXT_PUBLIC_APPWRITE_FEEDBACK_BUCKET_ID ??
    "feedback_attachments",
} as const;
