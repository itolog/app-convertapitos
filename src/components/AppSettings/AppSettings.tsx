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
			<CoPopper
				arrow
				trigger={trigger}
				renderChildren={() => {
					return (
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<ThemeSwitch />
							</Grid>

							<Grid item xs={12}>
								<LangSwitcher width={"100%"} />
							</Grid>
						</Grid>
					);
				}}
			/>
		</div>
	);
};

export default AppSettings;
