import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
const Api = "http://65.108.148.136:8080";

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  try {
    const { data } = await axios.get(`${Api}/ToDo/get-to-dos`);
    return data;
  } catch (error) {
    console.error(error);
  }
});
export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async (obj, { dispatch }) => {
    let formData = new FormData();
    formData.append("Images", obj.img);
    formData.append("Name", obj.name);
    formData.append("Description", obj.desc);
    try {
      const { data } = await axios.post(
        `${Api}/ToDo/add-to-do`,
        formData,
        "Content-type: multipart/form-data"
      );
      dispatch(getTodo());
    } catch (error) {
      console.error(error);
    }
  }
);

export const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    value: 0,
    data: [],
    name: "",
    loading: false,
  },
  reducers: {
    onchange: (state, action) => {
      state.name = action.payload;
    },
    // addTodo: (state, action) => {
    //   let obj = {
    //     id: Date.now(),
    //     name: state.name,
    //     done: false,
    //   };
    //   if (state.name.trim().length === 0) {
    //     toast.error("Epty");
    //   } else {
    //     state.data.push(obj);
    //     state.name = "";
    //     toast.success("done");
    //   }
    // },
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
  extraReducers: (builder) => {
    builder.addCase(getTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTodo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
    });
    builder.addCase(getTodo.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(addTodo.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  onchange,
  deleteTodo,
  completeTodo,
} = TodoSlice.actions;

export default TodoSlice.reducer;
