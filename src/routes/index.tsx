import { createFileRoute } from "@tanstack/react-router";

import ConvertPage from "@/components/Pages/ConvertPage/ConvertPage.tsx";

export const Route = createFileRoute("/")({
	component: ConvertPage,
});
