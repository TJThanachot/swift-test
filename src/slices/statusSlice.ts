import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  index: null,
  boolean: false,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus: (state, action: any) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setStatus } = statusSlice.actions;

export default statusSlice.reducer;
