import './navbar.css';

import ArtBtn from '../ArtBtn/ArtBtn'

const Navbar = () =>{
    return(
        <div className='navbar__Container'>
        <nav className="navbar navbar-expand-lg bg-body-light px-5">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Tono Lila Logo</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse align-middle" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <a className="nav-link navbar__Btn" aria-current="page" href="#">¿Quíen soy?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navbar__Btn" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><ArtBtn /></a>
                        </li>
                        
                    </ul>                
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar