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
	const { handleSubmit, setFieldValue, errors } = useFormik<FormValues>({
		initialValues,
		onSubmit,
		validationSchema,
	});

	const handleChangeFile = useCallback<OnUpdateFilesType>(
		(files) => {
			setFieldValue(FORM_FIELD.IMAGE_FILE, files[0].file);
		},
		[setFieldValue],
	);
	console.log(errors);

	const handleChangeFileType = useCallback(
		(
			_e: SyntheticEvent<Element, Event>,
			value: (string | FileOption)[] | NonNullable<string | FileOption> | null,
		) => {
			const val = value as FileOption;
			setFieldValue(FORM_FIELD.CONVERT_TO, val?.value ?? "");
		},
		[setFieldValue],
	);

	return (
		<form onSubmit={handleSubmit} autoComplete={"off"}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<CoAutocomplete<FileOption> onChange={handleChangeFileType} options={fileTypeOptions} />
				</Grid>

				<Grid item xs={12}>
					<FileUpload onupdatefiles={handleChangeFile} />
				</Grid>
			</Grid>

			<button type="submit">Submit</button>
		</form>
	);
};

export default FileForm;
