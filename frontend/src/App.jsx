import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Home/Landingpage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import VerifyMFA from "./Pages/Auth/VerifyMFA";
import EnableMFA from "./Pages/Auth/EnableMFA";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage";

import AdvocateDashboard from "./Pages/Advocate/AdvocateDashboard";
import ClientHome from "./Pages/Clients/ClientHome";
import AdvocateProfile from "./Pages/Advocate/AdvocateProfile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landingpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/enable-mfa/" element={< EnableMFA/>} />
        <Route path="/verify-mfa" element={<VerifyMFA />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Dashboard Routes */}
        <Route path="/advocate" element={<AdvocateDashboard />} />
        <Route path="/client" element={<ClientHome />} />


        <Route path="/advocate-profile" element={<AdvocateProfile />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
