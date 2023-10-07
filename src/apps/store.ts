import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import statusSlice from "../slices/statusSlice";
export const store = configureStore({
  reducer: {
    userDataList: userSlice,
    status: statusSlice,
  },
});
