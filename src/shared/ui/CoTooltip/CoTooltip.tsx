import { FC, ReactElement } from "react";

import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

interface CoTooltipProps extends TooltipProps {
	children: ReactElement;
}

const CoTooltip: FC<CoTooltipProps> = ({ children, arrow = true, ...props }) => {
	return (
		<Tooltip arrow={arrow} {...props}>
			{children}
		</Tooltip>
	);
};

export default CoTooltip;
