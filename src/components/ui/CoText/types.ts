import { TextProps } from "@/types";

export interface CoTextProps {
	children?: string;
	colorType?: "primary" | "secondary" | "default";
	textProps?: TextProps;
	text?: string | null | undefined;
}
