"use client";

import { FC, PropsWithChildren, ReactElement, useEffect, useRef, useState } from "react";

import cl from "clsx";

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
  text?: string;
  tooltip?: string | ReactElement;
  tooltipAutoDetect?: boolean;
  classes?: Classes;

  arrow?: boolean;
}

const CoTextWithTooltip: FC<PropsWithChildren<CoTextWithTooltipProps>> = ({
  children,
  text,
  tooltip,
  tooltipAutoDetect = false,

  arrow = true,
  classes,
}) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const textClass = cl(
    "w-full block overflow-hidden text-ellipsis whitespace-nowrap",
    classes?.text,
  );

  const tooltipClass = cl("break-words text-center", classes?.tooltip);

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
    <div className={"h-fit w-full overflow-hidden"}>
      <TooltipProvider delayDuration={400}>
        <Tooltip>
          <TooltipTrigger className={"block w-full overflow-hidden"}>
            <span className={textClass} ref={textRef}>
              {children}
            </span>
          </TooltipTrigger>
          {!tooltip && tooltipAutoDetect && isTooltipVisible && (
            <TooltipContent sideOffset={5} className={"max-w-[300px]"}>
              <span className={tooltipClass}>{children}</span>
              {arrow && <TooltipArrow />}
            </TooltipContent>
          )}

          {tooltip && (
            <TooltipContent sideOffset={5} className={"max-w-[300px]"}>
              <span className={tooltipClass}>{tooltip}</span>
              {arrow && <TooltipArrow />}
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CoTextWithTooltip;
