import { useMemo } from "react";

import { useAppSelector } from "@/store/hooks";
import { getUser } from "@/store/user/selectors";

const useNavigationItems = () => {
	const user = useAppSelector(getUser);

	return useMemo(() => {
		const routes = [
			{
				href: "/",
				label: "Home",
			},
		];

		if (user) {
			return [
				...routes,
				...[
					{
						href: "/co-api",
						label: "Api",
					},
					{
						href: "/profile",
						label: "Profile",
					},
				],
			];
		}

		return routes;
	}, [user]);
};

export default useNavigationItems;
