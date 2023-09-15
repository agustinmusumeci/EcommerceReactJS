import icon_cart from "../../../assets/icons/icon_cart.svg";

import { Link } from "react-router-dom";

import useCart from "../../../hooks/useCart";
import { useEffect, useState } from "react";

function CartWidget() {

    const {cart} = useCart();

    const [counter, setCounter] = useState(0);

    useEffect(
        () => {
            cart.forEach(() => {
                setCounter(counter + 1)
            });
        }, [cart]
    )

    return (
        <Link to="/cart" className="cart-widget">
                <img src={icon_cart} alt="cart" className="cart-icon"/>
                <p className="cart-widget-count">{counter}</p>
        </Link>
    );
}

export default CartWidget