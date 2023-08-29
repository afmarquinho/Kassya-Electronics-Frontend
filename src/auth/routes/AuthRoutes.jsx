import { Route, Routes } from "react-router-dom";

import {
  ConfirmAccountPage,
  ForgotPasswordPage,
  LoginPage,
  NotfoundPage,
  RegisterPage,
} from "../pages";
import NewPassword from "../pages/NewPassword";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password/" element={<ForgotPasswordPage />} />
      <Route path="/account-confirmation/:token" element={<ConfirmAccountPage />} />
      <Route path="/new-password/:token" element={<NewPassword />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default AuthRoutes;
