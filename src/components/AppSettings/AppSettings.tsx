import { MouseEvent, useState } from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import ThemeSwitch from "@/components/UI/ThemeSwitch/ThemeSwitch.tsx";

const settings = ["Profile", "Account", "Dashboard", "Logout"];
const AppSettings = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<div>
			<Tooltip arrow title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
				</IconButton>
			</Tooltip>
			<Menu
				classes={{
					root: "co-menu",
					paper: "co-menu--paper",
					list: "co-menu--list",
				}}
				sx={{ mt: "45px", justifyItems: "center" }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}>
				{settings.map((setting) => (
					<MenuItem
						classes={{
							root: "co-menu--item",
						}}
						key={setting}
						onClick={handleCloseUserMenu}>
						<Typography textAlign="center">{setting}</Typography>
					</MenuItem>
				))}
				<MenuItem>
					<ThemeSwitch />
				</MenuItem>
			</Menu>
		</div>
	);
};

export default AppSettings;
