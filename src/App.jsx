import Navbar from "@components/Navbar";
import Aboutme from "@pages/Aboutme";
import Tienda from "@pages/Tienda";
import Contacto from "@pages/Contacto";
import Home from "@components/Home";
import Gallery from "@components/Gallery";
import Footer from "@components/Footer";
import HorizontalCarousel from "./components/HorizontalCarousel";
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
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/carousel" element={<HorizontalCarousel />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
