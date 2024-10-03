import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Bookings from "../Components/Bookings/Bookings";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristSport from "../Pages/AllTouristSport/AllTouristSport";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path : "/login",
          element : <Login></Login>
        },
        {
          path : "/register",
          element : <Register></Register>
        },
        {
          path : "bookings/:id",
          element : <Bookings></Bookings>,
          loader : ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
        },
        {
          path : "AddBookingPlace",
          element : <AddTouristsSpot></AddTouristsSpot>
        },
        {
          path : "/users",
          element : <AllTouristSport></AllTouristSport>,
          loader : () => fetch('http://localhost:5000/users')
        }
      ],
    },
  ]);

export default router;