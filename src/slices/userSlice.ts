import { createSlice } from "@reduxjs/toolkit";

const getInitialUserData = () => {
  const dataFromLocal: any[] = JSON.parse(localStorage.getItem("userData"));
  return dataFromLocal || []; // return an empty array if there is no data from localStorage
};

export const userSlice = createSlice({
  name: "user",
  initialState: getInitialUserData(),
  reducers: {
    addUser: (state, action: any) => {
      if (state.length > 0) {
        action.payload.key = state[state.length - 1].key + 1;
      } else {
        action.payload.key = 1;
      }
      state = [...state, action.payload];
      localStorage.setItem("userData", JSON.stringify(state));
      return state;
    },
    updateUser: (state, action: any) => {
      action.payload.values.key = state[action.payload.index].key;
      state[action.payload.index] = action.payload.values;
      localStorage.setItem("userData", JSON.stringify(state));
      return state;
    },
    deleteUser: (state, action) => {
      const indicesToDelete = action.payload;
      const newState = state.filter((item, index) => {
        return !indicesToDelete.includes(item.key);
      });
      state = [...newState];
      localStorage.setItem("userData", JSON.stringify(state));
      return state;
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
