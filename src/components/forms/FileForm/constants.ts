import { SUPPORTED_IMAGE_FORMATS } from "@/constants/fileUploadConstants";

import { FileOption, FormValues } from "@/components/forms/FileForm/types";

export const FORM_FIELD = {
	CONVERT_TO: "convert_to",
	IMAGE_FILE: "image_file",
} as const;

export const initialValues: FormValues = {
	[FORM_FIELD.CONVERT_TO]: "",
	[FORM_FIELD.IMAGE_FILE]: null,
};

export const fileTypeOptions: FileOption[] = SUPPORTED_IMAGE_FORMATS.map((item): FileOption => {
	return {
		label: item,
		value: item,
	};
});
