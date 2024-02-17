import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="header navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <Link to="/" className="brand">
          Tono <span>Lila</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/aboutme" className="nav-link navbar__Btn">
                Quien soy?
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tienda" className="nav-link navbar__Btn">
                Tienda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto" className="nav-link navbar__Btn">
                ¡Hagamos arte!
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
