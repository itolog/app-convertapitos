"use client";

import React, { FC } from "react";
import { FilePond, FilePondProps } from "react-filepond";

import { FilePondErrorDescription, FilePondFile } from "filepond";

import { ACCEPTED_IMAGE_TYPES } from "@/constants/fileUploadConstants";

import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond/dist/filepond.min.css";

interface SimpleImageUploadProps {
  onChange: (file: FilePondFile) => void;
}

const config: FilePondProps = {
  allowMultiple: false,
  labelIdle: 'Drag & Drop your files or <span class="filepond--label-action">Browse</span>',
  allowFileTypeValidation: true,
  acceptedFileTypes: ACCEPTED_IMAGE_TYPES,
  allowImagePreview: false,
};

const SimpleImageUpload: FC<SimpleImageUploadProps> = ({ onChange }) => {
  const handleChange = (fileItems: FilePondFile[]) => {
    const file = fileItems[0];
    onChange(file);
  };

  const handleRemoveFile = (_error: FilePondErrorDescription | null, file: FilePondFile) => {
    onChange(file);
  };

  return (
    <div className="grid w-full overflow-hidden rounded items-center h-[76px]">
      <FilePond onupdatefiles={handleChange} onremovefile={handleRemoveFile} {...config} />
    </div>
  );
};

export default SimpleImageUpload;
