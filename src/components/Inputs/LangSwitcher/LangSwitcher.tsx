import { FC, SyntheticEvent, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import Box from "@mui/material/Box";

import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete.tsx";
import useOptions, { Option } from "@/components/Inputs/LangSwitcher/hooks/useOptions.tsx";

import classes from "./langSwitcher.module.scss";

interface LangSwitcherProps {
	width?: string | number;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ width = 200 }) => {
	const { options, optionsNormalized } = useOptions();
	const { i18n } = useTranslation();

	const [value, setValue] = useState<Option>(optionsNormalized[i18n.language]);

	const handleChange = useCallback(
		async (
			_e: SyntheticEvent<Element, Event>,
			value: (string | Option)[] | NonNullable<string | Option> | null,
		) => {
			const val = value as Option;
			await i18n.changeLanguage(val.value);

			setValue(val);
		},
		[i18n],
	);

	return (
		<CoAutocomplete<Option>
			classes={{
				root: classes.langSwitcherRoot,
				inputRoot: classes.inputRoot,
			}}
			placeholder="Choose a country"
			onChange={handleChange}
			value={value}
			options={options}
			autoHighlight
			sx={{ width }}
			isOptionEqualToValue={(option, value) => option.value === value.value}
			getOptionLabel={(option) => {
				return (option as Option).label;
			}}
			renderOption={(props, option) => (
				<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
					<img
						loading="lazy"
						width="20"
						srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
						src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
						alt=""
					/>
					{option.label} ({option.code})
				</Box>
			)}
		/>
	);
};

export default LangSwitcher;
