import React from "react";
import { axiosRequest } from "../../utils/axiosRequest";
import { saveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";
// {
//   "userName": "ams",
//   "password": "123456"
// }
const Login = () => {
  let navigate = useNavigate();
  async function Login(e) {
    e.preventDefault();
    let obj = {
      userName: e.target["userName"].value,
      password: e.target["password"].value,
    };
    try {
      const { data } = await axiosRequest.post("Account/login", obj);
      console.log(data);
      if (data.statusCode === 200) {
        saveToken(data.data);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      <form onSubmit={Login} action="">
        <input
          className="border-4    rounded border-green-300"
          type="text"
          name="userName"
        />
        <input
          className="border-4 rounded border-green-300"
          type="password"
          name="password"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
