"use client";

import { useCallback, useState } from "react";

import useErrors from "@/hooks/errors/useErrors";

import DownloadLink from "@/components/Buttons/DownloadLink/DownloadLink";
import FileForm from "@/components/forms/FileForm/FileForm";
import { FormValues } from "@/components/forms/FileForm/types";

import { useConvertImageMutation } from "@/store/services/Image";

export default function Images() {
  const { handleError } = useErrors();
  const [downloadUrl, setDownloadUrl] = useState("");

  const [convertImage, { data, isLoading }] = useConvertImageMutation();

  const handleSubmit = useCallback(
    async (values: FormValues) => {
      try {
        const { data } = await convertImage(values).unwrap();

        if (data) {
          setDownloadUrl(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${data.image_link}`);
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
        disabled={!Boolean(downloadUrl) || isLoading}
        url={downloadUrl}
        fileName={data?.data?.file_name}
      />
    </div>
  );
}
