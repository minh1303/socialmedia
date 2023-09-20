import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
const Router = () => {
  const router = createBrowserRouter([
    { path: "/", element: <App></App>, },
    { path: "/login", element: <Login></Login> },
    { path: "/register", element: <Register></Register> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;