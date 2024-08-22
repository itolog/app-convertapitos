"use client";

import { FC, HTMLAttributes, SyntheticEvent, useCallback, useState, useTransition } from "react";

import { Locale } from "@/config";
import { setUserLocale } from "@/services/locale";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import { createFilterOptions, InputAdornment } from "@mui/material";
import { AutocompleteRenderInputParams } from "@mui/material/Autocomplete/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";
import useOptions, { Option } from "@/components/Inputs/LangSwitcher/hooks/useOptions";

interface LangSwitcherProps {
	width?: string | number;
}

interface RenderOptionProps extends HTMLAttributes<HTMLLIElement> {
	key: string;
}

const IMAGE_SIZE = 20;

const LangSwitcher: FC<LangSwitcherProps> = ({ width = 200 }) => {
	const t = useTranslations();
	const localActive = useLocale();
	const [isPending, startTransition] = useTransition();

	const { options, optionsNormalized } = useOptions();

	const [value, setValue] = useState<Option>(optionsNormalized[localActive]);

	const handleChange = async (
		_e: SyntheticEvent<Element, Event>,
		value: (string | Option)[] | NonNullable<string | Option> | null,
	) => {
		const val = value as Option;
		if (val) {
			const nextLocale = val.value as Locale;
			setValue(val);

			startTransition(() => {
				setUserLocale(nextLocale);
			});
		}
	};

	const renderInput = (params: AutocompleteRenderInputParams) => {
		const option: Option = optionsNormalized[localActive];

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
							<Image
								loading="lazy"
								width={IMAGE_SIZE}
								height={IMAGE_SIZE}
								src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
								alt={option.code}
							/>
						</InputAdornment>
					),
				}}
			/>
		);
	};

	const renderOption = useCallback(({ key, ...props }: RenderOptionProps, option: Option) => {
		return (
			<Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} key={key} {...props}>
				<Image
					loading="lazy"
					width={IMAGE_SIZE}
					height={IMAGE_SIZE}
					src={`https://flagcdn.com/w20/${option?.code.toLowerCase()}.png`}
					alt={option.code}
				/>
				{option.label} ({option.code})
			</Box>
		);
	}, []);

	const filterOptions = createFilterOptions({
		stringify: (option: Option) => option.code + option.label,
	});

	const getOptionLabel = (option: Option | string) => {
		return (option as Option).code;
	};

	return (
		<CoAutocomplete<Option>
			placeholder="Choose a country"
			onChange={handleChange}
			value={value}
			options={options}
			autoHighlight
			disabled={isPending}
			sx={{ width }}
			isOptionEqualToValue={(option, value) => option.value === value.value}
			getOptionLabel={getOptionLabel}
			customRenderInput={renderInput}
			filterOptions={filterOptions}
			renderOption={renderOption}
		/>
	);
};

export default LangSwitcher;
