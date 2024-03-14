import { createFileRoute } from "@tanstack/react-router";

import FileUpload from "@/shared/components/FileUpload/FileUpload.tsx";
import useFileUpload from "@/shared/components/FileUpload/hooks/useFileUpload.tsx";

import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants.ts";

const Index = () => {
  const { files, onUpdateFiles } = useFileUpload();

  return (
    <div>
      <FileUpload
        acceptedFileTypes={ACCEPTED_IMAGE_TYPES}
        files={files}
        onupdatefiles={onUpdateFiles}
      />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
