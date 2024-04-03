import { FORM_FIELD } from "@/Pages/ConvertPage/components/forms/FileForm/constants.ts";

import { File } from "@/components/FileUpload/FileUpload.tsx";

export interface FileOption {
	label: string;
	value: string;
}

export interface FormValues {
	[FORM_FIELD.CONVERT_TO]?: string;
	[FORM_FIELD.IMAGE_FILE]?: File | null;
}

export interface FileFormProps {
	onSubmit: (values: FormValues) => void;
}
