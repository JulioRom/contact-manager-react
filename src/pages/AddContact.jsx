import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createContact, getAgendas} from "../api/contactAPI";
import ContactForm from "../components/ContactForm";

function AddContact() {
  const [agendas, setAgendas] = useState([]);
  const [selectedAgenda, setSelectedAgenda] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAgendas().then(setAgendas);
  }, []);

  const handleCreate = async (contactData) => {
    if (!selectedAgenda) {
      alert("Por favor, selecciona una agenda.");
      return;
    }
    await createContact(selectedAgenda, contactData);
    navigate("/contacts");
  };

  return (
    <div className="container">
      <h2 className="mt-4">Añadir Contacto</h2>
      <div className="mb-3">
        <label className="form-label">Selecciona una Agenda</label>
        <select
          className="form-select"
          value={selectedAgenda}
          onChange={(e) => setSelectedAgenda(e.target.value)}
        >
          <option value="">Selecciona una agenda</option>
          {agendas.map((agenda) => (
            <option key={agenda.id} value={agenda.slug}>{agenda.slug}</option>
          ))}
        </select>
      </div>
      <ContactForm onSubmit={handleCreate} />
    </div>
  );
}

export default AddContact;