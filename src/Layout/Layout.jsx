import React from "react";
import { getToken } from "../utils/token";

const Layout = (props) => {
  console.log(getToken());
  return <div>Layout</div>;
};

export default Layout;
