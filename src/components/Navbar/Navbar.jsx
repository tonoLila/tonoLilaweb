import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__Container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
