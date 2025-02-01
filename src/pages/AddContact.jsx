import { useNavigate } from "react-router-dom";
import { createContact } from "../api/contactAPI";
import ContactForm from "../components/ContactForm";

function AddContact() {
  const navigate = useNavigate();

  const handleCreate = async (contactData) => {
    await createContact("julio", contactData);
    navigate("/contacts");
  };

  return (
    <div className="container">
      <h2 className="mt-4">Añadir Contacto</h2>
      <ContactForm onSubmit={handleCreate} />
    </div>
  );
}

export default AddContact;