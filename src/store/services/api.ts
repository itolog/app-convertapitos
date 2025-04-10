import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "@/store/services/config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
