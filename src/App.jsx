import Navbar from "./components/Navbar";
import { ContactProvider } from "./context/ContactContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <ContactProvider>
      <Navbar />
      <div className="container mt-3">
        <AppRoutes />
      </div>
    </ContactProvider>
  );
}

export default App;