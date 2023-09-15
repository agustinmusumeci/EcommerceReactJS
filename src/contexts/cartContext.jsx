import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = ({product}) => {
        
        const productIndex = cart.findIndex(item => item.id == product.id)

        if (productIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productIndex].amount += 1 
            setCart(newCart)
            console.log(cart)
        } else {
            setCart(prevState => ([...prevState, {...product, amount: 1}]))
            console.log(cart)
        }
        
    }

    const delFromCart = ({product}) => {
        setCart(cart.filter(item => item.id != product.id))
        console.log(cart)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart, addToCart, delFromCart,clearCart}}>
            {children}
        </CartContext.Provider>
    );
}