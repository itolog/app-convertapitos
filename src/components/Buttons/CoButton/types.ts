import { ButtonProps } from "@mui/material/Button/Button";

import { TextProps } from "@/types/buttonsTypes";

import { Icons } from "@/components/UI/SvgIcon/types";

interface Classes {
	root?: string;
	text?: string;
}

export interface CoButtonProps extends ButtonProps {
	classes?: Classes;
	icon?: Icons;
	text?: string;
	textProps?: TextProps;
	iconSize?: string;
	label?: string;
}
