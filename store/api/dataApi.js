import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Text } from "react-native";

const BASE_URL = "https://disease.sh/";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCovidInfo: builder.query({
      query: () => `v3/covid-19/all`,
    }),
    getCovidGraphWorldWide: builder.query({
      query: () => `v3/covid-19/historical/all?lastdays=all`,
      transformResponse: (response) => {
        const { deaths, recovered } = response;
        const deaths_array = Object.keys(deaths).map((key, index) => {
          return {
            value: deaths[key],
            labelComponent: () =>
              index % 2 === 0 ? (
                <Text>
                  {new Date(key).toLocaleString("en-us", { month: "short" })}
                </Text>
              ) : null,
            hideDataPoint: index % 2 === 1 ? true : false,
          };
        });
        const recovered_array = Object.keys(recovered).map((key, index) => {
          return {
            value: recovered[key],
            labelComponent: () =>
              index % 2 === 0 ? (
                <Text>
                  {new Date(key).toLocaleString("en-us", { month: "short" })}
                </Text>
              ) : null,
            hideDataPoint: index % 2 === 1 ? true : false,
          };
        });
        return {
          deaths: deaths_array.slice(0, 40),
          recovered: recovered_array.slice(0, 40),
        };
      },
    }),
  }),
});

export const { useGetCovidGraphWorldWideQuery, useGetCovidInfoQuery } = dataApi;
