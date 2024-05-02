import Navbar from "@components/Navbar";
import Aboutme from "@pages/Aboutme";
import Tienda from "@pages/Tienda";
import Contacto from "@pages/Contacto";
import Home from "@components/Home";
import Voces from "@pages/Voces";
import Creaciones from "@pages/Creaciones";
import Comunidad from "@pages/Comunidad";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/voces" element={<Voces />} />
          <Route path="/creaciones" element={<Creaciones />} />
          <Route path="/comunidad" element={<Comunidad />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
