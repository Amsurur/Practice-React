import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/home/Home";
import AuthCheck from "./utils/AuthChek";
import Layout from "./Layout/Layout";
import ProtectedRout from "./utils/ProtectedRoute";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <AuthCheck>
          <Login />
        </AuthCheck>
      ),
    },
    {
      path: "/home",
      element: (
        <ProtectedRout>
          <Layout />
        </ProtectedRout>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
