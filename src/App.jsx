import Navbar from "./components/navbar/navbar.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Tienda from "./pages/Tienda.jsx";
import Contacto from "./pages/Contacto.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
