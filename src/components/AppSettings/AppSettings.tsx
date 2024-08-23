"use client";

import { useMemo } from "react";

import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import SignInButton from "@/components/Buttons/SignInButton/SignInButton";
import SignOut from "@/components/Buttons/SignOut/SignOut";
import LangSwitcher from "@/components/Inputs/LangSwitcher/LangSwitcher";
import CoPopper from "@/components/Modals/CoPopper/CoPopper";
import ThemeSwitch from "@/components/ThemeSwitch/ThemeSwitch";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const AppSettings = () => {
	const user = useAppSelector(getUser);

	const trigger = useMemo(() => {
		const ava = user?.image ?? undefined;
		const alt = user?.name ?? "Anonymous";

		return <Avatar alt={alt} src={ava} />;
	}, [user]);

	return (
		<CoPopper
			arrow
			trigger={trigger}
			renderChildren={({ close }) => {
				return (
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<ThemeSwitch close={close} />
						</Grid>

						<Grid item xs={12}>
							<LangSwitcher close={close} width={"100%"} />
						</Grid>

						<Grid item xs={12}>
							{user ? <SignOut onClick={close} /> : <SignInButton onClick={close} />}
						</Grid>
					</Grid>
				);
			}}
		/>
	);
};

export default AppSettings;
