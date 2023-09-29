import './Cart.css'
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart.js';

function CartItem({ thumbnail,price,title,quantity, addToCart, removeToCart}) {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> -${price}
            </div>
            <footer>
                <button onClick={removeToCart}>-</button>
                    <small>
                    Qty: {quantity}
                    </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li> 
    )
}


export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart, removeToCart } = useCart()

    
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className="cart">
                <ul>
                    {cart.map(produc => (
                        <CartItem key={produc.id}                            
                            {...produc}
                            addToCart={() => addToCart(produc)}    
                            removeToCart={()=> removeToCart(produc)}
                        />
                    ))}  
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}