import {
	forwardRef,
	ForwardRefExoticComponent,
	PropsWithoutRef,
	RefAttributes,
	useMemo,
} from "react";

import Typography, { TypographyProps } from "@mui/material/Typography";

interface CoTextProps extends TypographyProps {
	children: string;
	colorType?: "primary" | "secondary" | "default";
}

const CoText: ForwardRefExoticComponent<PropsWithoutRef<CoTextProps> & RefAttributes<unknown>> =
	forwardRef(
		(
			{
				fontFamily = "Vollkorn",
				children,
				variant = "h4",
				component = "span",
				colorType = "primary",
				...props
			},
			ref,
		) => {
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
					fontFamily={fontFamily}
					variant={variant}
					component={component}
					{...props}>
					{children}
				</Typography>
			);
		},
	);

CoText.displayName = "CoText";

export default CoText;
