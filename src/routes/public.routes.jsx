import RegistrationFlow from "@/screens/authentication/registration/RegistrationFlow";

const publicRouteList = [
  {
    path: "/",
    children: [
      {
        path: "",
        element: <RegistrationFlow />,
      },
    ],
  },
];

export default publicRouteList;
