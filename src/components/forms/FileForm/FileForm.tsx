"use client";

import { FC, SyntheticEvent, useCallback } from "react";

import { useFormik } from "formik";
import dynamic from "next/dynamic";

import { OnUpdateFilesType } from "@/components/FileUpload/FileUpload";
import { fileTypeOptions, FORM_FIELD, initialValues } from "@/components/forms/FileForm/constants";
import { FileFormProps, FileOption, FormValues } from "@/components/forms/FileForm/types";
import validationSchema from "@/components/forms/FileForm/validationSchema";

const FileUpload = dynamic(() => import("@/components/FileUpload/FileUpload"), {
	ssr: false,
	loading: () => (
		<div>loading ...</div>
		// <Skeleton
		// 	sx={{ bgcolor: "grey.400", borderRadius: "6px" }}
		// 	variant="rounded"
		// 	width={"100%"}
		// 	height={76}
		// />
	),
});

const FileForm: FC<FileFormProps> = ({ onSubmit, onRemoveFile }) => {
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
			<div>
				<div>
					as
					{/* <CoAutocomplete<FileOption> */}
					{/* 	disabled={!values[FORM_FIELD.IMAGE_FILE]} */}
					{/* 	onChange={handleChangeFileType} */}
					{/* 	options={fileTypeOptions} */}
					{/* 	error={ */}
					{/* 		(touched[FORM_FIELD.CONVERT_TO] && */}
					{/* 			errors[FORM_FIELD.CONVERT_TO] && */}
					{/* 			errors[FORM_FIELD.CONVERT_TO]) as string */}
					{/* 	} */}
					{/* /> */}
				</div>
				<div>
					{values[FORM_FIELD.IMAGE_FILE] && values[FORM_FIELD.CONVERT_TO] && (
						<button disabled={!isValid || isSubmitting} type="submit">
							Convert
						</button>
					)}
				</div>
				<div>
					<FileUpload
						onremovefile={onRemoveFile}
						onupdatefiles={handleChangeFile}
						error={
							(touched[FORM_FIELD.IMAGE_FILE] &&
								errors[FORM_FIELD.IMAGE_FILE] &&
								errors[FORM_FIELD.IMAGE_FILE]) as string
						}
					/>
				</div>
			</div>
		</form>
	);
};

export default FileForm;
