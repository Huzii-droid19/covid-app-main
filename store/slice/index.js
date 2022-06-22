import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userMeta: {},
  isLoggedIn: false,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      (state.userMeta = action.payload.user),
        (state.isLoggedIn = action.payload.isLoggedIn);
    },
    logout: (state, action) => {
      (state.isLoggedIn = false), (state.user = {});
    },
  },
});
export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const selectAuthSlice = (state) => state.auth;
