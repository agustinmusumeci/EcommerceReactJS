import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

// CUSTOM HOOKS
import useCart from '../../hooks/useCart';



function ItemCount({product}) {  

    const {cart, addToCart, delFromCart, clearCart} = useCart();


    return (
        <div className='item-counter'>
            <button href="#" className="btn btn-primary" onClick={() => {addToCart(product)}} >Add</button>
            <NumberInput min={0} max={product.stock} step={1}
            slotProps={{
                incrementButton: { children: "+" },
                decrementButton: { children: "-" },
            }}
            />
        </div>
    );
}

export default ItemCount