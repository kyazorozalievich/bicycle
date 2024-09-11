import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.product = action.payload;
    },
    createProduct: (state, action) => {
      state.product = [...state.product, action.payload];
    },
    incrementProduct: (state, action) => {
      state.product = state.product.map((item) =>
        item._id === action.payload ? { ...item, count: item.count + 1 } : item
      );
    },
    decrementProduct: (state, action) => {
      state.product = state.product.map((item) =>
        item._id === action.payload && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      );
    },
  },
});
export const {
  getProducts,
  createProduct,
  incrementProduct,
  decrementProduct,
} = productSlice.actions;
export default productSlice.reducer;
