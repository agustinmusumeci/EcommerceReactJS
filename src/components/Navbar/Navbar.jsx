// COMPONENTS
import { useState } from 'react';
import CartWidget from './CartWidget/CartWidget';
import Marquee from './Marquee/Marquee';

import { Link } from 'react-router-dom';

// CUSTOM HOOK
import { useNavigate } from 'react-router-dom';
import useFilters from '../../hooks/useFilters';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function Navbar() {
    
    const navigate = useNavigate();

    const {filters, filteredProducts, setFilters} = useFilters()

    const goBackHome = () => {
        navigate("/");
    }

    if (navigate === "/") {
        setOpen(false)
    }

    const handleClick = (event) => {
        setFilters(previousState => ({
            ...previousState, category: event.target.value
        }))
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
                    
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                        <React.Fragment>
                            <Link className="li" to="/products">
                                <Button {...bindTrigger(popupState)}>
                                    products
                                </Button>
                            </Link>
                                <Menu {...bindMenu(popupState)}>
                                    <MenuItem onClick={popupState.close}><button onClick={handleClick} value="all" className='category-button'>All</button></MenuItem>
                                    <MenuItem onClick={popupState.close}><button onClick={handleClick} value="tshirt" className='category-button'>Shirts</button></MenuItem>
                                    <MenuItem onClick={popupState.close}><button onClick={handleClick} value="pant" className='category-button'>Pants</button></MenuItem>
                                    <MenuItem onClick={popupState.close}><button onClick={handleClick} value="hoodie" className='category-button'>Hoodies</button></MenuItem>
                                </Menu>
                        </React.Fragment>
                        )}
                    </PopupState>
                    
                    <Link className="li" to="/info">info</Link>
                </ul>
                <CartWidget className="cart-widget"/>
            </div>
        </nav>
    );
}

export default Navbar