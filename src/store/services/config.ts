import {
  fetchBaseQuery,
  // retry
} from "@reduxjs/toolkit/query/react";

// import { RootState } from "@/store";

const baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${process.env.NEXT_PUBLIC_API_VERSION}`;

// const baseQuery = fetchBaseQuery({
//   baseUrl: "/",
//   prepareHeaders: (headers, { getState }) => {
//     // By default, if we have a token in the store, let's use that for authenticated requests
//     const token = (getState() as RootState).auth.token;
//     if (token) {
//       headers.set("authentication", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

export const baseQuery = fetchBaseQuery({
  baseUrl,
});

// export const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });
