import { configureStore } from "@reduxjs/toolkit";
import cartsReducer  from "../features/carts/cartSlice"



export const store = configureStore({
  reducer: {
    carts: cartsReducer,
  },
});






export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
