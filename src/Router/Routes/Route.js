import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import About from "../../Pages/Home/About/About";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Service/Services";
import SingleServiceDetails from "../../Pages/Service/SingleServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/addservices",
        element: <AddService></AddService>
      },
      {
        path: "/services/:id",
        element: <SingleServiceDetails></SingleServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
