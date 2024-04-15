import { createLazyFileRoute } from "@tanstack/react-router";

import ConvertPage from "@/Pages/ConvertPage/ConvertPage.tsx";

import PageLoader from "@/components/Loaders/PageLoader/PageLoader.tsx";

export const Route = createLazyFileRoute("/")({
	component: ConvertPage,
	pendingComponent: PageLoader,
});
