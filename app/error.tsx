"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="stateShell">
      <div className="stateCard">
        <h1>Something interrupted the page.</h1>
        <p>{error.message || "Please try again or contact MI Engineers directly."}</p>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
