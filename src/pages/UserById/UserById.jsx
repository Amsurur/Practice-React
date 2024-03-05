import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserById = () => {
  const { id } = useParams();
  const Api = "http://65.108.148.136:8080";
  const ImageApi = "http://65.108.148.136:8080/images/";
  const [data, setData] = useState([]);
  async function getById() {
    try {
      const { data } = await axios.get(`${Api}/ToDo/get-to-do-by-id?id=${id}`);
      setData(data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getById();
  }, [id]);
  return (
    <div>
      <p> Id: {data.id}</p>
      <p> Name: {data.name}</p>
      <p> Desc: {data.description}</p>
    </div>
  );
};

export default UserById;
