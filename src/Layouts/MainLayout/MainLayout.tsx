import { Outlet } from "@tanstack/react-router";

import useBootstrapApp from "@/hooks/useBootstrapApp.tsx";

import CoAppBar from "@/components/CoAppBar/CoAppBar";
import TanStackRouterDevtools from "@/components/TanStackRouterDevtools/TanStackRouterDevtools";

import classes from "./mainLayout.module.scss";

const MainLayout = () => {
	useBootstrapApp();

	return (
		<div className={classes.mainLayout}>
			<CoAppBar />

			<main className={classes.main}>
				<Outlet />
			</main>

			<TanStackRouterDevtools />
		</div>
	);
};

export default MainLayout;
