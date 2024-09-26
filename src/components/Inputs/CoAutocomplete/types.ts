import { ReactElement } from "react";

export interface Option {
	label: string;
	value: string;
	code?: string;
	icon?: ReactElement;
}

export interface CoAutocompleteProps {
	options: Option[];
	trigger: ReactElement;
	onSelect?: ((value: string) => void) | undefined;
}
