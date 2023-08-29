import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoutes from "../auth/routes/AuthRoutes";
import KassyaRoutes from "../kassya/router/KassyaRoutes";
import HomePage from "../kassya/pages/HomePage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
