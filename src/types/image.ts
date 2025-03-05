import { SUPPORTED_IMAGE_FORMATS } from "@/constants/fileUploadConstants";

export type ImageFormat = (typeof SUPPORTED_IMAGE_FORMATS)[number];

export interface ImageResponse {
  file: File | Blob | string;
  fileName: string;
  mimeType?: string;
}
