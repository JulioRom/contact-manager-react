import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAgenda } from "../api/contactAPI";

function AddAgenda() {
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    await createAgenda(slug);
    navigate("/contacts");
  };

  return (
    <div className="container">
      <h2 className="mt-4">Crear Nueva Agenda</h2>
      <form onSubmit={handleCreate} className="mb-3">
        <div className="mb-3">
          <label className="form-label">Nombre de la Agenda</label>
          <input
            type="text"
            className="form-control"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Crear Agenda</button>
      </form>
    </div>
  );
}

export default AddAgenda;