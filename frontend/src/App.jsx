import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./pages/Home/Landingpage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
import VerifyMFA from "./Pages/Auth/VerifyMFA";
import EnableMFA from "./Pages/Auth/EnableMFA";
import ForgotPasswordPage from "./Pages/Auth/ForgotPasswordPage";

// import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdvocateDashboard from "./Pages/Advocate/Dashboard/AdvocateDashboard";
import ClientDashboard from "./Pages/Client/ClientDashboard";

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
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* <Route path="/advocate" element={<AdvocateDashboard />} />
        <Route path="/client" element={<ClientDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
