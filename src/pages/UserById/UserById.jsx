import { useState } from "react";
import { useParams } from "react-router-dom";

const UserById = () => {
  const { id } = useParams();
  let arr = [
    {
      id: 1,
      name: "Hakim",
    },
    {
      id: 2,
      name: "Muhammad",
    },
    {
      id: 3,
      name: "Adham",
    },
  ];

  return (
    <div>
      {arr
        .filter((e) => e.id == id)
        .map((user) => {
          return (
            <div key={user.id}>
              <p>{user.id} users id</p>
              <p>{user.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default UserById;
