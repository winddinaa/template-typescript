import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userSlice";
import logger from "redux-logger";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
