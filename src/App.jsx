import { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import commonRouteList from "./routes/common.routes";

import { PrivateRoute, PublicRoute } from "./routes/helper/routeHelper";

import privetRouteList from "./routes/privet.routes";

import publicRouteList from "./routes/public.routes";

import { convertToRoute } from "./routes/utils/convertToRoute";

const App = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicRoute />}>
          {convertToRoute(publicRouteList, "publicRoute")}
        </Route>

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          {convertToRoute(privetRouteList, "privateRoute")}
        </Route>

        {/* Common Routes */}
        {convertToRoute(commonRouteList, "common")}
      </Routes>
    </Suspense>
  );
};

export default App;
