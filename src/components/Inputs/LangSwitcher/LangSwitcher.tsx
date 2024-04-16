import { FC, HTMLAttributes, SyntheticEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { createFilterOptions, InputAdornment } from "@mui/material";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete.tsx";
import useOptions, { Option } from "@/components/Inputs/LangSwitcher/hooks/useOptions.tsx";

interface LangSwitcherProps {
	width?: string | number;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ width = 200 }) => {
	const { options, optionsNormalized } = useOptions();
	const { i18n, t } = useTranslation();

	const [value, setValue] = useState<Option>(optionsNormalized[i18n.language]);

	const handleChange = useCallback(
		async (
			_e: SyntheticEvent<Element, Event>,
			value: (string | Option)[] | NonNullable<string | Option> | null,
		) => {
			const val = value as Option;
			if (val) {
				await i18n.changeLanguage(val.value);

				setValue(val);
			}
		},
		[i18n],
	);

	const renderInput = (params: AutocompleteRenderInputParams) => {
		const option: Option = optionsNormalized[i18n.language];
		return (
			<TextField
				{...params}
				placeholder={t("Choose a language")}
				inputProps={{
					...params.inputProps,
					autoComplete: "new-password1",
				}}
				InputProps={{
					...params.InputProps,
					startAdornment: (
						<InputAdornment position="start">
							<img
								loading="lazy"
								width="20"
								srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
								src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
								alt={option.code}
							/>
							{}
						</InputAdornment>
					),
				}}
			/>
		);
	};

	const renderOption = (props: HTMLAttributes<HTMLLIElement>, option: Option) => {
		return (
			<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
				<img
					loading="lazy"
					width="20"
					srcSet={`https://flagcdn.com/w40/${option?.code.toLowerCase()}.png 2x`}
					src={`https://flagcdn.com/w20/${option?.code.toLowerCase()}.png`}
					alt=""
				/>
				{option.label} ({option.code})
			</Box>
		);
	};

	const filterOptions = createFilterOptions({
		stringify: (option: Option) => option.code + option.label,
	});

	return (
		<CoAutocomplete<Option>
			placeholder="Choose a country"
			onChange={handleChange}
			value={value}
			options={options}
			autoHighlight
			sx={{ width }}
			isOptionEqualToValue={(option, value) => option.value === value.value}
			getOptionLabel={(option) => {
				return (option as Option).code;
			}}
			customRenderInput={renderInput}
			filterOptions={filterOptions}
			renderOption={renderOption}
		/>
	);
};

export default LangSwitcher;
