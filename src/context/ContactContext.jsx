import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAgendas } from "../api/contactAPI";

const ContactContext = createContext();

export const useContacts = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
  const [agendas, setAgendas] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getAgendas().then(setAgendas);
  }, []);

  return (
    <ContactContext.Provider value={{ agendas, contacts, setAgendas, setContacts }}>
      {children}
    </ContactContext.Provider>
  );
};

ContactProvider.propTypes = {
  children: PropTypes.node.isRequired,
};