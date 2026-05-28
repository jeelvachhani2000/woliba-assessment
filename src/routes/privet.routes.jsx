import Dashboard from "@/screens/Dashboard/Dashboard";

const privetRouteList = [
  {
    path: "/",
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];

export default privetRouteList;
