import { useEffect, useState } from "react";
import { getAgendas, createAgenda, deleteAgenda } from "../api/contactAPI";
import AgendaForm from "../components/AgendaForm";

function AgendaList() {
  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    getAgendas().then(setAgendas);
  }, []);

  const handleCreate = async (agendaData) => {
    await createAgenda(agendaData.slug);
    setAgendas(await getAgendas());
  };

  const handleDelete = async (slug) => {
    await deleteAgenda(slug);
    setAgendas(await getAgendas());
  };

  return (
    <div className="container">
      <h2 className="mt-4">Lista de Agendas</h2>
      <AgendaForm onSubmit={handleCreate} />
      <ul className="list-group mt-3">
        {agendas.map((agenda) => (
          <li key={agenda.id} className="list-group-item d-flex justify-content-between align-items-center">
            {agenda.slug}
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(agenda.slug)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgendaList;