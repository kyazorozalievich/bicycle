import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessories: [],
};

export const accessoriesSlice = createSlice({
  name: "accessories",
  initialState,
  reducers: {
    getAccess: (state, action) => {
      state.accessories = action.payload;
    },
  },
});

export const { getAccess } = accessoriesSlice.actions;

export default accessoriesSlice.reducer;
