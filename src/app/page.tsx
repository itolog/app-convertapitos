"use client";

import { useCallback, useState } from "react";

import convertBase64FileToLink from "@/helpers/image/convertBase64FileToLink/convertBase64FileToLink";
import useErrors from "@/hooks/errors/useErrors";

import DownloadLink from "@/components/Buttons/DownloadLink/DownloadLink";
import FileForm from "@/components/forms/FileForm/FileForm";
import { FormValues } from "@/components/forms/FileForm/types";

import { useConvertImageMutation } from "@/store/services/Image";

export default function Home() {
  const { handleError } = useErrors();
  const [downloadUrl, setDownloadUrl] = useState("");

  const [convertImage, { data, isLoading }] = useConvertImageMutation();

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      try {
        const { data } = await convertImage(values).unwrap();

        if (data?.file && data?.mimeType) {
          const link = convertBase64FileToLink({ base64: data.file, mimeType: data.mimeType });
          setDownloadUrl(link);
        }
      } catch (e) {
        handleError(e, {
          withSnackbar: true,
        });
      }
    },
    [convertImage, handleError],
  );

  const handleRemoveFileLink = useCallback(() => {
    setDownloadUrl("");
  }, []);

  return (
    <div className={"relative w-full flex items-center gap-6 flex-col  justify-center"}>
      <FileForm loading={isLoading} onRemoveFile={handleRemoveFileLink} onSubmit={handleSubmit} />

      <DownloadLink
        className={"w-full md:w-[440px]"}
        disabled={!Boolean(data?.data?.file) || isLoading}
        url={downloadUrl}
        fileName={data?.data?.fileName}
      />
    </div>
  );
}
