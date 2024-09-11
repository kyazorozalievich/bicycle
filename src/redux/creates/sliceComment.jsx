import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comment: [],
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getComment: (state, action) => {
      let getCom = [...state.comment, action.payload];
      localStorage.setItem("comment", JSON.stringify(getCom));
      state.comment = getCom;
    },
  },
});

export const { getComment } = commentSlice.actions;
export default commentSlice.reducer;
