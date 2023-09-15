import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

function useCart() {
    const cart = useContext(CartContext)

    return cart
}

export default useCart