import { FileOption, FormValues } from "@/Pages/ConvertPage/components/forms/FileForm/types.ts";

export const FORM_FIELD = {
	CONVERT_TO: "convert_to",
	FILES: "files",
} as const;

export const FILE_EX = {
	PNG: "png",
	JPG: "jpg",
};

export const initialValues: FormValues = {
	[FORM_FIELD.CONVERT_TO]: "",
	[FORM_FIELD.FILES]: [],
};

export const fileTypeOptions: FileOption[] = [
	{
		label: FILE_EX.JPG,
		value: FILE_EX.JPG,
	},
	{
		label: FILE_EX.PNG,
		value: FILE_EX.PNG,
	},
];
