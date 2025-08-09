import * as z from "zod/v4";

import { SUPPORTED_IMAGE_FORMATS } from "@/constants/fileUploadConstants";

import { FORM_FIELD } from "@/components/forms/FileForm/constants";

const validationSchema = z.object({
  [FORM_FIELD.CONVERT_TO]: z.string().min(1, { message: "Required" }),
  [FORM_FIELD.IMAGE_FILE]: z
    .any()
    .refine((file: File) => {
      return file;
    }, "File is required")
    .refine((file) => {
      return !SUPPORTED_IMAGE_FORMATS.includes(file?.type);
    }, `${SUPPORTED_IMAGE_FORMATS} formats are supported.`),
});

export default validationSchema;
