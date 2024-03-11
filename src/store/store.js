import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../api/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});
