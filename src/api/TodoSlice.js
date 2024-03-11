import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    value: 0,
    data: [
      {
        id: 1,
        name: "get up",
        done: false,
      },
      {
        id: 2,
        name: "sit down",
        done: false,
      },
    ],
    name: "",
  },
  reducers: {
    onchange: (state, action) => {
      state.name = action.payload;
    },
    addTodo: (state, action) => {
      let obj = {
        id: Date.now(),
        name: state.name,
        done: false,
      };
      if (state.name.trim().length === 0) {
        toast.error("Epty");
      } else {
        state.data.push(obj);
        state.name = "";
        toast.success("done");
      }
    },
    deleteTodo: (state, action) => {
      let id = action.payload;
      state.data = state.data.filter((e) => {
        return e.id != id;
      });
    },
    completeTodo: (state, action) => {
      state.data = state.data.map((e) => {
        if (e.id === action.payload) {
          e.done = !e.done;
        }
        return e;
      });
    },
    increment: (state, action) => {
      console.log(action.payload);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  onchange,
  addTodo,
  deleteTodo,
  completeTodo,
} = TodoSlice.actions;

export default TodoSlice.reducer;
