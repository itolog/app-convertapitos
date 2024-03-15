import { Link } from "@tanstack/react-router";

import useNavigationItems from "@/hooks/navigations/useNavigationItems.tsx";
import CoText from "@/shared/ui/CoText/CoText.tsx";

import Box from "@mui/material/Box";

const BaseNavigation = () => {
	const navigations = useNavigationItems();

	return (
		<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
			{navigations.map((page) => (
				<Link key={page.label} to={page.to} className="[&.active]:font-bold">
					<CoText>{page.label}</CoText>
				</Link>
			))}
		</Box>
	);
};

export default BaseNavigation;
