import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SpecialistsPage from "./pages/SpecialistsPage";
import AboutmePage from "./pages/AboutmePage";
import LoginPage from "./pages/LoginPage";
import AppointmentsPage from "./pages/AppointmentsPage";
import HorarioPage from "./pages/HorarioPage";
import AdminPanel from "./pages/AdminPanel";
import Footer from "./components/Footer";

function App() {
  const [userRole, setUserRole] = useState(null);
  const [userName, setUserName] = useState('');

  const handleLogin = (role, name) => {
    setUserRole(role);
    setUserName(name);
  };

  const handleLogout = () => {
    setUserRole(null);
    setUserName('');

    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <div className="font-sans min-h-screen flex flex-col">
    
        {userRole && <Header userRole={userRole} userName={userName} onLogout={handleLogout} />}

        <div className="flex-grow">
          <Routes>
            {!userRole ? (
              <>
                <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
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

        {userRole && <Footer />}
      </div>
    </Router>
  );
}

export default App;




