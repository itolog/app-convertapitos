import React from "react";

import { appConfig } from "@/configs";

const BaseNavigationSkeleton = () => {
	return (
		<>
			{appConfig.availableNavRoutes.map((route) => {
				return (
					<li key={route}>
						<span>loading</span>
					</li>
				);
			})}
		</>
	);
};

export default BaseNavigationSkeleton;
