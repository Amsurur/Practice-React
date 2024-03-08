import {
  useDeletePokemonMutation,
  useGetPokemonByNameQuery,
} from "../../services/Todo";

const Home = () => {
  const { data, isLoading } = useGetPokemonByNameQuery();
  const [deleteTodo, { isLoading: isLoad }] = useDeletePokemonMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data?.map((e) => {
        return (
          <div key={e.id} className="border p-2 my-1">
            <p>{e.name}</p>
            <img width={"100px"} src={e.img} alt="" />
            <button onClick={() => deleteTodo(e.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
