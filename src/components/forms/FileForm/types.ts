import { FilePondErrorDescription, FilePondFile } from "filepond";

import { FORM_FIELD } from "@/components/forms/FileForm/constants";

export interface FormValues {
  [FORM_FIELD.CONVERT_TO]: string;
  [FORM_FIELD.IMAGE_FILE]?: File;
}

export interface FileFormProps {
  onSubmit: (values: FormValues) => void;
  onRemoveFile?: (error: FilePondErrorDescription | null, file: FilePondFile) => void;
  loading?: boolean;
}
