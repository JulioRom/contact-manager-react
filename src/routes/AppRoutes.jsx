import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AgendaList from "../pages/AgendaList";
import ContactList from "../pages/ContactList";
import AddContact from "../pages/AddContact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-contact" element={<AddContact />} />
      <Route path="/agendas" element={<AgendaList />} />
      <Route path="/contacts" element={<ContactList />} />
    </Routes>
  );
}

export default AppRoutes;