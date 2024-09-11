import React from "react";

import { appConfig } from "@/configs";

import Skeleton from "@mui/material/Skeleton";

const BaseNavigationSkeleton = () => {
	return (
		<>
			{appConfig.availableNavRoutes.map((route) => {
				return (
					<li key={route}>
						<Skeleton
							sx={{
								bgcolor: "var(--primary-color)",
							}}
							animation="wave"
							width={40}
							height={26}
						/>
					</li>
				);
			})}
		</>
	);
};

export default BaseNavigationSkeleton;
