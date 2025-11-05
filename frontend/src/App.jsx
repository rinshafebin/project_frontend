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
import CasesPage from "./Pages/Advocate/CasesPage";
import ClientsPage from "./Pages/Advocate/ClientsPage";
import CalendarPage from "./Pages/Advocate/CalendarPage";
import DocumentsPage from "./Pages/Advocate/DocumentsPage";
import Team from "./Pages/Advocate/Team";
import SettingsPage from "./Pages/Advocate/SettingsPage";
import NotificationsPage from "./Pages/Advocate/NotificationsPage";
import MessagesPage from "./Pages/Advocate/MessagesPage";



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
        <Route path="/client" element={<ClientHome />} />
        <Route path="/advocate/profile" element={<AdvocateProfile />} />
        <Route path="/advocate" element={<AdvocateDashboard />} />
        <Route path="/advocate/cases" element={<CasesPage />} />
        <Route path="/advocate/clients" element={<ClientsPage />} />
        <Route path="/advocate/calendar" element={<CalendarPage />} />
        <Route path="/advocate/documents" element={<DocumentsPage />} />
        <Route path="/advocate/team" element={<Team />} />
        <Route path="advocate/settings" element={<SettingsPage />} />
        <Route path="/advocate/messages" element={<MessagesPage />} />
        <Route path="/advocate/notifications" element={< NotificationsPage />} />
        

        

      </Routes>
    </BrowserRouter>
  );
};

export default App;
