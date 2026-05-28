import { Route } from "react-router-dom";

export const convertToRoute = (routes, type) => {
  return routes.map((route, routeIndex) => {
    const { path, element, children, index, caseSensitive, id } = route;
    if (children) {
      return (
        <Route
          key={`child-app-routes-${routeIndex}-${type}`}
          path={path}
          element={element}
          index={index}
          caseSensitive={caseSensitive}
          id={id}
        >
          {convertToRoute(children, type)}
        </Route>
      );
    }
    return (
      <Route
        key={`app-routes-${routeIndex}-${type}`}
        path={path}
        element={element}
        index={index}
        caseSensitive={caseSensitive}
        id={id}
      />
    );
  });
};
