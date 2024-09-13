"use client";

import { FC } from "react";

import { Input, InputProps } from "@/components/ui/input";

interface CoFormInputProps extends InputProps {
	label?: string;
}

const CoFormInput: FC<CoFormInputProps> = ({ ...props }) => {
	return <Input {...props} />;
};

export default CoFormInput;
