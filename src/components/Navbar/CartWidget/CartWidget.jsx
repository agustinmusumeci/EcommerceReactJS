import Cart from "../../../assets/icons/cart.svg"

function CartWidget() {
    
    return (
        <>
        <a className="cart-widget" href="#">
            <img src={Cart} alt="cart" className="cart-icon"/>
            <p className="cart-widget-count">0</p>
        </a>
        </>
    );
}

export default CartWidget