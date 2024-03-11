import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// eslint-disable-next-line react-refresh/only-export-components
const App = lazy(() => import("./App.jsx"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster />
  </React.StrictMode>
);
