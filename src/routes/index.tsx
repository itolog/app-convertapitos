import { createFileRoute } from "@tanstack/react-router";

import FileUpload from "@/shared/components/FileUpload/FileUpload.tsx";
import useFileUpload from "@/shared/components/FileUpload/hooks/useFileUpload.tsx";

const Index = () => {
  const { files, onUpdateFiles } = useFileUpload();

  return (
    <div>
      <FileUpload files={files} onupdatefiles={onUpdateFiles} />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
