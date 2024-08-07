import { createLazyFileRoute } from "@tanstack/react-router";

import ApiPage from "@/Pages/ApiPage/ApiPage.tsx";

import PageLoader from "@/components/Loaders/PageLoader/PageLoader.tsx";

export const Route = createLazyFileRoute("/api/")({
	component: ApiPage,
	pendingComponent: PageLoader,
});
