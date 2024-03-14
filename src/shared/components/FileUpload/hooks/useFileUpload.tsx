import { useCallback, useMemo, useState } from "react";

import { ActualFileObject, FilePondFile, FilePondInitialFile } from "filepond";

type OnUpdateFilesType = (files: FilePondFile[]) => void;

interface OnUpdateFilesReturnType {
  onUpdateFiles: OnUpdateFilesType;
  pondFiles: FilePondFile[];
  files: Array<FilePondInitialFile | ActualFileObject | Blob | string>;
}

const useFileUpload = (): OnUpdateFilesReturnType => {
  const [pondFiles, setPondFiles] = useState<FilePondFile[]>([]);

  const onUpdateFiles: OnUpdateFilesType = useCallback((files) => {
    setPondFiles(files);
  }, []);

  const files = useMemo(() => {
    return pondFiles?.map((fileItem) => fileItem.file);
  }, [pondFiles]);

  return {
    onUpdateFiles,
    pondFiles,
    files,
  };
};

export default useFileUpload;
