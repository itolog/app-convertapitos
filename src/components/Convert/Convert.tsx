import { SubmitHandler } from "react-hook-form";

import CoForm from "@/shared/components/CoForm/CoForm.tsx";
import FileUpload from "@/shared/components/FileUpload/FileUpload.tsx";
import useFileUpload from "@/shared/components/FileUpload/hooks/useFileUpload.tsx";

import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants.ts";

interface Inputs {
	example: string;
	exampleRequired: string;
}
const Convert = () => {
	const { files, onUpdateFiles } = useFileUpload();
	const onSubmit: SubmitHandler<Inputs> = () => {};

	return (
		<div className={"Convert"}>
			<CoForm<Inputs> onSubmit={onSubmit}>
				<input type="text" name="firstName" placeholder="First Name" />
				<input type="text" name="lastName" placeholder="Last Name" />
			</CoForm>
			<FileUpload
				acceptedFileTypes={ACCEPTED_IMAGE_TYPES}
				files={files}
				onupdatefiles={onUpdateFiles}
			/>
		</div>
	);
};

export default Convert;
