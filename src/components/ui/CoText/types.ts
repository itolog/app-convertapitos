import { DetailedHTMLProps, HTMLAttributes } from "react";

import { TextProps } from "@/types";

export interface CoTextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	textProps?: TextProps;
	text?: string | null | undefined;
}
