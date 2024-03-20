import * as React from "react";

import Autocomplete from "@mui/material/Autocomplete";
import {
	AutocompleteProps,
	AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField";

interface CoAutocompleteProps<T> extends Omit<AutocompleteProps<T, any, any, any>, "renderInput"> {
	label?: string;
	placeholder?: string;
	customRenderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
}

const CoAutocomplete = <T extends object>({
	label,
	placeholder,
	customRenderInput,
	...props
}: CoAutocompleteProps<T>) => {
	const renderInput = (params: AutocompleteRenderInputParams) => (
		<TextField
			{...params}
			label={label}
			placeholder={placeholder}
			inputProps={{
				...params.inputProps,
				autoComplete: "new-password",
			}}
		/>
	);

	return (
		<Autocomplete {...props} renderInput={customRenderInput ? customRenderInput : renderInput} />
	);
};

export default CoAutocomplete;
