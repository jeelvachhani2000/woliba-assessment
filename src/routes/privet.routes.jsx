import Dashboard from "@/screens/dashboard/Dashboard";

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
