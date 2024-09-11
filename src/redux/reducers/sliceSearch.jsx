import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
export const { getSearch } = searchSlice.actions;
export default searchSlice.reducer;
