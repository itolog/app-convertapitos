import { Outlet } from "@tanstack/react-router";

import useTheme from "@/hooks/settings/useTheme.tsx";

import CoAppBar from "@/components/CoAppBar/CoAppBar";
import TanStackRouterDevtools from "@/components/TanStackRouterDevtools/TanStackRouterDevtools";

import classes from "./mainLayout.module.scss";

const MainLayout = () => {
	useTheme();

	return (
		<div className={classes.MainLayout}>
			<CoAppBar />

			<main className={classes.Main}>
				<Outlet />
			</main>

			<TanStackRouterDevtools />
		</div>
	);
};

export default MainLayout;
