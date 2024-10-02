"use client";

import { FC } from "react";

import cl from "clsx";

import FormError from "@/components/Errors/FormError/FormError";
import { Input, InputProps } from "@/components/ui/input";

interface CoFormInputProps extends InputProps {
	label?: string;
	error?: string;
}

const CoFormInput: FC<CoFormInputProps> = ({ error, className, ...props }) => {
	const inputClass = cl({
		"border-slate-950 dark:border-cyan-500": !error,
		"border-red-500 focus-visible:ring-red-500": error,
		[className as string]: className,
	});

	return (
		<div className={"relative"}>
			<Input className={inputClass} {...props} />
			<FormError error={error} />
		</div>
	);
};

export default CoFormInput;
