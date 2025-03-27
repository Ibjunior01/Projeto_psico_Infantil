import React, { useState } from "react";

const specialists = [
  {
    id: 1,
    name: "Dr. João Silva",
    specialty: "Psicologia Clínica",
    image: "https://via.placeholder.com/150",
    bio: "Especialista em terapia cognitivo-comportamental com mais de 10 anos de experiência."
  },
  {
    id: 2,
    name: "Dra. Maria Souza",
    specialty: "Psicanálise",
    image: "https://via.placeholder.com/150",
    bio: "Atendimento focado em transtornos de ansiedade e depressão."
  }
];

function SpecialistsPage() {
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Nossos Especialistas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((specialist) => (
          <div key={specialist.id} className="bg-white shadow-md rounded-lg p-4 text-center">
            <img
              src={specialist.image}
              alt={specialist.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{specialist.name}</h2>
            <p className="text-gray-600">{specialist.specialty}</p>
            <button 
              onClick={() => setSelectedSpecialist(specialist)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Ver Perfil
            </button>
          </div>
        ))}
      </div>
      
      {selectedSpecialist && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm relative">
            <button
              onClick={() => setSelectedSpecialist(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <img
              src={selectedSpecialist.image}
              alt={selectedSpecialist.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-800 text-center">{selectedSpecialist.name}</h2>
            <p className="text-gray-600 text-center">{selectedSpecialist.specialty}</p>
            <p className="text-gray-700 mt-4 text-center">{selectedSpecialist.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfissionaisPage;

