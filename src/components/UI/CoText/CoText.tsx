import {
	forwardRef,
	ForwardRefExoticComponent,
	PropsWithoutRef,
	RefAttributes,
	useMemo,
} from "react";

import { useTranslations } from "next-intl";

import Typography from "@mui/material/Typography";

import { CoTextProps } from "@/components/UI/CoText/types";

const CoText: ForwardRefExoticComponent<PropsWithoutRef<CoTextProps> & RefAttributes<unknown>> =
	forwardRef(
		(
			{
				fontFamily = "Vollkorn",
				children,
				variant = "h4",
				component = "span",
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
				<Typography
					ref={ref}
					style={{
						color,
					}}
					sx={{ wordBreak: "break-word" }}
					fontFamily={fontFamily}
					variant={variant}
					component={component}
					{...props}>
					{!text && t(children, textOption)}
					{text && text}
				</Typography>
			);
		},
	);

CoText.displayName = "CoText";

export default CoText;
