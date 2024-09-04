import { FC, SyntheticEvent, useCallback } from "react";

import { useFormik } from "formik";

import Grid from "@mui/material/Grid2";

import FileUpload, { OnUpdateFilesType } from "@/components/FileUpload/FileUpload";
import { fileTypeOptions, FORM_FIELD, initialValues } from "@/components/forms/FileForm/constants";
import { FileFormProps, FileOption, FormValues } from "@/components/forms/FileForm/types";
import validationSchema from "@/components/forms/FileForm/validationSchema";
import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";

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
				<Grid size={12}>
					<FileUpload
						onupdatefiles={handleChangeFile}
						error={
							(touched[FORM_FIELD.IMAGE_FILE] &&
								errors[FORM_FIELD.IMAGE_FILE] &&
								errors[FORM_FIELD.IMAGE_FILE]) as string
						}
					/>
				</Grid>
				<Grid size={6}>
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
				<Grid size={6}>
					{values[FORM_FIELD.IMAGE_FILE] && values[FORM_FIELD.CONVERT_TO] && (
						<button disabled={!isValid || isSubmitting} type="submit">
							Submit
						</button>
					)}
				</Grid>
			</Grid>
		</form>
	);
};

export default FileForm;
