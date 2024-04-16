import useNavigationItems from "@/hooks/navigations/useNavigationItems.tsx";

import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CoLink from "@/components/Navigation/CoLink/CoLink.tsx";

const BaseNavigation = () => {
	const navigations = useNavigationItems();

	return (
		<>
			<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
			<Typography
				variant="h5"
				noWrap
				component="a"
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
			<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", gap: 10 } }}>
				{navigations.map(({ to, label }) => {
					return <CoLink key={label} to={to} label={label} />;
				})}
			</Box>
		</>
	);
};

export default BaseNavigation;
