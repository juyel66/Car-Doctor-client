import {createBrowserRouter} from "react-router-dom";
import Home from "../HomePages/Home";
import Main from "../Mains.jsx/Main";
import Login from "../Login";
import Register from "../Register/Register";
import CheckOut from "../CheckOut";
import BookService from "../BookService";
import Bookings from "../Bookings";
import PrivetRout from "../PrivetRout";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',

          element:<Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path: 'book/:id',
          element: <PrivetRout><BookService></BookService></PrivetRout>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path: 'checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: 'bookings',
          element: <PrivetRout><Bookings></Bookings></PrivetRout>

        },
      ]
    },
  ]);
  export default router;