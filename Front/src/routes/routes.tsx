import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import travelPlanData from "../../data/travelPlan.json";
import Cities from "../pages/Cities";
import Dates from "../pages/Dates";
import TravelPlan from "../pages/TravelPlan";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/travel_plans",
    element: <Home schedules={travelPlanData} />,
  },
  {
    path: "/cities",
    element: <Cities />,
  },
  {
    path: "/dates",
    element: <Dates />,
  },
  {
    path: "/travel_plans/:travelPlanId",
    element: <TravelPlan />,
    children: [
      // {
      //   path: "place_groups",
      //   element: <PlaceGroups />,
      // },
    ],
  },
  // {
  //   path: "/place_groups/:groupId",
  //   element: <PlaceGroupDetail />,
  // },
  // {
  //   path: "/schedules/:dailyScheduleId/places",
  //   element: <Places />,
  // },
  // {
  //   path: "/place_groups/:groupId/places",
  //   element: <Places />,
  // },
]);

export default routes;
