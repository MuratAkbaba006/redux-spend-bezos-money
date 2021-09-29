import { configureStore } from "@reduxjs/toolkit";
import SpendSlice from "./SpendSlice/SpendSlice";
export const store = configureStore({
  reducer:{
    spend:SpendSlice
  }
})