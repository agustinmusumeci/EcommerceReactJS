import CartWidget from './CartWidget'
import Marquee from './Marquee';
import './styles.css'
import { useState } from 'react';

function Navbar() {
    
    return (
        <nav className="navbar">
            <Marquee/>
            <div className="navbar-heading">
                <h1 className="h1">
                    Aside of style
                </h1>
            </div>
            <div className="navbar-navigation">
                <ul className="ul">
                    <li className="li"><a href="#" className='a'>home</a></li>
                    <li className="li"><a href="#featured-products" className='a'>products</a></li>
                    <li className="li"><a href="#" className='a'>info</a></li>
                </ul>
                <CartWidget className="cart-widget"/>
            </div>
        </nav>
    );
}

export default Navbar