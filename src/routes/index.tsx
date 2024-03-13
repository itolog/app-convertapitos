import { createFileRoute } from "@tanstack/react-router";

import FileUpload from "@/shared/components/FileUpload/FileUpload.tsx";

const Index = () => {
  return (
    <div>
      <FileUpload />
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
