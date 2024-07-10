import { FC, SyntheticEvent, useCallback } from "react";

import {
	fileTypeOptions,
	FORM_FIELD,
	initialValues,
} from "@/Pages/ConvertPage/components/forms/FileForm/constants.ts";
import {
	FileFormProps,
	FileOption,
	FormValues,
} from "@/Pages/ConvertPage/components/forms/FileForm/types.ts";
import validationSchema from "@/Pages/ConvertPage/components/forms/FileForm/validationSchema.ts";
import { useFormik } from "formik";

import { Grid } from "@mui/material";

import FileUpload, { OnUpdateFilesType } from "@/components/FileUpload/FileUpload.tsx";
import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete.tsx";

const FileForm: FC<FileFormProps> = ({ onSubmit }) => {
	const { handleSubmit, setFieldValue, errors, touched, isValid, values, isSubmitting } =
		useFormik<FormValues>({
			initialValues,
			onSubmit,
			validationSchema,
			enableReinitialize: true,
		});

	const handleChangeFile = useCallback<OnUpdateFilesType>(
		(files) => {
			setFieldValue(FORM_FIELD.IMAGE_FILE, files?.[0]?.file);
		},
		[setFieldValue],
	);

	const handleChangeFileType = useCallback(
		(
			_e: SyntheticEvent<Element, Event>,
			value: (string | FileOption)[] | NonNullable<string | FileOption> | null,
		) => {
			const val = value as FileOption;

			setFieldValue(FORM_FIELD.CONVERT_TO, val?.value.toLowerCase() ?? "");
		},
		[setFieldValue],
	);

	return (
		<form onSubmit={handleSubmit} autoComplete={"off"}>
			<Grid container rowSpacing={3} columnSpacing={2} mb={2}>
				<Grid item xs={6}>
					<CoAutocomplete<FileOption>
						disabled={!values[FORM_FIELD.IMAGE_FILE]}
						onChange={handleChangeFileType}
						options={fileTypeOptions}
						error={
							(touched[FORM_FIELD.CONVERT_TO] &&
								errors[FORM_FIELD.CONVERT_TO] &&
								errors[FORM_FIELD.CONVERT_TO]) as string
						}
					/>
				</Grid>
				<Grid item xs={6}>
					{values[FORM_FIELD.IMAGE_FILE] && values[FORM_FIELD.CONVERT_TO] && (
						<button disabled={!isValid || isSubmitting} type="submit">
							Submit
						</button>
					)}
				</Grid>

				<Grid item xs={12}>
					<FileUpload
						onupdatefiles={handleChangeFile}
						error={
							(touched[FORM_FIELD.IMAGE_FILE] &&
								errors[FORM_FIELD.IMAGE_FILE] &&
								errors[FORM_FIELD.IMAGE_FILE]) as string
						}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default FileForm;
