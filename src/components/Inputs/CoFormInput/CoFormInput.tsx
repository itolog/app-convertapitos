"use client";

import { FC } from "react";

import TextField, { TextFieldProps } from "@mui/material/TextField";

interface CoFormInputProps extends Omit<TextFieldProps, "classes" | "label"> {
	label?: string;
}

const CoFormInput: FC<CoFormInputProps> = ({ fullWidth = true, ...props }) => {
	return (
		<div>
			<TextField fullWidth={fullWidth} variant="standard" {...props} />
		</div>
	);
};

export default CoFormInput;
