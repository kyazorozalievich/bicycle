import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: JSON.parse(localStorage.getItem("order")) || [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    createOrder: (state, action) => {
      let getOrder = [...state.order, action.payload];
      localStorage.setItem("order", JSON.stringify(getOrder));
      state.order = getOrder;
    },
    deleteOrder: (state, action) => {
      state.order = state.order.filter((order) => order._id !== action.payload);
      localStorage.setItem("order", JSON.stringify(state.order));
    },
    clearOrder: (state, action) => {
      localStorage.setItem("order", JSON.stringify([]));
      state.order = [];
    },
  },
});

export const { createOrder, deleteOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
