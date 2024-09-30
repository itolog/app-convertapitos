"use client";

import { FC, useCallback } from "react";

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
		(value: string) => {
			setFieldValue(FORM_FIELD.CONVERT_TO, value.toLowerCase() ?? "");
		},
		[setFieldValue],
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
					onremovefile={onRemoveFile}
					onupdatefiles={handleChangeFile}
					error={
						(touched[FORM_FIELD.IMAGE_FILE] &&
							errors[FORM_FIELD.IMAGE_FILE] &&
							errors[FORM_FIELD.IMAGE_FILE]) as string
					}
				/>
				<div />
			</form>
		</CoCard>
	);
};

export default FileForm;
