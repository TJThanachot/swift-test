import { createSlice } from "@reduxjs/toolkit";

export const userPhoneNumberSlice = createSlice({
  name: "userPhoneNumber",
  initialState: [],
  reducers: {
    setUserPhoneNumber: (state, action: any) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserPhoneNumber } = userPhoneNumberSlice.actions;

export default userPhoneNumberSlice.reducer;
