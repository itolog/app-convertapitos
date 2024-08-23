import { TextProps } from "@/types";

import { TypographyProps } from "@mui/material/Typography";

export interface CoTextProps extends TypographyProps {
	children: string;
	colorType?: "primary" | "secondary" | "default";
	textProps?: TextProps;
}
