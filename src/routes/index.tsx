import { createFileRoute } from "@tanstack/react-router";

import ConvertPage from "@/Pages/ConvertPage/ConvertPage.tsx";

export const Route = createFileRoute("/")({
	component: ConvertPage,
});
