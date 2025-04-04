import React, { Suspense, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import frontEndRoutes from "./constants/frontendRoutes"; // Static import, not lazy-loaded

const Landing = React.lazy(() => import("./pages/LandingPage"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const LoadAnimation = React.lazy(() => import("./component/LoadAnimation"));
const Home = React.lazy(() => import("./pages/Home"));
const Interview = React.lazy(() => import("./pages/Interview"));
function App() {
  return (
    <Routes>  
      <Route
        path={"/"}
        element={<ExcludeNavbar Component={Landing} />}
      />
      <Route
        path={frontEndRoutes.LOGIN}
        element={<ExcludeNavbar Component={Login} />}
      />
      <Route
        path={frontEndRoutes.REGISTER}
        element={<ExcludeNavbar Component={Register} />}
      />
      <Route
        path={frontEndRoutes.HOME}
        element={<ExcludeNavbar Component={Home} />}
      />
      <Route
        path={frontEndRoutes.INTERVIEW}
        element={<ExcludeNavbar Component={Interview} />}
      />
    </Routes>
  );
}
const ExcludeNavbar = ({ Component }) => (
  <Suspense fallback={<LoadAnimation />}>
    <Component />
  </Suspense>
);
export default App;