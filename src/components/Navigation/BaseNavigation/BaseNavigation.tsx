import useNavigationItems from "@/hooks/navigations/useNavigationItems";

import AdbIcon from "@mui/icons-material/Adb";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import BaseNavigationSkeleton from "@/components/Navigation/BaseNavigation/components/BaseNavigationSkeleton/BaseNavigationSkeleton";
import NavigationLink from "@/components/Navigation/NavigationLink/NavigationLink";

import { useAppSelector } from "@/store/hooks";
import { getUserStatus } from "@/store/user/selectors";

const BaseNavigation = () => {
	const navigations = useNavigationItems();
	const userStatus = useAppSelector(getUserStatus);

	return (
		<>
			<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
			<Typography
				variant="h5"
				noWrap
				component="a"
				href="/"
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
				CAT
			</Typography>
			<Box component={"nav"} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
				<Box component={"ul"} sx={{ display: { md: "flex", gap: 10 } }}>
					{userStatus !== "loading" ? (
						navigations.map(({ href, label }) => {
							return (
								<li key={label}>
									<NavigationLink href={href}>{label}</NavigationLink>
								</li>
							);
						})
					) : (
						<BaseNavigationSkeleton />
					)}
				</Box>
			</Box>
		</>
	);
};

export default BaseNavigation;
