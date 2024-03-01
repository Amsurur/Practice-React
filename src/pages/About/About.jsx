import React from "react";
import { Link } from "react-router-dom";

const About = () => {
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
      {arr.map((e) => {
        return (
          <div key={e.id}>
            <Link to={`/about/user/${e.id}`}>
              <p>{e.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default About;
