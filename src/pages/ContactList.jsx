import { useEffect, useState } from "react";
import { getContacts, deleteContact, getAgendas } from "../api/contactAPI";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [agendas, setAgendas] = useState([]);
  const [selectedAgenda, setSelectedAgenda] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Función para obtener contactos segun la agenda seleccionada
  const fetchContacts = async (agenda = "") => {
    try {
      setLoading(true);
      setError(null);
      const data = await getContacts(agenda);
      setContacts(data);
    } catch (error) {
      console.error("Error al cargar los contactos", error);
      setError("Error al cargar los contactos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAgendas().then(setAgendas);
    fetchContacts(); // Carga inicial de contactos
  }, []);

  useEffect(() => {
    fetchContacts(selectedAgenda);
  }, [selectedAgenda]);

  useEffect(() => {
    if (selectedAgenda !== "") {
      getContacts(selectedAgenda).then(setContacts);
    } else {
      getContacts().then(setContacts);
    }
  }, [selectedAgenda]);

  const handleDelete = async (contactId) => {
    setSelectedContact(contactId);
    setShowModal(true);
  };

  const handleAgendaChange = (event) => {
    setSelectedAgenda(event.target.value);
  };

  const confirmDelete = async () => {
    try {
      await deleteContact(selectedContact);
      setContacts((prevContacts) => prevContacts.filter((c) => c.id !== selectedContact));
      setShowModal(false);
    } catch (error) {
      console.error("Error al eliminar contacto", error);
      setError("No se pudo eliminar el contacto.");
    }
  };
  return (
    <div className="container">
      <h2 className="mt-4">Lista de Contactos</h2>
      {loading && <p>Cargando contactos...</p>}
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <label className="form-label">Selecciona una Agenda</label>
        <select
          className="form-select"
          value={selectedAgenda}
          onChange={handleAgendaChange}
        >
          <option value="">Todas las Agendas</option>
          {agendas.map((agenda) => (
            <option key={agenda.id} value={agenda.slug}>{agenda.slug}</option>
          ))}
        </select>
      </div>
      <div className="row">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
          ))
        ) : (
          !loading && <p className="text-muted">No hay contactos disponibles.</p>
        )}
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} onConfirm={confirmDelete}>
        ¿Estás seguro de que deseas eliminar este contacto?
      </Modal>
    </div>
  );
}

export default ContactList;