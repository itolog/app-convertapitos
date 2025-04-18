import { FC } from "react";
import { FilePond, FilePondProps, registerPlugin } from "react-filepond";

import cl from "clsx";
import { FilePondFile } from "filepond";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants";

import FormError from "@/components/Errors/FormError/FormError";

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
  container?: string;
}

interface FileUploadProps extends Omit<FilePondProps, "acceptedFileTypes"> {
  classes?: Classes;
  error?: string;
}

export type Files = FilePondFile[];

export type OnUpdateFilesType = (files: Files) => void;

const FileUpload: FC<FileUploadProps> = ({ classes = { container: "" }, error, ...props }) => {
  const config: FilePondProps = {
    allowMultiple: false,
    labelIdle: 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
    ...props,
    allowFileTypeValidation: true,
    acceptedFileTypes: ACCEPTED_IMAGE_TYPES,
  };

  return (
    <div className={cl("relative", classes.container)}>
      <FilePond {...config} />
      <FormError
        error={error}
        classes={{
          text: "text-wrap text-xs",
        }}
      />
    </div>
  );
};

export default FileUpload;
