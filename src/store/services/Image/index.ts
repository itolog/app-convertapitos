import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import payloadToFormData from "@/helpers/forms/payloadToFormData";
import { ApiResponse } from "@/types";

import { ImageResponse } from "@/types/image";

import { FormValues } from "@/components/forms/FileForm/types";

export const imageApi = createApi({
  reducerPath: "image",
  baseQuery: fetchBaseQuery({
    baseUrl: "api",
  }),
  endpoints: (build) => ({
    convertImage: build.mutation<ApiResponse<ImageResponse>, FormValues>({
      query(body) {
        return {
          url: "/image",
          method: "POST",
          body: payloadToFormData(body),
        };
      },
    }),
  }),
});

export const { useConvertImageMutation } = imageApi;
