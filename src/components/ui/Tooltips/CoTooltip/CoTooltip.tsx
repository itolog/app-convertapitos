import { FC, ReactElement } from "react";

interface CoTooltipProps {
	children: ReactElement;
}

const CoTooltip: FC<CoTooltipProps> = ({ children }) => {
	return <div>{children}</div>;
};

export default CoTooltip;
