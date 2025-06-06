"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

import useErrors from "@/hooks/errors/useErrors";
import { cn } from "@/lib/utils";
import QRCodeStyling from "qr-code-styling";
import { type FileExtension } from "qr-code-styling";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoSelect from "@/components/Inputs/CoSelect/CoSelect";

import { useAppSelector } from "@/store/hooks";
import { getOptions } from "@/store/qrcode/selectors";

interface Classes {
  root?: string;
}

interface CoQrCodeProps {
  fileName?: string;
  classes?: Classes;
}

declare global {
  interface Navigator {
    msSaveOrOpenBlob: (blobOrBase64: Blob | Buffer, filename: string) => void;
  }
}

const extOptions = [
  { label: "png", value: "png" },
  { label: "jpeg", value: "jpeg" },
  { label: "webp", value: "webp" },
  { label: "svg", value: "svg" },
];

const CoQrCode: FC<CoQrCodeProps> = ({ fileName = "qrcode", classes }) => {
  const ref = useRef<HTMLDivElement>(null);
  const options = useAppSelector(getOptions);
  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling());
  const [ext, setExt] = useState<FileExtension>("png");
  const { handleError } = useErrors();

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    const isMobile = window.innerWidth <= 390;
    const width = isMobile ? 240 : 256;
    const height = isMobile ? 240 : 256;

    qrCode.update({ ...options, width, height });
  }, [qrCode, options]);

  const handleSelect = (value: string) => {
    setExt(value as FileExtension);
  };

  const handleDownload = useCallback(async () => {
    try {
      const blob = (await qrCode.getRawData(ext)) as Blob;
      if (!blob) return;

      if (window.navigator?.msSaveOrOpenBlob) {
        window.navigator?.msSaveOrOpenBlob(blob, fileName);
      } else {
        const a = document.createElement("a");
        document.body.appendChild(a);
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        a.click();

        setTimeout(() => {
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        }, 0);
      }
    } catch (e) {
      handleError(e, {
        withSnackbar: true,
      });
    }
  }, [ext, fileName, handleError, qrCode]);

  return (
    <div className={cn("qrcode-container sticky top-[70px]", classes?.root)}>
      <div ref={ref} />
      <div className={"flex w-full flex-row flex-wrap items-center justify-between gap-2"}>
        <CoButton
          variant={"success"}
          type="button"
          className={"flex-1"}
          disabled={!options.data}
          text={"Download"}
          onClick={handleDownload}
        />

        <CoSelect
          classes={{
            trigger: "w-24",
          }}
          defaultValue={"png"}
          onChange={handleSelect}
          options={extOptions}
        />
      </div>
    </div>
  );
};

export default CoQrCode;
