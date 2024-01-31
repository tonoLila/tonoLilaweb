import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="brand">
        Tono <span>Lila</span>
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
