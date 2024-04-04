import { FORM_FIELD } from "@/Pages/ConvertPage/components/forms/FileForm/constants.ts";
import * as Yup from "yup";

import { SUPPORTED_IMAGE_FORMATS } from "@/constants/fileUploadConstants.ts";

const validationSchema = Yup.object().shape({
	[FORM_FIELD.IMAGE_FILE]: Yup.mixed().required("Required"),
	[FORM_FIELD.CONVERT_TO]: Yup.string().when(FORM_FIELD.IMAGE_FILE, ([file]) => {
		if (file) {
			return Yup.mixed().required("Required").oneOf(SUPPORTED_IMAGE_FORMATS);
		}

		return Yup.string();
	}),
});

export default validationSchema;
