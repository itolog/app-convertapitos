import { NavigationItem } from "@/hooks/navigations/types.ts";

const useNavigationItems = (): NavigationItem[] => {
	return [
		{
			to: "/",
			label: "Home",
		},
		{
			to: "/api",
			label: "Api",
		},
	];
};

export default useNavigationItems;
