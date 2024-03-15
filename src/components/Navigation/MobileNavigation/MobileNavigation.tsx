import { Link } from "@tanstack/react-router";
import { MouseEvent, useState } from "react";

import useNavigationItems from "@/hooks/navigations/useNavigationItems.tsx";

import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";

const MobileNavigation = () => {
	const navigations = useNavigationItems();
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	return (
		<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleOpenNavMenu}
				color="inherit">
				<MenuIcon />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				sx={{
					display: { xs: "flex", md: "none" },
				}}>
				{navigations.map((page) => (
					<Link key={page.label} to={page.to} className="[&.active]:font-bold">
						{page.label}
					</Link>
				))}
			</Menu>
		</Box>
	);
};

export default MobileNavigation;
