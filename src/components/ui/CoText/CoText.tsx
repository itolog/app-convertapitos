import { forwardRef, ReactNode } from "react";

import { useTranslations } from "next-intl";

import { CoTextProps } from "@/components/ui/CoText/types";

const CoText = forwardRef<HTMLSpanElement, CoTextProps & { children?: ReactNode }>(
	({ children, text, textProps = { target: undefined }, ...props }, ref) => {
		const { target, ...textOption } = textProps;
		const t = useTranslations(target);

		return (
			<span {...props} ref={ref}>
				{!text && t(children, textOption)}
				{text && text}
			</span>
		);
	},
);

CoText.displayName = "CoText";

export default CoText;
