import { useEffect, useState } from "react";
import { getContacts, deleteContact } from "../api/contactAPI";
import ContactCard from "../components/ContactCard";
import Modal from "../components/Modal";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const data = await getContacts("julio");
        setContacts(data);
      } catch (error) {
        console.log("Error al cargar los contactos", error)
        setError("Error al cargar los contactos");
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleDelete = async (contactId) => {
    setSelectedContact(contactId);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    await deleteContact(selectedContact);
    setContacts(await getContacts());
    setShowModal(false);
  };

  return (
    <div className="container">
      <h2 className="mt-4">Lista de Contactos</h2>
      {loading && <p>Cargando contactos...</p>}
      {error && <p className="text-danger">{error}</p>}
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