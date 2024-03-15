import { ChangeEvent, FC, useCallback } from "react";

import { Switch, SwitchProps } from "@mui/material";

import { useAppDispatch, useAppSelector } from "@/store/hooks.ts";
import { getTheme } from "@/store/settings/selectors.ts";
import { setTheme } from "@/store/settings/settingsSlice.ts";

import classes from "./themeSwitch.module.scss";

const ThemeSwitch: FC<SwitchProps> = (props) => {
	const dispatch = useAppDispatch();
	const theme = useAppSelector(getTheme);

	const handleThemeChange = useCallback(
		({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
			dispatch(setTheme(checked ? "dark" : "light"));
		},
		[dispatch],
	);
	return (
		<Switch
			classes={{
				root: classes.root,
				switchBase: classes.switchBase,
				checked: classes.checked,
				thumb: classes.thumb,
				track: classes.track,
			}}
			checked={theme === "dark"}
			onChange={handleThemeChange}
			{...props}
		/>
	);
};

export default ThemeSwitch;
