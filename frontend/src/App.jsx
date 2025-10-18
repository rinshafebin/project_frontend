import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landingpage from "./pages/Home/Landingpage";
import LoginPage from "./Pages/Auth/LoginPage";
import RegisterPage from "./Pages/Auth/RegisterPage";
// import CasesPage from "./pages/Advocate/CasesPage";
// import Dashboard from "./pages/Advocate/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Landingpage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/Advocatecase-page" element={<CasesPage />} />
        <Route path="/advocatedashboard" element={<Dashboard />} /> */}

      </Routes>
    </BrowserRouter>
  );
};

export default App;
