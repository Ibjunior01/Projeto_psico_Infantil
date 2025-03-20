import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAppointments: 0,
    freeAppointments: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = [
        { id: 1, name: "Alice", type: "Paciente", status: "Ativo" },
        { id: 2, name: "Dr. Bob", type: "Profissional", status: "Aguardando Aprovação" },
      ];
      const fetchedAppointments = [
        { id: 1, patient: "Alice", professional: "Dr. Bob", status: "Concluído" },
      ];
      setUsers(fetchedUsers);
      setAppointments(fetchedAppointments);
      setStats({
        totalUsers: fetchedUsers.length,
        totalAppointments: fetchedAppointments.length,
        freeAppointments: fetchedAppointments.filter(a => a.status === "Concluído").length,
      });
    };
    fetchData();
  }, []);

  const approveUser = (id) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, status: "Ativo" } : user
      )
    );
  };

  return (
    <div className="min-h-screen flex bg-blue-100 p-6">
      <main className="flex-1">
        <section id="dashboard" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Dashboard</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Usuários Cadastrados</h3>
              <p className="text-4xl font-bold">{stats.totalUsers}</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Atendimentos Realizados</h3>
              <p className="text-4xl font-bold">{stats.totalAppointments}</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">Atendimentos Gratuitos</h3>
              <p className="text-4xl font-bold">{stats.freeAppointments}</p>
            </div>
          </div>
        </section>
        <section id="users" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Gerenciamento de Usuários</h2>
          <table className="w-full border-collapse border border-blue-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-blue-300 p-2">Nome</th>
                <th className="border border-blue-300 p-2">Tipo</th>
                <th className="border border-blue-300 p-2">Status</th>
                <th className="border border-blue-300 p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td className="border border-blue-300 p-2">{user.name}</td>
                  <td className="border border-blue-300 p-2">{user.type}</td>
                  <td className="border border-blue-300 p-2">{user.status}</td>
                  <td className="border border-blue-300 p-2">
                    {user.status === "Aguardando Aprovação" && (
                      <button
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={() => approveUser(user.id)}
                      >
                        Aprovar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <section id="appointments" className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Gerenciamento de Atendimentos</h2>
          <table className="w-full border-collapse border border-blue-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="border border-blue-300 p-2">Paciente</th>
                <th className="border border-blue-300 p-2">Profissional</th>
                <th className="border border-blue-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td className="border border-blue-300 p-2">{appointment.patient}</td>
                  <td className="border border-blue-300 p-2">{appointment.professional}</td>
                  <td className="border border-blue-300 p-2">{appointment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;









