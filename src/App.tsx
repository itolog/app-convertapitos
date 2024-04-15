import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Suspense } from "react";

import useBootstrapApp from "@/hooks/useBootstrapApp.tsx";
import { routeTree } from "@/routeTree.gen.ts";

import PageLoader from "@/components/Loaders/PageLoader/PageLoader.tsx";

const router = createRouter({
	routeTree,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const App = () => {
	useBootstrapApp();

	return (
		<Suspense fallback={<PageLoader />}>
			<RouterProvider router={router} />
		</Suspense>
	);
};

export default App;
