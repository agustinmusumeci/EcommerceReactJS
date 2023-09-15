import useCart from "../../hooks/useCart";

function Cart() {
    const { cart, delFromCart, clearCart } = useCart();
    return (
        <section className="cart-page">
            <h2 className="cart-title">Your cart ⚡</h2>
            {cart.map((product) => (
                    <article key={product.id}>
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <p>{product.amount}</p>
                        <button href="#" className="btn btn-primary" onClick={() => {delFromCart({product})}} >Remove</button>
                    </article>
                ))}
            <button className="btn btn-primary" onClick={clearCart}>Clear your cart</button>
        </section>
    );
}

export default Cart