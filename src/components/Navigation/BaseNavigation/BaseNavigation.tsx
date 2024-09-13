import useNavigationItems from "@/hooks/navigations/useNavigationItems";

import BaseNavigationSkeleton from "@/components/Navigation/BaseNavigation/components/BaseNavigationSkeleton/BaseNavigationSkeleton";
import NavigationLink from "@/components/Navigation/NavigationLink/NavigationLink";

import { useAppSelector } from "@/store/hooks";
import { getUserStatus } from "@/store/user/selectors";

const BaseNavigation = () => {
	const navigations = useNavigationItems();
	const userStatus = useAppSelector(getUserStatus);

	return (
		<div>
			<ul>
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
			</ul>
		</div>
	);
};

export default BaseNavigation;
