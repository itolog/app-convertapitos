import sharp from "sharp";

import { ImageFormat } from "@/types/image";

import { FORM_FIELD } from "@/components/forms/FileForm/constants";

export async function POST(request: Request) {
  const formData = await request.formData();
  const convert_to = formData.get(FORM_FIELD.CONVERT_TO) as ImageFormat;
  const image_file = formData.get(FORM_FIELD.IMAGE_FILE) as File;

  try {
    const bytes = await image_file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const file = sharp(buffer).toFormat(convert_to);
    const response = await file.toBuffer();
    const base64Image = response.toString("base64");
    const mimeType = `image/${convert_to}`;
    const fileName = `${image_file.name.split(".")[0]}_${Date.now()}.${convert_to}`;

    return Response.json({
      data: {
        file: base64Image,
        fileName,
        mimeType,
      },
    });
  } catch (error) {
    return Response.json(
      {
        data: null,
        error: {
          message: (error as Error).message,
          status: 400,
        },
      },
      {
        status: 400,
      },
    );
  }
}
