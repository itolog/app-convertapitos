import BaseNavigation from "@/components/Navigation/BaseNavigation/BaseNavigation";
import MobileNavigation from "@/components/Navigation/MobileNavigation/MobileNavigation";

const HeaderNavigation = () => {
	return (
		<>
			<MobileNavigation />

			<BaseNavigation />
		</>
	);
};

export default HeaderNavigation;
