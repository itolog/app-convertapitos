import BaseNavigation from "@/components/Navigation/BaseNavigation/BaseNavigation.tsx";
import MobileNavigation from "@/components/Navigation/MobileNavigation/MobileNavigation.tsx";

const HeaderNavigation = () => {
	return (
		<>
			<MobileNavigation />

			<BaseNavigation />
		</>
	);
};

export default HeaderNavigation;
