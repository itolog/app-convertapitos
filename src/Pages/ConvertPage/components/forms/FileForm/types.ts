import { FORM_FIELD } from "@/Pages/ConvertPage/components/forms/FileForm/constants.ts";

import { Files } from "@/components/FileUpload/FileUpload.tsx";

export interface FileOption {
	label: string;
	value: string;
}

export interface FormValues {
	[FORM_FIELD.CONVERT_TO]?: string;
	[FORM_FIELD.FILES]?: Files;
}

export interface FileFormProps {
	onSubmit: (values: FormValues) => void;
}
