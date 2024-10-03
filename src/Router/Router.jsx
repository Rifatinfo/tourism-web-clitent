import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Bookings from "../Components/Bookings/Bookings";
import AddTouristsSpot from "../Pages/AddTouristsSpot/AddTouristsSpot";
import MyListPage from "../Pages/MyListPage/MyListPage";
import AllTouristsSpots from "../Pages/AllTouristsSpots/AllTouristsSpots";
import TourDetails from "../Components/TourDetails/TourDetails";
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
          element : <MyListPage></MyListPage>,
          loader : () => fetch('http://localhost:5000/users')
        },
        {
          path : '/all-tour-sport',
          element : <AllTouristsSpots></AllTouristsSpots>
        },
        {
          path : "/all-tour-sport/bookings/:id",
          element : <TourDetails></TourDetails>,
          loader : ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
        },
      ],
    },
  ]);

export default router;