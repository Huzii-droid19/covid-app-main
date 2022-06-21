import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { covidApi } from "./api";

export const store = configureStore({
  reducer: {
    [covidApi.reducerPath]: covidApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    covidApi.middleware,
  ],
});

setupListeners(store.dispatch);
