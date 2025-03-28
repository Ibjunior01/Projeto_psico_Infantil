import { useEffect, useState } from "react";
import api from "./api";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get("/usuarios")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar usuários", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map((user) => (
          <li key={user.id}>{user.email} - {user.tipo}</li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
