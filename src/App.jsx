import { useDispatch, useSelector } from "react-redux";
import { store } from "./store/store";
import {
  addTodo,
  completeTodo,
  decrement,
  deleteTodo,
  increment,
  onchange,
} from "./api/TodoSlice";

const App = () => {
  const data = useSelector((state) => state.todo.data);
  const name = useSelector((state) => state.todo.name);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="border">
        <input
          value={name}
          onChange={(e) => dispatch(onchange(e.target.value))}
          type="text"
          name=""
          id=""
        />
        <button onClick={() => dispatch(addTodo())}>Add</button>
      </div>
      {data.map((e) => {
        return (
          <div className="flex border my-1" key={e.id}>
            <p>{e.name}</p>
            <p
              onClick={() => dispatch(completeTodo(e.id))}
              className="bg-[purple] text-white p-1 rounded mx-10"
            >
              {e.done ? "Done" : "notDone"}
            </p>
            <button onClick={() => dispatch(deleteTodo(e.id))}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
