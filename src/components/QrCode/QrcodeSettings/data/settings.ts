import { Option } from "@/components/Inputs/CoSelect/types";
import { qrcodeDefaultOptions } from "@/components/QrCode/data/qrcode";
import {
  BackgroundOptions,
  CornersDotOptions,
  CornersSquareOptions,
  DotsOptions, // ImageOptions,
} from "@/components/QrCode/QrcodeSettings/types";

const backgroundOptions: BackgroundOptions = {
  label: "backgroundOptions",
  settings: qrcodeDefaultOptions.backgroundOptions,
};

export const dotsOptions: DotsOptions = {
  label: "dotsOptions",
  settings: qrcodeDefaultOptions.dotsOptions,
};

const cornersSquareOptions: CornersSquareOptions = {
  label: "cornersSquareOptions",
  settings: qrcodeDefaultOptions.cornersSquareOptions,
};

const cornersDotOptions: CornersDotOptions = {
  label: "cornersDotOptions",
  settings: qrcodeDefaultOptions.cornersDotOptions,
};

// const imageOptions: ImageOptions = {
//   label: "imageOptions",
//
//   settings: {
//     ...qrcodeDefaultOptions.imageOptions,
//     image: qrcodeDefaultOptions.image,
//   },
// };

export const settings = [
  dotsOptions,
  cornersSquareOptions,
  cornersDotOptions,
  backgroundOptions,
  // imageOptions,
];

export const coSelectOptions: Option[] = [
  { label: "rounded", value: "rounded" },
  { label: "dots", value: "dots" },
  { label: "classy", value: "classy" },
  { label: "classy-rounded", value: "classy-rounded" },
  { label: "square", value: "square" },
  { label: "extra-rounded", value: "extra-rounded" },
];
