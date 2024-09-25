"use client";

import { FC, ReactElement, useEffect, useRef, useState } from "react";

import { TextProps } from "@/types";
import cl from "clsx";

import CoText from "@/components/ui/CoText/CoText";
import {
	Tooltip,
	TooltipArrow,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface Classes {
	text?: string;
	tooltip?: string;
}

interface CoTextWithTooltipProps {
	text: string;
	tooltip?: string | ReactElement;
	tooltipAutoDetect?: boolean;
	classes?: Classes;
	textProps?: TextProps;
	tooltipProps?: TextProps;
	arrow?: boolean;
}

const CoTextWithTooltip: FC<CoTextWithTooltipProps> = ({
	text,
	tooltip,
	tooltipAutoDetect = false,
	textProps,
	tooltipProps,
	arrow = true,
	classes,
}) => {
	const textRef = useRef<HTMLSpanElement | null>(null);
	const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

	const textClass = cl(
		"w-full block overflow-hidden overflow-ellipsis whitespace-nowrap",
		classes?.text,
	);

	const tooltipClass = cl(classes?.tooltip);

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

	return (
		<div className={"w-full h-fit overflow-hidden"}>
			<TooltipProvider delayDuration={400}>
				<Tooltip>
					<TooltipTrigger className={"w-full block overflow-hidden"}>
						<CoText textProps={textProps} className={textClass} ref={textRef}>
							{text}
						</CoText>
					</TooltipTrigger>
					{!tooltip && tooltipAutoDetect && isTooltipVisible && (
						<TooltipContent sideOffset={5} className={"max-w-[300px]"}>
							<CoText className={tooltipClass} textProps={textProps}>
								{text}
							</CoText>
							{arrow && <TooltipArrow />}
						</TooltipContent>
					)}

					{tooltip && (
						<TooltipContent sideOffset={5} className={"max-w-[300px]"}>
							<CoText className={tooltipClass} textProps={tooltipProps}>
								{tooltip}
							</CoText>
							{arrow && <TooltipArrow />}
						</TooltipContent>
					)}
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};

export default CoTextWithTooltip;