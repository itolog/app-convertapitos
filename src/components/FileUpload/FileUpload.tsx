import { FC } from "react";

import cl from "classnames";

import FormError from "@/components/Errors/FormError/FormError";

import _classes from "./fileUpload.module.scss";

interface Classes {
	container?: string;
	filePond?: string;
}

interface FileUploadProps {
	classes?: Classes;
	error?: string;
}

const FileUpload: FC<FileUploadProps> = ({ classes = { root: "" }, error }) => {
	return (
		<div className={cl(_classes.container, classes.container)}>
			<p>UPLOAD </p>
			<FormError error={error} />
		</div>
	);
};

export default FileUpload;
