import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="stateShell">
      <div className="stateCard">
        <h1>Page not found.</h1>
        <p>
          The page you tried to reach isn’t available, but the main services,
          contact options, and quote request flow are ready on the homepage.
        </p>
        <Button href="/">Back to homepage</Button>
      </div>
    </div>
  );
}
