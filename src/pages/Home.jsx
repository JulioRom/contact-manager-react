import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container text-center">
      <h1 className="mt-5">Bienvenido a Contact Manager</h1>
      <p>Gestiona tus agendas y contactos de manera sencilla.</p>
      <Link to="/agendas" className="btn btn-primary m-2">Ver Agendas</Link>
      <Link to="/contacts" className="btn btn-secondary m-2">Ver Contactos</Link>
    </div>
  );
}

export default Home;