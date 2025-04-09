import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import payloadToFormData from "@/helpers/forms/payloadToFormData";
import { ApiResponse } from "@/types";

import { DataResponse, ImagePayload } from "@/store/services/Image/types";

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`;

export const imageApi = createApi({
  reducerPath: "image",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    convertImage: build.mutation<ApiResponse<DataResponse>, ImagePayload>({
      query(body) {
        return {
          url: "/image/convert",
          method: "POST",
          body: payloadToFormData(body),
        };
      },
    }),
  }),
});

export const { useConvertImageMutation } = imageApi;
