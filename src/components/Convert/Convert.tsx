import FileUpload from "@/shared/components/FileUpload/FileUpload.tsx";
import useFileUpload from "@/shared/components/FileUpload/hooks/useFileUpload.tsx";

import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants.ts";

const Convert = () => {
	const { files, onUpdateFiles } = useFileUpload();

	return (
		<div className={"Convert"}>
			<FileUpload
				acceptedFileTypes={ACCEPTED_IMAGE_TYPES}
				files={files}
				onupdatefiles={onUpdateFiles}
			/>
		</div>
	);
};

export default Convert;
