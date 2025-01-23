import { Option } from "@/components/Inputs/CoSelect/types";
import { qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";
import { ImageOptions } from "@/components/QrCode/types";

const backgroundOptions = qrcodeDefaultOptions.backgroundOptions;

export const dotsOptions = qrcodeDefaultOptions.dotsOptions;

const cornersSquareOptions = qrcodeDefaultOptions.cornersSquareOptions;

const cornersDotOptions = qrcodeDefaultOptions.cornersDotOptions;

const imageOptions: ImageOptions = {
  id: "imageOptions",
  image: qrcodeDefaultOptions.image,
  ...qrcodeDefaultOptions.imageOptions,
};

export const settings = [
  dotsOptions,
  cornersSquareOptions,
  cornersDotOptions,
  backgroundOptions,
  imageOptions,
];

export const coSelectOptions: Option[] = [
  { label: "rounded", value: "rounded" },
  { label: "dots", value: "dots" },
  { label: "classy", value: "classy" },
  { label: "classy-rounded", value: "classy-rounded" },
  { label: "square", value: "square" },
  { label: "extra-rounded", value: "extra-rounded" },
];
