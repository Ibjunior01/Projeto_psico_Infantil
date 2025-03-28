import { useState } from "react";

const appointments = [
  { id: 1, name: "João Silva", day:"05/03", time: "10:00 AM", disease: "Depressão", details: "Toma Seakalm", age:"18 anos" },
  { id: 2, name: "Maria Oliveira",day:"05/03", time: "11:00 AM", disease: "Ansiedade", details: "Toma Amitriptilina", age:"14 anos" },
  { id: 3, name: "Carlos Souza",day:"05/03", time: "1:00 PM", disease: "TDAH", details: "Toma Cardenal", age:"19 anos" }
];

function AppointmentsPage() {
  const [status, setStatus] = useState(
    appointments.reduce((acc, appt) => ({ ...acc, [appt.id]: "pendente" }), {})
  );

  const handleConfirm = (id) => {
    if (status[id] === "pendente") {
      if (window.confirm("Você deseja confirmar o atendimento?")) {
        setStatus((prev) => ({ ...prev, [id]: "atendido" }));
      }
    }
  };

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {appointments.map((appt) => (
        <div
          key={appt.id}
          className="bg-white p-4 shadow-lg rounded-xl border transition-all duration-500 transform hover:scale-105 hover:translate-x-[-5%] hover:translate-y-[-5%] hover:relative hover:z-10"
        >
          <h2 className="text-xl font-semibold">{appt.name}</h2>
          <p className="text-gray-600">Horário: {appt.time}</p>
          <p className="text-gray-600">Data: {appt.day}</p>
          <p className="text-gray-600">Doença: {appt.disease}</p>
          <p className="text-gray-600">Detalhes: {appt.details}</p>
          <p className="text-gray-600">Idade: {appt.age}</p>
          <div
            className={`mt-4 w-full text-center py-2 rounded-lg text-white cursor-pointer transition-all ${
              status[appt.id] === "pendente" ? "bg-red-500" : "bg-green-500"
            }`}
            onClick={() => handleConfirm(appt.id)}
          >
            {status[appt.id] === "pendente" ? "Pendente" : "Atendido"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppointmentsPage;

