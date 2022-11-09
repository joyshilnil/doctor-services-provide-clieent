import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import AddReview from "../../Pages/MyReview/AddReview";
import Register from "../../Pages/Register/Register";
import Services from "../../Pages/Service/Services";
import SingleServiceDetails from "../../Pages/Service/SingleServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/myreview",
        element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
      },
      {
        path: "/services/:id",
        element: <SingleServiceDetails></SingleServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://doctor-server-seven.vercel.app/services/${params.id}`),
      },
    ],
  },
]);

export default router;
