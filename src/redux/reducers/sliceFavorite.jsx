import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bicyclefavorite: JSON.parse(localStorage.getItem("bicyclebasket")) || [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      let getBas = [...state.bicyclefavorite, action.payload];
      localStorage.setItem("bicyclebasket", JSON.stringify(getBas));
      state.bicyclefavorite = getBas;
    },
    delFavorite: (state, action) => {
      state.bicyclefavorite = state.bicyclefavorite.filter(
        (el) => el._id !== action.payload
      );
    },
  },
});

export const { addFavorite, delFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
