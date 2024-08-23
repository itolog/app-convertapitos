import { ButtonProps } from "@mui/material/Button/Button";

import { Icons } from "@/components/UI/SvgIcon/types";

interface Classes {
	root?: string;
	text?: string;
}

export interface CoButtonProps extends ButtonProps {
	classes?: Classes;
	icon?: Icons;
	text?: string;
	iconSize?: string;
	label?: string;
}
