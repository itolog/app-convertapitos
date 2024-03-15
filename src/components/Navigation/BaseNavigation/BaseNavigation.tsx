import { Link } from "@tanstack/react-router";

import useNavigationItems from "@/hooks/navigations/useNavigationItems.tsx";
import CoText from "@/shared/ui/CoText/CoText.tsx";

import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const BaseNavigation = () => {
	const navigations = useNavigationItems();

	return (
		<>
			<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
			<Typography
				variant="h5"
				noWrap
				component="a"
				href="#app-bar-with-responsive-menu"
				sx={{
					mr: 2,
					display: { xs: "flex", md: "none" },
					flexGrow: 1,
					fontFamily: "monospace",
					fontWeight: 700,
					letterSpacing: ".3rem",
					color: "inherit",
					textDecoration: "none",
				}}>
				LOGO
			</Typography>
			<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
				{navigations.map((page) => (
					<Link key={page.label} to={page.to} className="[&.active]:font-bold">
						<CoText>{page.label}</CoText>
					</Link>
				))}
			</Box>
		</>
	);
};

export default BaseNavigation;
