import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "./reducers/sliceOrder";
import basketSlice from "./reducers/sliceBasket";
import searchSlice from "./reducers/sliceSearch";
import commentSlice from "./creates/sliceComment";
import productSlice from "./reducers/sliceProduct";
import favoriteSlice from "./reducers/sliceFavorite";
import sparepartsSlice from "./creates/sliceSpareParts";
import accessoriesSlice from "./creates/sliceAccessories";

export const store = configureStore({
  reducer: {
    order: orderSlice,
    data: productSlice,
    basket: basketSlice,
    search: searchSlice,
    comment: commentSlice,
    favorite: favoriteSlice,
    access: accessoriesSlice,
    spareparts: sparepartsSlice,
  },
});
