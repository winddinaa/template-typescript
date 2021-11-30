import { createSlice } from "@reduxjs/toolkit";

const initialState = { userInfo: { name: "", mobilePhone: "" } };

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUserInfo: (state, action) => {
      console.log("action", action);
      state.userInfo = action.payload;
    },
    clearUser: (state, action) => {
      state = initialState;
    },
  },
});

export const { setUserInfo, clearUser } = userSlice.actions;

export default userSlice.reducer;
