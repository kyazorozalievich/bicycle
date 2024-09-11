import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bicyclebasket: JSON.parse(localStorage.getItem("bicyclebasket")) || [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBicycleToBasket: (state, action) => {
      let res = [...state.bicyclebasket, action.payload];
      localStorage.setItem("bicyclebasket", JSON.stringify(res));
      state.bicyclebasket = res;
    },
    delBicycleBasket: (state, action) => {
      let res = state.bicyclebasket.filter((el) => el._id !== action.payload);
      localStorage.setItem("bicyclebasket", JSON.stringify(res));
      state.bicyclebasket = res;
    },
    clearBasket: (state) => {
      localStorage.setItem("bicyclebasket", JSON.stringify([]));
      state.bicyclebasket = [];
    },
    incrementBasket: (state, action) => {
      let inBas = state.bicyclebasket.map((item) =>
        item._id === action.payload._id
          ? { ...item, count: item.count + 1 }
          : item
      );
      localStorage.setItem("bicyclebasket", JSON.stringify(inBas));
      state.bicyclebasket = inBas;
    },
    decrementBasket: (state, action) => {
      let deBas = state.bicyclebasket.map((item) =>
        item._id === action.payload._id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );
      localStorage.setItem("bicyclebasket", JSON.stringify(deBas));
      state.bicyclebasket = deBas;
    },
  },
});

export const {
  addBicycleToBasket,
  delBicycleBasket,
  clearBasket,
  incrementBasket,
  decrementBasket,
} = basketSlice.actions;
export default basketSlice.reducer;
