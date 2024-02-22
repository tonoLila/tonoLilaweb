import Navbar from "./components/navbar/navbar";
import Aboutme from "./pages/Aboutme";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import Home from './components/Home/Home'
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
