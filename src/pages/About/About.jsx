import axios from "axios";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";

const About = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  let api = "http://localhost:3000/data";
  async function getTodo() {
    try {
      let { data } = await axios.get(api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
  async function addUser() {
    let user = {
      id: Date.now(),
      name: name,
      img: image.base64,
    };
    try {
      let { data } = await axios.post(api, user);
      getTodo();
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getTodo();
  }, []);
  return (
    <div>
      <div>
        {data.map((e) => {
          return (
            <div key={e.id} className="flex ">
              <img className="w-[100px]" src={e.img} alt="" />
              <p>{e.name} </p>
            </div>
          );
        })}
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <FileBase64 onDone={(e) => setImage(e)} />
      <button onClick={() => addUser()}>add</button>
    </div>
  );
};

export default About;
