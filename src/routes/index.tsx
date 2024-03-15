import { createFileRoute } from "@tanstack/react-router";

import Convert from "@/components/Convert/Convert.tsx";

export const Route = createFileRoute("/")({
	component: Convert,
});
