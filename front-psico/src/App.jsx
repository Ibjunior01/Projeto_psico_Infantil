import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import SpecialistsPage from "./pages/SpecialistsPage";
import AboutmePage from "./pages/AboutmePage";
import AboutProfissionalPage from "./pages/AboutProfissionalPage";
import LoginPage from "./pages/LoginPage2";
import SignupPage from "./pages/SignupPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import HorarioPage from "./pages/HorarioPage";
import AdminPanel from "./pages/AdminPanel";
import EvolucaoClinicaPage from "./pages/EvolucaoClinicaPage";

function App() {
  const [authToken, setAuthToken] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userTipo, setUserTipo] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const email = localStorage.getItem("userEmail");
    const tipo = localStorage.getItem("userTipo");

    if (token) {
      setAuthToken(token);
      setUserEmail(email);
      setUserTipo(tipo);
    }
  }, []);

  const handleLogin = (token, email, tipo) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userTipo", tipo);
    setAuthToken(token);
    setUserEmail(email);
    setUserTipo(tipo);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuthToken(null);
    setUserEmail("");
    setUserTipo("");
  };

  const redirecionamentoPorTipo = () => {
    if (userTipo === "TIPO1" || userTipo === "ADMIN") return "/admin";
    if (userTipo === "TIPO2" || userTipo === "PROFISSIONAL") return "/sobremimprofissional";
    if (userTipo === "TIPO3" || userTipo === "PACIENTE") return "/sobremimpaciente";
    return "/home";
  };

  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
        {authToken && <Header userEmail={userEmail} onLogout={handleLogout} />}

        <div className="flex-grow">
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={authToken ? <Navigate to={redirecionamentoPorTipo()} /> : <LoginPage onLogin={handleLogin} />} />
            <Route path="/signup" element={<SignupPage />} />

            {/* Rotas privadas */}
            {authToken ? (
              <>
                <Route path="/home" element={<HomePage />} />
                <Route path="/atendentes" element={<SpecialistsPage />} />
                <Route path="/sobremimpaciente" element={<AboutmePage />} />
                <Route path="/sobremimprofissional" element={<AboutProfissionalPage />} />
                <Route path="/agenda" element={<AppointmentsPage />} />
                <Route path="/horario" element={<HorarioPage />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/evolucao" element={<EvolucaoClinicaPage />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" />} />
            )}
          </Routes>
        </div>

        {authToken && <Footer />}
      </div>
    </Router>
  );
}

export default App;
