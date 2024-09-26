import { SUPPORTED_IMAGE_FORMATS } from "@/constants/fileUploadConstants";

import { FormValues } from "@/components/forms/FileForm/types";
import { Option } from "@/components/Inputs/CoAutocomplete/types";

export const FORM_FIELD = {
	CONVERT_TO: "convert_to",
	IMAGE_FILE: "image_file",
} as const;

export const initialValues: FormValues = {
	[FORM_FIELD.CONVERT_TO]: "",
	[FORM_FIELD.IMAGE_FILE]: null,
};

export const fileTypeOptions: Option[] = SUPPORTED_IMAGE_FORMATS.map((item): Option => {
	return {
		label: item,
		value: item,
	};
});
