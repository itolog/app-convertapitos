import React, { FC, useEffect, useRef, useState } from "react";

import useErrors from "@/hooks/errors/useErrors";
import QRCodeStyling, { Options } from "qr-code-styling";
import { FileExtension } from "qr-code-styling/lib/types";

import CoButton from "@/components/Buttons/CoButton/CoButton";
import CoSelect from "@/components/Inputs/CoSelect/CoSelect";

interface CoQrCodeProps {
  options: Options;
  fileName?: string;
}

const extOptions = [
  { label: "png", value: "png" },
  { label: "jpeg", value: "jpeg" },
  { label: "webp", value: "webp" },
  { label: "svg", value: "svg" },
];

const CoQrCode: FC<CoQrCodeProps> = ({ options, fileName = "qrcode" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));
  const [ext, setExt] = useState<FileExtension>("png");
  const { handleError } = useErrors();

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  const handleSelect = (value: string) => {
    setExt(value as FileExtension);
  };

  const handleDownload = async () => {
    try {
      await qrCode.download({ name: fileName, extension: ext });
    } catch (e) {
      handleError(e, {
        withSnackbar: true,
      });
    }
  };

  return (
    <div className={"qrcode-container"}>
      <div ref={ref} />
      <div className={"flex flex-row w-full justify-between items-center flex-wrap"}>
        <CoButton
          variant={"success"}
          type="button"
          className={"w-36"}
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
