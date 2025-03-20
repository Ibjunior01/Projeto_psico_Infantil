import { useState } from "react";

function HorarioPage() {
  const [dias, setDias] = useState([]);
  const [horarios, setHorarios] = useState({});

  const adicionarDia = () => {
    const novoDia = new Date().toISOString().split("T")[0];
    setDias([...dias, novoDia]);
    setHorarios({ ...horarios, [novoDia]: [] });
  };

  const alterarDia = (index, valor) => {
    const novosDias = [...dias];
    const antigoDia = novosDias[index];
    novosDias[index] = valor;

    const novosHorarios = { ...horarios };
    if (antigoDia in novosHorarios) {
      novosHorarios[valor] = novosHorarios[antigoDia];
      delete novosHorarios[antigoDia];
    }

    setDias(novosDias);
    setHorarios(novosHorarios);
  };

  const adicionarHorario = (dia) => {
    setHorarios({ ...horarios, [dia]: [...(horarios[dia] || []), ""] });
  };

  const alterarHorario = (dia, index, valor) => {
    const novosHorarios = { ...horarios };
    novosHorarios[dia][index] = valor;
    setHorarios(novosHorarios);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-blue-800">Semanais</h1>
      <div className="bg-blue-900 p-6 text-white rounded-lg">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold">Dias disponíveis</h3>
            {dias.map((dia, index) => (
              <input
                key={index}
                type="date"
                value={dia}
                onChange={(e) => alterarDia(index, e.target.value)}
                className="block mt-2 p-2 text-black rounded-md"
              />
            ))}
            <button onClick={adicionarDia} className="mt-2 p-2 bg-indigo-600 text-white rounded-md">Adicionar Dia</button>
          </div>

          <div>
            <h3 className="text-lg font-bold">Horários disponíveis</h3>
            {dias.map((dia, index) => (
              <div key={index} className="mt-2">
                <span>{dia}</span>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {(horarios[dia] || []).map((horario, i) => (
                    <input
                      key={i}
                      type="time"
                      value={horario}
                      onChange={(e) => alterarHorario(dia, i, e.target.value)}
                      className="p-2 text-black rounded-md"
                    />
                  ))}
                </div>
                <button onClick={() => adicionarHorario(dia)} className="mt-2 p-2 bg-indigo-600 text-white rounded-md">Adicionar Horário</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button className="p-2 bg-gray-600 text-white rounded-md">Editar</button>
        <button className="p-2 bg-green-600 text-white rounded-md">Salvar</button>
      </div>
    </div>
  );
}

export default HorarioPage;