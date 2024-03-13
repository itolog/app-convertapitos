import { Dashboard } from "@uppy/react";

import Uppy from "@uppy/core";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

const uppy = new Uppy();

const FileUpload = () => {
  return <Dashboard uppy={uppy} />;
};

export default FileUpload;
