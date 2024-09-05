"use client";

import * as React from "react";

import cl from "classnames";

import Autocomplete from "@mui/material/Autocomplete";
import {
	AutocompleteProps,
	AutocompleteRenderInputParams,
} from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField";

import FormError from "@/components/Errors/FormError/FormError";

import _classes from "./coAutocomplete.module.scss";

interface Classes {
	container?: string;
	root?: string;
	inputRoot?: string;
	input?: string;
	popupIndicator?: string;
	clearIndicator?: string;
	listbox?: string;
	paper?: string;
}

interface CoAutocompleteProps<T>
	extends Omit<AutocompleteProps<T, any, any, any>, "renderInput" | "classes"> {
	label?: string;
	placeholder?: string;
	customRenderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode;
	classes?: Classes;
	error?: string;
}

const CoAutocomplete = <T extends object>({
	label,
	placeholder,
	customRenderInput,
	classes,
	error,
	...props
}: CoAutocompleteProps<T>) => {
	const renderInput = (params: AutocompleteRenderInputParams) => (
		<TextField
			{...params}
			label={label}
			placeholder={placeholder}
			autoComplete="off"
			inputProps={{
				...params.inputProps,
				autoComplete: "off",
			}}
		/>
	);

	return (
		<div className={cl(_classes.container, classes?.container)}>
			<Autocomplete
				{...props}
				classes={{
					root: cl(_classes.root, classes?.root, {
						[_classes.rootDisabled]: props?.disabled,
					}),
					inputRoot: cl(_classes.inputRoot, classes?.inputRoot),
					input: cl(_classes.input, classes?.input),
					popupIndicator: cl(_classes.endAdornment, classes?.popupIndicator),
					clearIndicator: cl(_classes.clearIndicator, classes?.clearIndicator),
					listbox: cl(_classes.listbox, classes?.listbox),
					paper: cl(_classes.paper, classes?.paper),
				}}
				renderInput={customRenderInput ? customRenderInput : renderInput}
			/>
			<FormError error={error} />
		</div>
	);
};

export default CoAutocomplete;
