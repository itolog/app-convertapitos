import Autocomplete from "@mui/material/Autocomplete";
import { AutocompleteProps } from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField";

interface CoAutocompleteProps<T> extends Omit<AutocompleteProps<T, any, any, any>, "renderInput"> {
	label?: string;
	placeholder?: string;
}

const CoAutocomplete = <T extends object>({
	label,
	placeholder,
	...props
}: CoAutocompleteProps<T>) => {
	return (
		<Autocomplete
			{...props}
			renderInput={(params) => (
				<TextField
					{...params}
					label={label}
					placeholder={placeholder}
					inputProps={{
						...params.inputProps,
						autoComplete: "new-password",
					}}
				/>
			)}
		/>
	);
};

export default CoAutocomplete;
