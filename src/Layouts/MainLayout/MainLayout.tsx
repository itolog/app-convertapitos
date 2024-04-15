import { Outlet } from "@tanstack/react-router";

import CoAppBar from "@/components/CoAppBar/CoAppBar";
import TanStackRouterDevtools from "@/components/TanStackRouterDevtools/TanStackRouterDevtools";

import classes from "./mainLayout.module.scss";

const MainLayout = () => {
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
