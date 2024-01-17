import './header.css';

const Header = ({title, imageUrl, btn, text, boldText}) => {
    return (
        <div className="header">
            <div className="container text-center header__Content">
                <div className="row align-items-center">
                    <div className="col-6 d-flex justify-content-center">                        
                        <div className='header__Content-Image-Container'>
                            <img src={imageUrl} className='header__Content-Image'/>
                        </div>                        
                    </div>
                <div className="col-5 text-start">
                        <h2 className='header__Title'>{title}</h2>
                        <p>{text}</p>
                        <p className='header__BoldText'>{boldText}</p>
                        <button className='header__Btn'>{btn}</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Header;