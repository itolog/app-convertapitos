import React, { FC, useCallback } from "react";

import { useDownload } from "@/hooks/useDownload";
import cl from "clsx";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import { CoButtonProps } from "@/components/Buttons/CoButton/types";

interface DownloadLinkProps extends CoButtonProps {
  url: string | undefined;
  fileName?: string;
}

const DownloadLink: FC<DownloadLinkProps> = ({
  url,
  fileName,
  disabled,
  className,
  variant = "success",
  ...props
}) => {
  const { downloadFile, isDownloading, progress } = useDownload();

  const handleDownload = useCallback(async () => {
    if (url) {
      await downloadFile({ url, fileName });
    }
  }, [downloadFile, fileName, url]);

  const rootClass = cl("relative w-full flex items-center justify-center", className);

  return (
    <div className={rootClass}>
      <CoButton
        text={"Download"}
        onClick={handleDownload}
        variant={variant}
        disabled={isDownloading || disabled}
        {...props}
      />

      {isDownloading && (
        <span
          className={
            "absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 bg-teal-500/70 text-white text-xl font-semibold text-center"
          }>
          {progress ?? 0}%
        </span>
      )}
    </div>
  );
};

export default DownloadLink;
