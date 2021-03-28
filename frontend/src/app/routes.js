import React from "react";
import { useRoutes } from "hookrouter";

import Home from "./pages/home";
import Empresas from "./pages/empresas";

const routes = {
  "/": () => <Home />,
  "/empresas": () => <Empresas />,
};

function PageTemplate() {
  const routeResult = useRoutes(routes);

  return routeResult || <h1>404 Not Found!</h1>;
}

export default PageTemplate;
