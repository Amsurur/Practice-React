import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
  getTodo,
  onchange,
} from "./api/TodoSlice";
import { useEffect } from "react";
import Skeleton from "@mui/material/Skeleton";
const App = () => {
  const data = useSelector((state) => state.todo.data);
  const loading = useSelector((state) => state.todo.loading);
  const name = useSelector((state) => state.todo.name);
  const dispatch = useDispatch();
  const ImageApi = "http://65.108.148.136:8080/images/";

  useEffect(() => {
    dispatch(getTodo());
  }, [dispatch]);
  return (
    <div>
      
      {loading ? (
        <Skeleton
          sx={{ bgcolor: "grey.400" }}
          variant="rectangular"
          width={210}
          height={118}
        />
      ) : null}
      {data.map((e) => {
        return (
          <div key={e.id}>
            <img
              className="w-[10%]"
              src={`${ImageApi}${e.images[0].imageName}`}
              alt=""
            />
            <p>{e.name}</p>
            <p>{e.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
