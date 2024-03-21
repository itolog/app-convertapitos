import { useMemo } from "react";

import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import LangSwitcher from "@/components/Inputs/LangSwitcher/LangSwitcher.tsx";
import CoPopper from "@/components/Modals/CoPopper/CoPopper.tsx";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch.tsx";

const AppSettings = () => {
	const trigger = useMemo(() => {
		return <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />;
	}, []);

	return (
		<div>
			<CoPopper arrow trigger={trigger}>
				<Grid item xs={2}>
					<ThemeSwitch />
					<LangSwitcher />
				</Grid>
			</CoPopper>
		</div>
	);
};

export default AppSettings;
