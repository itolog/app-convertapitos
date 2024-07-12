import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import payloadToFormData from "@/helpers/forms/payloadToFormData.ts";
import { FormValues } from "@/Pages/ConvertPage/components/forms/FileForm/types.ts";
import { ApiResponse } from "@/types";

import { DataResponse } from "@/store/services/Image/types.ts";

const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/${import.meta.env.VITE_API_VERSION}`;

export const imageApi = createApi({
	reducerPath: "image",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (build) => ({
		convertImage: build.mutation<ApiResponse<DataResponse>, Partial<FormValues>>({
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
