import { SUPPORTED_IMAGE_FORMATS } from "@/constants/fileUploadConstants";

import { FormValues } from "@/components/forms/FileForm/types";
import { Option } from "@/components/Inputs/CoAutocomplete/types";

export const FORM_FIELD = {
  CONVERT_TO: "format",
  IMAGE_FILE: "file",
} as const;

export const initialValues: FormValues = {
  [FORM_FIELD.CONVERT_TO]: "",
  [FORM_FIELD.IMAGE_FILE]: undefined,
};

export const fileTypeOptions: Option[] = SUPPORTED_IMAGE_FORMATS.map((item): Option => {
  return {
    label: item,
    value: item,
  };
});
