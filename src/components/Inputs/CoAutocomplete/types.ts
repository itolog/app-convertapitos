import { ReactElement } from "react";

export interface Option {
	label: string;
	value: string;
	code?: string;
	icon?: ReactElement;
}

interface Classes {
	content?: string;
	trigger?: string;
}

export interface CoAutocompleteProps {
	options: Option[];
	onSelect?: ((value: string) => void) | undefined;
	classes?: Classes;
	defaultValue?: string;
	placeholder?: string;
	icon?: ReactElement;
	onlyIcon?: boolean;
	disabled?: boolean;
	error?: string;
}
