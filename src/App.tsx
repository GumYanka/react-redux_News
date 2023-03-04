import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loyout from "./components/loyout";
import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.externalLink) {
      window.open(location.pathname, "_blank");
    }
  }, [location]);

  return (
    <>
      <Loyout>
        <AppRoutes />
        <Toaster />
      </Loyout>
    </>
  );
};

export default App;
