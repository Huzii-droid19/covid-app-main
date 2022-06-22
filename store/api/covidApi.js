import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../config";

export const covidApi = createApi({
  reducerPath: "covidApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (params) => ({
        url: "user/login",
        method: "POST",
        body: params,
      }),
    }),
    signUp: builder.mutation({
      query: (params) => ({
        url: "user/signup/",
        method: "POST",
        body: params,
      }),
    }),
    getTestingHistory: builder.query({
      query: (id) => `records/${id}`,
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useGetTestingHistoryQuery,
} = covidApi;
