import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SpecialistsPage from "./pages/SpecialistsPage";
import AboutmePage from "./pages/AboutmePage";
import LoginPage2 from "./pages/LoginPage2";
import AppointmentsPage from "./pages/AppointmentsPage";
import HorarioPage from "./pages/HorarioPage";
import AdminPanel from "./pages/AdminPanel";
import Footer from "./components/Footer";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"));

  // Função chamada no login, recebe o token e o email
  const handleLogin = (token, email) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
    setAuthToken(token);
    setUserEmail(email);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    setAuthToken(null);
    setUserEmail('');
  };

  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">

        {/* Header e Footer só aparecem se o usuário estiver autenticado */}
        {authToken && <Header userEmail={userEmail} onLogout={handleLogout} />}

        <div className="flex-grow">
          <Routes>
            {!authToken ? (
              <>
                <Route path="/" element={<LoginPage2 onLogin={handleLogin} />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/atendentes" element={<SpecialistsPage />} />
                <Route path="/sobremim" element={<AboutmePage />} />
                <Route path="/agenda" element={<AppointmentsPage />} />
                <Route path="/horario" element={<HorarioPage />} />
                <Route path="/admin" element={<AdminPanel />} />
              </>
            )}
          </Routes>
        </div>

        {authToken && <Footer />}
      </div>
    </Router>
  );
}

export default App;