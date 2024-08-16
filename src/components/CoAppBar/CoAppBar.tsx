"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import AppSettings from "@/components/AppSettings/AppSettings";
import HeaderNavigation from "@/components/Navigation/HeaderNavigation/HeaderNavigation";

import classes from "./coAppBar.module.scss";

function CoAppBar() {
	return (
		<AppBar
			classes={{
				root: classes.coAppBar,
			}}
			position="static">
			<div className={classes.appBarContainer}>
				<Toolbar className={classes.appBarToolbar} disableGutters>
					<HeaderNavigation />

					<AppSettings />
				</Toolbar>
			</div>
		</AppBar>
	);
}

export default CoAppBar;
