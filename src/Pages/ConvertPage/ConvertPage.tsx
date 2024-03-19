import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants.ts";

import FileUpload from "@/components/FileUpload/FileUpload.tsx";
import useFileUpload from "@/components/FileUpload/hooks/useFileUpload.tsx";

const ConvertPage = () => {
	const { files, onUpdateFiles } = useFileUpload();

	return (
		<div className={"ConvertPage"}>
			<FileUpload
				acceptedFileTypes={ACCEPTED_IMAGE_TYPES}
				files={files}
				onupdatefiles={onUpdateFiles}
			/>
		</div>
	);
};

export default ConvertPage;
