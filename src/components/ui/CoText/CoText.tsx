import {
	forwardRef,
	ForwardRefExoticComponent,
	PropsWithoutRef,
	RefAttributes,
	useMemo,
} from "react";

import { useTranslations } from "next-intl";

import { CoTextProps } from "@/components/ui/CoText/types";

const CoText: ForwardRefExoticComponent<PropsWithoutRef<CoTextProps> & RefAttributes<unknown>> =
	forwardRef(
		(
			{
				children,
				colorType = "primary",
				text,
				textProps = {
					target: undefined,
				},
				...props
			},
			ref,
		) => {
			const { target, ...textOption } = textProps;
			const t = useTranslations(target);

			const color = useMemo(() => {
				if (colorType === "default") {
					return "";
				}
				if (colorType === "primary") {
					return "var(--primary-color)";
				}

				return "var(--secondary-color)";
			}, [colorType]);

			return (
				<span>
					{!text && t(children, textOption)}
					{text && text}
				</span>
				// <Typography
				// 	ref={ref}
				// 	style={{
				// 		color,
				// 	}}
				// 	sx={{ wordBreak: "break-word" }}
				// 	fontFamily={fontFamily}
				// 	variant={variant}
				// 	component={component}
				// 	{...props}>
				// 	{!text && t(children, textOption)}
				// 	{text && text}
				// </Typography>
			);
		},
	);

CoText.displayName = "CoText";

export default CoText;
