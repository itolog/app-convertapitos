// export const FILE_EXTENSION = {
//   AVIF: "avif",
//   BMP: "bmp",
//   // DDS: "dds",
//   GIF: "gif",
//   // HDR: "hdr",
//   ICO: "ico",
//   JPEG: "jpeg",
//   EXR: "exr",
//   PNG: "png",
//   PNM: "pnm",
//   QOI: "qoi",
//   TGA: "tga",
//   TIFF: "tiff",
//   WebP: "webp",
// };

export const FILE_EXTENSION = {
  AVIF: "avif",
  DZ: "dz",
  GIF: "gif",
  HEIF: "heif",
  JPEG: "jpeg",
  JP2: "jp2",
  JXL: "jxl",
  PDF: "pdf",
  PNG: "png",
  PPM: "ppm",
  SVG: "svg",
  TIFF: "tiff",
  TIF: "tif",
  WEBP: "webp",
} as const;

export const SUPPORTED_IMAGE_FORMATS = Object.values(FILE_EXTENSION);

export const ACCEPTED_IMAGE_TYPES = Object.values(FILE_EXTENSION).map((item) => {
  return `image/${item}`;
});
