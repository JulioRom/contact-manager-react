import PropTypes from "prop-types";

function ContactCard({ contact, onDelete }) {
  return (
    <div className="card m-2 p-3">
      <h5>{contact.name}</h5>
      <p>Email: {contact.email}</p>
      <p>Teléfono: {contact.phone}</p>
      <button className="btn btn-danger btn-sm" onClick={() => onDelete(contact.id)}>Eliminar</button>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactCard;
