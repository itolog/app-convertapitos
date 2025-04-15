import { ApiResponse } from "@/types";

import payloadToFormData from "@/utils/forms/payloadToFormData";

import { apiSlice } from "@/store/services/api";
import { DataResponse, ImagePayload } from "@/store/services/Image/types";

export const imageApi = apiSlice.injectEndpoints({
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
