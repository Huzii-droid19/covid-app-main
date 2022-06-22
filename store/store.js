import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { covidApi } from "./api/covidApi";
import authSlice from "./slice";
import { dataApi } from "./api/dataApi";

export const store = configureStore({
  reducer: {
    [covidApi.reducerPath]: covidApi.reducer,
    auth: authSlice,
    [dataApi.reducerPath]: dataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: false,
    }),
    covidApi.middleware,
    dataApi.middleware,
  ],
});

setupListeners(store.dispatch);
