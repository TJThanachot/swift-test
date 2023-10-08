import { createSlice } from "@reduxjs/toolkit";

export const userIdNumberSlice = createSlice({
  name: "userIdNumber",
  initialState: [],
  reducers: {
    setUserIdNumber: (state, action: any) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setUserIdNumber } = userIdNumberSlice.actions;

export default userIdNumberSlice.reducer;
