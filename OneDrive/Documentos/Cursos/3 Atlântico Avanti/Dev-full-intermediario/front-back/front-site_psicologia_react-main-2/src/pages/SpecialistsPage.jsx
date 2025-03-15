import React, { useState } from "react";

function SpecialistsPage() {
  const specialists = [
    {
      name: "Dr. João Silva",
      role: "Psicólogo",
      experience: "5 anos",
      description: "Especializado em psicologia infantil com foco em terapia cognitivo-comportamental.",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR24rp2rem3z6nTy58rDaNDxrdLMSe9Vtv69A&s", 
      schedule: [
        { day: "Segunda-feira", times: ["09:00", "11:00", "15:00"] },
        { day: "Quarta-feira", times: ["10:00", "14:00", "16:00"] },
      ],
      emergencyTimes: ["17:00", "18:00"], 
      activities: ["Desenhos para expressar emoções", "Técnicas de mindfulness", "Jogos de comunicação"],
    },
    {
      name: "Dra. Ana Costa",
      role: "Terapeuta",
      experience: "3 anos",
      description: "Trabalha com crianças que enfrentam desafios emocionais e sociais.",
      photo: "https://img.freepik.com/fotos-premium/mulher-negra-medica-terapeuta-personagem-de-desenho-animado-3d_986960-6835.jpg",
      schedule: [
        { day: "Terça-feira", times: ["08:00", "10:00", "14:00"] },
        { day: "Quinta-feira", times: ["09:00", "13:00", "15:00"] },
      ],
      emergencyTimes: ["16:00"],
      activities: ["Histórias para explorar emoções", "Jogos para desenvolver empatia", "Técnicas de relaxamento"],
    },
    {
      name: "Dr. Carlos Oliveira",
      role: "Psiquiatra",
      experience: "10 anos",
      description: "Psiquiatra especializado em transtornos infantis, como TDAH e ansiedade.",
      photo: "https://img.freepik.com/psd-premium/avatar-de-desenho-animado-3d-de-medico-muito-barbudo_1020-5142.jpg",
      schedule: [
        { day: "Segunda-feira", times: ["10:00", "12:00", "16:00"] },
        { day: "Sexta-feira", times: ["09:00", "11:00", "14:00"] },
      ],
      emergencyTimes: ["15:00", "17:00"],
      activities: ["Exercícios de respiração", "Histórias de superação", "Técnicas de regulação emocional"],
    },
  ];

  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [notes, setNotes] = useState({});
  const [newNote, setNewNote] = useState("");

  const handleScheduleClick = (specialist) => {
    setSelectedSpecialist(specialist);
  };

  const closeModal = () => {
    setSelectedSpecialist(null);
    setNewNote("");
  };

  const handleSaveNote = () => {
    if (newNote.trim() && selectedSpecialist) {
      setNotes((prev) => ({
        ...prev,
        [selectedSpecialist.name]: [...(prev[selectedSpecialist.name] || []), newNote],
      }));
      setNewNote("");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-blue-800 text-4xl font-bold mb-8">Nossos Especialistas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((specialist, index) => (
          <div
          key={index}
          className="bg-blue-800 text-white p-4 rounded-lg flex flex-col items-center transform transition-transform hover:translate-y-[-5px] shadow-lg"
        >
            <img
              src={specialist.photo}
              alt={specialist.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{specialist.name}</h2>
            <p>{specialist.role}</p>
            <p>{specialist.experience}</p>
            <p className="text-sm italic mt-2">{specialist.description}</p>
            <button
              className="mt-4 bg-yellow-300 text-blue-800 py-2 px-4 rounded"
              onClick={() => handleScheduleClick(specialist)}
            >
              Detalhes e Agendamento
            </button>
          </div>
        ))}
      </div>

      {selectedSpecialist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue-800 text-white p-6 rounded-lg w-96 max-h-[90vh] overflow-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedSpecialist.name}</h2>
            <p className="mb-4">{selectedSpecialist.description}</p>

            <div className="mb-6">
              <h3 className="font-bold">Horários disponíveis:</h3>
              {selectedSpecialist.schedule.map((slot, index) => (
                <div key={index} className="mt-4">
                  <h4>{slot.day}</h4>
                  <div className="flex flex-wrap gap-2">
                    {slot.times.map((time, idx) => (
                      <button
                        key={idx}
                        className="bg-yellow-300 text-blue-800 py-1 px-3 rounded hover:bg-yellow-400 transition"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              {selectedSpecialist.emergencyTimes.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-bold">Horários Emergenciais:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSpecialist.emergencyTimes.map((time, idx) => (
                      <button
                        key={idx}
                        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="font-bold">Atividades Sugeridas:</h3>
              <ul className="list-disc ml-4">
                {selectedSpecialist.activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold">Notas sobre Pacientes:</h3>
              <div className="space-y-2">
                {(notes[selectedSpecialist.name] || []).map((note, idx) => (
                  <p key={idx} className="bg-gray-200 text-blue-800 p-2 rounded">
                    {note}
                  </p>
                ))}
              </div>
              <textarea
                className="w-full mt-4 p-2 rounded text-blue-800"
                rows="3"
                placeholder="Escreva uma nota..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              ></textarea>
              <button
                className="mt-2 bg-yellow-300 text-blue-800 py-2 px-4 rounded w-full"
                onClick={handleSaveNote}
              >
                Salvar Nota
              </button>
            </div>

            <button
              className="mt-6 bg-red-500 py-2 px-4 rounded hover:bg-red-600 transition w-full"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SpecialistsPage;
