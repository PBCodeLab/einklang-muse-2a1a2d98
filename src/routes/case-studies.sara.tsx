import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies/sara")({
  beforeLoad: () => {
    throw redirect({ to: "/case-studies", statusCode: 301 });
  },
});
