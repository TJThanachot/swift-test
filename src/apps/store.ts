import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import statusSlice from "../slices/statusSlice";
import userIdNumberSlice from "../slices/userIdNumberSlice";
import userPhoneNumberSlice from "../slices/userPhoneNumberSlice";
export const store = configureStore({
  reducer: {
    userDataList: userSlice,
    status: statusSlice,
    userIdNumber: userIdNumberSlice,
    userPhoneNumber: userPhoneNumberSlice,
  },
});
