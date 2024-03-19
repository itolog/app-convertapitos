import { FC, ReactElement, useMemo, useRef } from "react";

import CoText from "@/shared/ui/CoText/CoText.tsx";

import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

import classes from "./coTextWithTooltip.module.scss";

interface CoTextWithTooltipProps extends Omit<TooltipProps, "children" | "title"> {
	text: string;
	tooltip?: string | ReactElement;
	tooltipAutoDetect?: boolean;
}

const CoTextWithTooltip: FC<CoTextWithTooltipProps> = ({
	text,
	tooltip,
	tooltipAutoDetect = false,
	arrow = true,
	...props
}) => {
	const textElementRef = useRef<HTMLElement | null>(null);

	const isOverflowed = useMemo(() => {
		if (tooltip) {
			return false;
		}
		if (textElementRef.current && tooltipAutoDetect) {
			return textElementRef.current.scrollWidth < textElementRef.current.clientWidth;
		}

		return false;
	}, [tooltip, tooltipAutoDetect]);

	const _tooltip = useMemo(() => {
		if (tooltip) {
			return tooltip;
		}

		if (!tooltip && tooltipAutoDetect) {
			return text;
		}

		return "";
	}, [text, tooltip, tooltipAutoDetect]);

	return (
		<Tooltip title={_tooltip} arrow={arrow} {...props} disableHoverListener={isOverflowed}>
			<CoText
				ref={textElementRef}
				classes={{
					root: classes.coTextWithTooltip,
				}}>
				{text}
			</CoText>
		</Tooltip>
	);
};

export default CoTextWithTooltip;
