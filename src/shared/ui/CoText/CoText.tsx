import {  forwardRef, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from "react";

import Typography, { TypographyProps } from "@mui/material/Typography";

interface CoTextProps extends TypographyProps {
	children: string;
	colorType?: "primary" | "secondary";
}

const CoText: ForwardRefExoticComponent<PropsWithoutRef<CoTextProps> &RefAttributes<unknown>> = forwardRef(({
																							fontFamily = "Vollkorn",
																							children,
																							variant = "h4",
																							component = "span",
																							colorType = "primary",
																							...props
																						}, ref) => {
	return (
		<Typography
			ref={ref}
			style={{
				color: colorType === "primary" ? "var(--primary-color)" : "var(--secondary-color)",
			}}
			fontFamily={fontFamily}
			variant={variant}
			component={component}
			{...props}>
			{children}
		</Typography>
	);
});

CoText.displayName = "CoText";

export default CoText;
