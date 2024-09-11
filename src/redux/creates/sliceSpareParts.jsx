import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  spareparts: [],
};

export const sparepartsSlice = createSlice({
  name: "spareparts",
  initialState,
  reducers: {
    getSpareparts: (state, action) => {
      state.spareparts = action.payload;
    },
  },
});

export const { getSpareparts } = sparepartsSlice.actions;
export default sparepartsSlice.reducer;
