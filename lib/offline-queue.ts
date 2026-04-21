export type QueuedSubmission =
  | {
      kind: "contact";
      payload: Record<string, string>;
      createdAt: string;
    }
  | {
      kind: "feedback";
      payload: Record<string, string | number>;
      createdAt: string;
    };

const queueKey = "mi-engineers.pending-submissions";

function getQueue() {
  if (typeof window === "undefined") {
    return [] as QueuedSubmission[];
  }

  const raw = window.localStorage.getItem(queueKey);

  if (!raw) {
    return [] as QueuedSubmission[];
  }

  try {
    return JSON.parse(raw) as QueuedSubmission[];
  } catch {
    return [] as QueuedSubmission[];
  }
}

export function enqueueSubmission(item: QueuedSubmission) {
  if (typeof window === "undefined") {
    return;
  }

  const nextQueue = [...getQueue(), item];
  window.localStorage.setItem(queueKey, JSON.stringify(nextQueue));
}

export function readQueuedSubmissions() {
  return getQueue();
}
