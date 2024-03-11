import { createLazyFileRoute } from "@tanstack/react-router";

const Api = () => {
  return <div>API</div>;
};
export const Route = createLazyFileRoute("/api/")({
  component: Api,
});
