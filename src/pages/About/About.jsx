import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const Api = "http://65.108.148.136:8080";
  const ImageApi = "http://65.108.148.136:8080/images/";
  const [data, setData] = useState([]);
  async function getTodo() {
    try {
      const { data } = await axios.get(`${Api}/ToDo/get-to-dos`);
      if (data.statusCode === 200) {
        setData(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      {data.map((e) => {
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
