import Header from "./components/Header/Header.jsx";
import Aboutme from "./pages/Aboutme.jsx";
import Tienda from "./pages/Tienda.jsx";
import Contacto from "./pages/Contacto.jsx";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
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
