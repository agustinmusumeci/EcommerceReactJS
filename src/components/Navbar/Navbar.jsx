// COMPONENTS
import CartWidget from './CartWidget/CartWidget'
import Marquee from './Marquee/Marquee';

import { Link } from 'react-router-dom';

// CUSTOM HOOK
import { useNavigate } from 'react-router-dom';

function Navbar() {
    
    const navigate = useNavigate();

    const goBackHome = () => {
        navigate("/");
    }

    return (
        <nav className="nav">
            <Marquee/>
            
            <div className="nav-heading">
                <h1 className="h1" onClick={goBackHome}>
                    Aside of style
                </h1>
            </div>
            <div className="nav-bar">
                <ul className="ul">
                    <Link className="li" to="/">home</Link>
                    <Link className="li" to="/products">products</Link>
                    <Link className="li" to="/info">info</Link>
                </ul>
                <CartWidget className="cart-widget"/>
            </div>
        </nav>
    );
}

export default Navbar