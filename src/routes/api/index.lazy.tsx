import { createLazyFileRoute } from "@tanstack/react-router";

import ApiPage from "@/components/Pages/ApiPage/ApiPage.tsx";

export const Route = createLazyFileRoute("/api/")({
	component: ApiPage,
});
