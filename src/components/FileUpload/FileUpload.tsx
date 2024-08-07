import { FC } from "react";
import { FilePond, FilePondProps, registerPlugin } from "react-filepond";

import cl from "classnames";
import { FilePondFile } from "filepond";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants.ts";

import FormError from "@/components/Errors/FormError/FormError.tsx";

import _classes from "./fileUpload.module.scss";

registerPlugin(
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview,
	FilePondPluginFileValidateType,
	FilePondPluginFileValidateSize,
	FilePondPluginImagePreview,
);

interface Classes {
	container?: string;
	filePond?: string;
}

interface FileUploadProps extends Omit<FilePondProps, "acceptedFileTypes"> {
	classes?: Classes;
	error?: string;
}

export type Files = FilePondFile[];
export type File = FilePondFile;
export type OnUpdateFilesType = (files: Files) => void;

const FileUpload: FC<FileUploadProps> = ({ classes = { root: "" }, error, ...props }) => {
	const config: FilePondProps = {
		allowMultiple: false,
		labelIdle: 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
		...props,
		allowFileTypeValidation: true,
		acceptedFileTypes: ACCEPTED_IMAGE_TYPES,
	};

	const filePondClass = cl(_classes.filePond, classes.filePond);

	return (
		<div className={cl(_classes.container, classes.container)}>
			<FilePond className={filePondClass} {...config} />
			<FormError error={error} />
		</div>
	);
};

export default FileUpload;
