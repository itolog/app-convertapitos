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
import { useFormik } from "formik";

import { Grid } from "@mui/material";

import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants.ts";

import FileUpload, { OnUpdateFilesType } from "@/components/FileUpload/FileUpload.tsx";
import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete.tsx";

const FileForm: FC<FileFormProps> = ({ onSubmit }) => {
	const { handleSubmit, setValues } = useFormik<FormValues>({
		initialValues,
		onSubmit,
	});

	const handleChangeFile = useCallback<OnUpdateFilesType>(
		(files) => {
			setValues({
				[FORM_FIELD.FILES]: files,
			});
		},
		[setValues],
	);

	const handleChangeFileType = useCallback(
		(
			_e: SyntheticEvent<Element, Event>,
			value: (string | FileOption)[] | NonNullable<string | FileOption> | null,
		) => {
			const val = value as FileOption;
			setValues({
				[FORM_FIELD.CONVERT_TO]: val.value,
			});
		},
		[setValues],
	);

	return (
		<form onSubmit={handleSubmit}>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<CoAutocomplete<FileOption> onChange={handleChangeFileType} options={fileTypeOptions} />
				</Grid>

				<Grid item xs={12}>
					<FileUpload
						name={FORM_FIELD.FILES}
						acceptedFileTypes={ACCEPTED_IMAGE_TYPES}
						onupdatefiles={handleChangeFile}
					/>
				</Grid>
			</Grid>

			<button type="submit">Submit</button>
		</form>
	);
};

export default FileForm;
