"use client";

import { FC, useCallback, useMemo, useState } from "react";

import { FilePondErrorDescription, FilePondFile } from "filepond";
import { useFormik } from "formik";
import dynamic from "next/dynamic";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoCard from "@/components/Cards/CoCard/CoCard";
import { OnUpdateFilesType } from "@/components/FileUpload/FileUpload";
import { fileTypeOptions, FORM_FIELD, initialValues } from "@/components/forms/FileForm/constants";
import { FileFormProps, FormValues } from "@/components/forms/FileForm/types";
import validationSchema from "@/components/forms/FileForm/validationSchema";
import CoAutocomplete from "@/components/Inputs/CoAutocomplete/CoAutocomplete";
import { Skeleton } from "@/components/ui/skeleton";

const FileUpload = dynamic(() => import("@/components/FileUpload/FileUpload"), {
	ssr: false,
	loading: () => <Skeleton className={"w-full h-[288px]"} />,
});

const FileForm: FC<FileFormProps> = ({ onSubmit, onRemoveFile, loading }) => {
	const [disabledOption, setDisabledOption] = useState("");

	const { handleSubmit, setFieldValue, errors, touched, values } = useFormik<FormValues>({
		initialValues,
		onSubmit,
		validationSchema,
		enableReinitialize: true,
	});

	const handleChangeFile = useCallback<OnUpdateFilesType>(
		(files) => {
			const file = files?.[0]?.file;
			setDisabledOption(file?.type.split("/")[1]);

			setFieldValue(FORM_FIELD.IMAGE_FILE, file);
		},
		[setFieldValue],
	);

	const handleChangeFileType = useCallback(
		(value: string) => {
			setFieldValue(FORM_FIELD.CONVERT_TO, value.toLowerCase() ?? "");
		},
		[setFieldValue],
	);

	const fileUploadError = useMemo(() => {
		return (
			(touched[FORM_FIELD.IMAGE_FILE] &&
				errors[FORM_FIELD.IMAGE_FILE] &&
				errors[FORM_FIELD.IMAGE_FILE]) ||
			""
		);
	}, [errors, touched]);

	const handleRemoveFile = useCallback(
		(error: FilePondErrorDescription | null, file: FilePondFile) => {
			setDisabledOption("");
			setFieldValue(FORM_FIELD.CONVERT_TO, "");

			if (onRemoveFile) {
				onRemoveFile(error, file);
			}
		},
		[onRemoveFile, setFieldValue],
	);

	return (
		<CoCard
			classes={{
				root: "w-full md:w-fit",
			}}>
			<form className={"flex flex-col gap-6 m-5"} onSubmit={handleSubmit} autoComplete={"off"}>
				<div className={"flex justify-end gap-4"}>
					<div className={"flex relative w-3/6 md:w-48"}>
						<CoAutocomplete
							options={fileTypeOptions}
							disabled={loading || !values[FORM_FIELD.IMAGE_FILE]}
							disabledOption={disabledOption}
							value={values[FORM_FIELD.CONVERT_TO]}
							error={
								(touched[FORM_FIELD.CONVERT_TO] &&
									errors[FORM_FIELD.CONVERT_TO] &&
									errors[FORM_FIELD.CONVERT_TO]) as string
							}
							onSelect={handleChangeFileType}
						/>
					</div>

					<CoButton
						loading={loading}
						type={"submit"}
						className={"w-3/6 md:w-48"}
						text={"Convert"}
					/>
				</div>

				<FileUpload
					onremovefile={handleRemoveFile}
					onupdatefiles={handleChangeFile}
					error={fileUploadError}
				/>
				<div />
			</form>
		</CoCard>
	);
};

export default FileForm;
