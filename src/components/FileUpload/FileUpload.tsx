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

registerPlugin(
	FilePondPluginImageExifOrientation,
	FilePondPluginImagePreview,
	FilePondPluginFileValidateType,
	FilePondPluginFileValidateSize,
	FilePondPluginImagePreview,
);

interface Classes {
	root?: string;
}

interface FileUploadProps extends FilePondProps {
	classes?: Classes;
}

export type Files = FilePondFile[];
export type File = FilePondFile;
export type OnUpdateFilesType = (files: Files) => void;

const FileUpload: FC<FileUploadProps> = ({ classes = { root: "" }, ...props }) => {
	const config: FilePondProps = {
		allowMultiple: false,
		labelIdle: 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
		...props,
	};

	const rootClass = cl(classes.root);

	return (
		<div className={rootClass}>
			<FilePond {...config} />
		</div>
	);
};

export default FileUpload;
