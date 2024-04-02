import { FC, ReactElement, useEffect, useMemo, useRef, useState } from "react";

import Tooltip, { TooltipProps } from "@mui/material/Tooltip";

import CoText from "@/components/UI/CoText/CoText.tsx";

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
	const textRef = useRef<HTMLSpanElement | null>(null);
	const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

	useEffect(() => {
		const resizeObserver = new ResizeObserver(([entry]) => {
			const isOverflowing = entry.target.clientWidth < entry.target.scrollWidth;
			setIsTooltipVisible(isOverflowing);
		});

		if (textRef.current) {
			resizeObserver.observe(textRef.current);
		}

		return () => {
			resizeObserver.disconnect();
		};
	}, [text]);

	const _tooltip = useMemo(() => {
		if (tooltip) {
			return tooltip;
		}

		if (!tooltip && tooltipAutoDetect && isTooltipVisible) {
			return text;
		}

		return "";
	}, [isTooltipVisible, text, tooltip, tooltipAutoDetect]);

	return (
		<Tooltip title={_tooltip} arrow={arrow} {...props}>
			<CoText
				ref={textRef}
				classes={{
					root: classes.coTextWithTooltip,
				}}>
				{text}
			</CoText>
		</Tooltip>
	);
};

export default CoTextWithTooltip;
