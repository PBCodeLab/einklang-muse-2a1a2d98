import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/products/custom")({
  beforeLoad: () => {
    throw redirect({ to: "/products/agent", statusCode: 301 });
  },
});
