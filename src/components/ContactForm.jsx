import { useState } from "react";
import PropTypes from "prop-types";

function ContactForm({ onSubmit, initialData }) {
  const [name, setName] = useState(initialData?.name || "");
  const [email, setEmail] = useState(initialData?.email || "");
  const [phone, setPhone] = useState(initialData?.phone || "");
  const [address, setAddress] = useState(initialData?.address || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, phone, address });
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Teléfono</label>
        <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div className="mb-3">
        <label className="form-label">Dirección</label>
        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">
        {initialData ? "Actualizar" : "Crear"} Contacto
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default ContactForm;
