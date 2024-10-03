import React, { FC, useEffect, useRef, useState } from "react";

import QRCodeStyling, { Options } from "qr-code-styling";

import CoButton from "@/components/Buttons/CoButton/CoButton";

interface CoQrCodeProps {
  options: Options;
  fileName?: string;
}

const CoQrCode: FC<CoQrCodeProps> = ({ options, fileName = "qrcode" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [qrCode] = useState<QRCodeStyling>(new QRCodeStyling(options));

  useEffect(() => {
    if (ref.current) {
      qrCode.append(ref.current);
    }
  }, [qrCode, ref]);

  useEffect(() => {
    if (!qrCode) return;
    qrCode.update(options);
  }, [qrCode, options]);

  const handleDownload = async () => {
    try {
      await qrCode.download({ name: fileName, extension: "png" });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(options.data);
  return (
    <div className={"flex flex-col gap-4 items-center px-4"}>
      <div ref={ref} />
      <div className={"flex flex-row justify-between items-center flex-wrap"}>
        <CoButton
          variant={"success"}
          type="button"
          className={"w-40"}
          disabled={!options.data}
          text={"Download"}
          onClick={handleDownload}
        />
      </div>
    </div>
  );
};

export default CoQrCode;
