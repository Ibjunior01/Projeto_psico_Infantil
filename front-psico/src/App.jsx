import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SpecialistsPage from "./pages/SpecialistsPage";
import AboutmePage from "./pages/AboutmePage";
import AboutProfissionalPage from "./pages/AboutProfissionalPage";
import LoginPage from "./pages/LoginPage"; // Alterado para LoginPage2
import SignupPage from "./pages/SignupPage"; 
import AppointmentsPage from "./pages/AppointmentsPage";
import HorarioPage from "./pages/HorarioPage";
import AdminPanel from "./pages/AdminPanel";
import EvolucaoClinicaPage from "./pages/EvolucaoClinicaPage";
import Footer from "./components/Footer";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
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
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
                <Route path="/signup" element={<SignupPage onLogin={handleLogin} />} /> {/* Rota de cadastro */}
                <Route path="*" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/atendentes" element={<SpecialistsPage />} />
                <Route path="/sobremimpaciente" element={<AboutmePage />} />
                <Route path="/sobremimprofissional" element={<AboutProfissionalPage />} />
                <Route path="/agenda" element={<AppointmentsPage />} />
                <Route path="/horario" element={<HorarioPage />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/evolucao" element={<EvolucaoClinicaPage />} />
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
