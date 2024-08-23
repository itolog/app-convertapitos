import { ButtonProps } from "@mui/material/Button/Button";

import { Icons } from "@/components/UI/SvgIcon/types";

interface Classes {
	root?: string;
	text?: string;
}

export interface TextProps {
	[key: string]: string | undefined | null;
	target?: string;
}

export interface CoButtonProps extends ButtonProps {
	classes?: Classes;
	icon?: Icons;
	text?: string;
	textProps?: TextProps;
	iconSize?: string;
	label?: string;
}
